/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React, { FC, KeyboardEvent, useEffect, useId, useRef, useState } from 'react';
import { useOutsideElementClick } from '../../hooks';
import { preventScrolling } from '../../libs';
import { Icon } from '../icon';

import './user-area.scss';

export interface UserAreaOption {
  /** Specifies if the option is visible if user is authenticated */
  authenticatedOption: boolean;
  /** Link to be redirected when activated */
  value?: string;
  /** Icon to be rendered along label */
  icon?: string;
  /** Readable text of the option */
  label: string;
}

export interface UserAreaProps {
  /** Additional class names to add */
  className?: string;
  /** Username to set */
  username?: string;
  /** The icon name or src image to use */
  icon?: string;
  /** Defines if the user is authenticated. Affects the class name of the component */
  isAuthenticated?: boolean;
  /** Options configuration to display in the user area dropdown menu */
  options: UserAreaOption[];
  /** Callback to execute if option changed */
  onOptionChange: (val: UserAreaOption) => void;

  /** Aria label to apply to the dropdown */
  dropdownAriaLabel?: string;
}

const UserArea: FC<UserAreaProps> = ({
  className = '',
  username = 'Area reservada',
  icon = 'ama-user',
  isAuthenticated,
  options,
  onOptionChange,
  dropdownAriaLabel = 'Opções da Area Reservada'
}: UserAreaProps) => {
  const uid = useId();
  const selectControlsId = `ama-user-area-controls-id-${uid}`;

  const listboxRef = useRef(null);

  const [activeOptionList, setActiveOptionList] = useState([] as UserAreaOption[]);
  const [hoveredElementIndex, setHoveredElementIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveOptionList(options.filter((o) => o.authenticatedOption === isAuthenticated));
  }, [options, isAuthenticated]);

  const containerRef = useRef(null);

  const selectOption = (option: UserAreaOption) => {
    onOptionChange(option);
    setHoveredElementIndex(-1);
  };

  const focusPreviousOption = () => {
    setHoveredElementIndex((lastIndex) => {
      return Math.max(0, lastIndex - 1);
    });
  };

  const focusNextOption = () => {
    setHoveredElementIndex((lastIndex) => {
      return Math.min(activeOptionList.length - 1, lastIndex + 1);
    });
  };

  const focusFirst = () => {
    setHoveredElementIndex(0);
  };

  const focusLast = () => {
    setHoveredElementIndex(options.length - 1);
  };

  const keyboardHandler = (evt: KeyboardEvent) => {
    const { key } = evt;

    preventScrolling(evt);

    switch (key) {
      case 'Escape':
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
        }
        break;

      case 'Enter':
        if (hoveredElementIndex >= 0) {
          selectOption(activeOptionList[hoveredElementIndex]);
          setIsOpen(false);
        }
        break;

      case 'ArrowUp':
        if (!isOpen) {
          setIsOpen(true);
        } else {
          focusPreviousOption();
        }
        break;
      case 'ArrowDown':
        if (!isOpen) {
          setIsOpen(true);
        }

        focusNextOption();
        break;

      case 'PageUp':
        if (!isOpen) {
          setIsOpen(true);
        }

        focusFirst();

        break;
      case 'PageDown':
        if (!isOpen) {
          setIsOpen(true);
        }

        focusLast();
        break;

      default:
        if (!isOpen) {
          setIsOpen(true);
        }
        break;
    }
  };

  const onHeaderClickHandler = () => {
    setIsOpen((last) => !last);
  };

  const onUserOptionClick = (o: UserAreaOption) => {
    selectOption(o);
  };

  const buildOption = (o: UserAreaOption, index: number) => {
    const isHovered = hoveredElementIndex === index;
    const liClassname = classNames('menu-option d-flex align-items-center px-32', { active: isHovered });

    const optionId = `ama-user-area-${uid}-${o.value}`;

    return (
      <div
        role="option"
        aria-selected={isHovered}
        id={optionId}
        key={optionId}
        onClick={() => onUserOptionClick(o)}
        className={liClassname}
        aria-label={o.label}
      >
        {o.icon && <Icon className="option-icon" icon={o.icon} ariaHidden />}
        <span className="option-label ms-10">{o.label}</span>
      </div>
    );
  };

  const authenticatedOptions = options.filter((o) => o.authenticatedOption).map(buildOption);
  const anonymousOptions = options.filter((o) => !o.authenticatedOption).map(buildOption);

  const containerClasses = classNames(className, 'ama-user-area d-flex flex-column align-items-center justify-content-center', {
    authenticated: !!isAuthenticated
  });

  const dropdownClasses = classNames('drop-down-container w-100 position-relative', { 'd-none': !isOpen });

  useOutsideElementClick(containerRef, () => setIsOpen(false));

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      tabIndex={0}
      onKeyDown={keyboardHandler}
      onClick={onHeaderClickHandler}
      aria-controls={selectControlsId}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label={dropdownAriaLabel}
      aria-activedescendant={hoveredElementIndex >= 0 ? `ama-user-area-${uid}-${activeOptionList[hoveredElementIndex].value}` : ''}
      role="combobox"
    >
      <div className="toggler w-100 d-flex align-items-center justify-content-between">
        <Icon size="md" icon={icon} alt={username} ariaHidden />
        <span className="h5-bold">{username}</span>
        <Icon size="md" icon={isOpen ? 'ama-chevron-up' : 'ama-chevron-down'} alt={username} ariaHidden />
      </div>

      <div className={dropdownClasses} role="listbox" ref={listboxRef} id={selectControlsId}>
        <div className="drop-down-menu position-absolute w-100 top-0 left-0 py-16">
          {isAuthenticated && authenticatedOptions}
          {!isAuthenticated && anonymousOptions}
        </div>
      </div>
    </div>
  );
};

export { UserArea };
