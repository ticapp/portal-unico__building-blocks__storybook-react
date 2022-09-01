import classNames from 'classnames';
import React, { KeyboardEvent, ReactNode, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useOutsideElementClick } from '../../hooks';
import { preventScrolling } from '../../libs';
import { Icon } from '../icon';
import './customDropdown.scss';

export interface CustomDropdownOption {
  /** Value of the select option */
  value: string | number;
  /** Label of the select option */
  label?: string;
  /** If specified, will render in label element */
  children?: ReactNode;
}

export interface CustomDropdownProps {
  className?: string;
  /** Aria label to apply to the dropdown */
  ariaLabel?: string;
  /** Default selected option */
  active?: CustomDropdownOption;
  /** List of the available options to display */
  options: CustomDropdownOption[];
  /** Callback to be executed whenever the value change */
  onChange?: (val: CustomDropdownOption) => void;
  /** Show check mark on selected elements */
  showCheckMark?: boolean;
  /** Keep select options open */
  open?: boolean;

  /** Renders a custom dropdown control */
  dropdownControls?: ReactNode;
}

const CustomDropdown = ({
  className = '',
  ariaLabel = 'Dropdown',
  options,
  onChange,
  active,
  showCheckMark = false,
  open = false,

  dropdownControls
}: CustomDropdownProps) => {
  const uid = useId();
  const selectControlsId = useMemo(() => `ama-select-controls-id-${uid}`, [uid]);

  const comboRef = useRef<HTMLDivElement | null>(null);
  const listboxRef = useRef<HTMLDivElement | null>(null);

  const comboWrapperRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isComboExpanded, setIsComboExpanded] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  // Save a list of named combobox actions, for future readability
  const SelectActions = {
    Close: 0,
    First: 1,
    Last: 2,
    Next: 3,
    Open: 4,
    PageDown: 5,
    PageUp: 6,
    Previous: 7,
    Select: 8,
    SelectClose: 9,
    Tab: 10
  };

  // Get action when menu open
  function getActionWithMenuOpen(key: string, altKey: boolean): number {
    if (key === 'ArrowUp' && altKey) {
      return SelectActions.Select;
    }
    if (key === 'ArrowDown' && !altKey) {
      return SelectActions.Next;
    }
    if (key === 'ArrowUp') {
      return SelectActions.Previous;
    }
    if (key === 'PageUp') {
      return SelectActions.PageUp;
    }
    if (key === 'PageDown') {
      return SelectActions.PageDown;
    }
    if (key === 'Escape') {
      return SelectActions.Close;
    }
    if (key === 'Enter') {
      return SelectActions.SelectClose;
    }
    if (key === ' ') {
      return SelectActions.Select;
    }

    return -1;
  }

  // map a key press to an action
  function getActionFromKey(event, menuOpen): number {
    const { key, altKey } = event;

    if (key === 'Tab') {
      return SelectActions.Tab;
    }

    // home move the hovered option when open or closed
    if (key === 'Home') {
      return SelectActions.First;
    }

    // end move the hovered option when open or closed
    if (key === 'End') {
      return SelectActions.Last;
    }

    // handle opening when closed
    const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' ']; // all keys that will do the default open action
    if (!menuOpen && openKeys.includes(key)) {
      return SelectActions.Open;
    }

    // handle keys when open
    if (menuOpen) {
      return getActionWithMenuOpen(key, altKey);
    }

    return -1;
  }

  // get an updated option index after performing an action
  function getUpdatedIndex(currentIndex, maxIndex, action) {
    const pageSize = 10; // used for pageup/pagedown

    switch (action) {
      case SelectActions.First:
        return 0;
      case SelectActions.Last:
        return maxIndex;
      case SelectActions.Previous:
        return Math.max(0, currentIndex - 1);
      case SelectActions.Next:
        return Math.min(maxIndex, currentIndex + 1);
      case SelectActions.PageUp:
        return Math.max(0, currentIndex - pageSize);
      case SelectActions.PageDown:
        return Math.min(maxIndex, currentIndex + pageSize);
      default:
        return currentIndex;
    }
  }

  // check if element is visible in browser view port
  function isElementInView(element) {
    if (typeof window === 'undefined') {
      return true;
    }

    const bounding = element.getBoundingClientRect();

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // check if an element is currently scrollable
  function isScrollable(element) {
    return element && element.clientHeight < element.scrollHeight;
  }

  // ensure a given child element is within the parent's visible scroll area
  // if the child is not visible, scroll the parent
  function maintainScrollVisibility(elem, scrollParent) {
    const { offsetHeight, offsetTop } = elem;
    const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;

    const isAbove = offsetTop < scrollTop;
    const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

    if (isAbove) {
      scrollParent.scrollTo(0, offsetTop);
    } else if (isBelow) {
      scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
    }
  }

  const updateMenuState = (newOpenValue) => {
    if (!newOpenValue && open) {
      return;
    }

    setIsOpen((lastValue) => {
      if (lastValue === newOpenValue) {
        return lastValue;
      }

      // update aria-expanded and styles
      setIsComboExpanded(newOpenValue);

      if (newOpenValue) {
        setHoverIndex(selectedIndex);

        // scroll combo into view
        if (comboRef.current && !isElementInView(comboRef.current)) {
          comboRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      } else {
        setHoverIndex(-1);
      }

      return newOpenValue;
    });
  };

  const selectOption = (index) => {
    onChange?.(options[index]);
    setSelectedIndex(index);

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');
    optionsElems?.forEach((e, i) => {
      e.classList.remove('selected');
      if (i === index) {
        e.classList.add('selected');
      }
    });
  };

  const hoverOption = (index) => {
    setHoverIndex(index);

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');
    optionsElems?.forEach((e, i) => {
      e.classList.remove('hover');
      if (i === index) {
        e.classList.add('hover');
      }
    });

    if (optionsElems) {
      if (isScrollable(listboxRef.current)) {
        const curr = optionsElems[index];
        maintainScrollVisibility(curr, listboxRef.current);
        // ensure the new option is visible on screen
        // ensure the new option is in view
        if (!isElementInView(curr)) {
          curr.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }
    }
  };

  const onComboMouseDown = () => {
    updateMenuState(!isOpen);
  };

  const onOptionMouseDown = (index) => {
    selectOption(index);

    updateMenuState(false);
  };

  const onComboKeyDown = (evt: KeyboardEvent) => {
    const max = options.length - 1;

    const action = getActionFromKey(evt, isOpen);

    preventScrolling(evt);

    switch (action) {
      case SelectActions.Last:
      case SelectActions.First:
        updateMenuState(true);
        hoverOption(hoverIndex >= 0 ? getUpdatedIndex(hoverIndex, max, action) : 0);
        break;

      case SelectActions.Next:
      case SelectActions.Previous:
      case SelectActions.PageUp:
      case SelectActions.PageDown:
        hoverOption(hoverIndex >= 0 ? getUpdatedIndex(hoverIndex, max, action) : 0);
        break;

      case SelectActions.Close:
        updateMenuState(false);
        break;

      case SelectActions.Open:
        updateMenuState(true);
        break;

      case SelectActions.SelectClose:
        selectOption(hoverIndex);
        updateMenuState(false);

        break;

      case SelectActions.Select:
        selectOption(hoverIndex);

        break;

      case SelectActions.Tab:
        updateMenuState(false);
        break;

      case -1:
        break;

      default:
        break;
    }
  };

  const onMenuKeyDown = (evt: KeyboardEvent) => {
    // move focus back to the combobox, if needed
    comboRef.current?.focus();

    // business as usual
    onComboKeyDown(evt);
  };

  useOutsideElementClick(comboWrapperRef, () => updateMenuState(false));

  // Initial values
  useEffect(() => {
    if (active) {
      setSelectedIndex(options.findIndex((o) => o.value === active.value));
    }
  }, [active]);

  useEffect(() => {
    if (open) {
      updateMenuState(true);
    }
  }, [open]);

  const wrapperClassNames = classNames('custom-dropdown position-relative', className, { open: isOpen });

  return (
    <div id={uid} ref={comboWrapperRef} className={wrapperClassNames}>
      <div
        className="d-flex align-items-center justify-content-between"
        ref={comboRef}
        aria-label={ariaLabel}
        aria-controls={selectControlsId}
        aria-expanded={isComboExpanded}
        aria-haspopup="listbox"
        aria-activedescendant={hoverIndex >= 0 ? `${uid}-listbox-option-${hoverIndex}` : ''}
        role="combobox"
        tabIndex={0}
        onMouseDown={onComboMouseDown}
        onKeyDown={onComboKeyDown}
      >
        {!!dropdownControls && dropdownControls}
        {!dropdownControls && <span>{selectedIndex < 0 ? '' : options[selectedIndex].label}</span>}
        <Icon className="ms-8" icon={isOpen ? 'ama-chevron-up' : 'ama-chevron-down'} size="sm" ariaHidden />
      </div>

      <div
        ref={listboxRef}
        className={isOpen ? 'custom-dropdown-menu d-flex flex-column position-absolute top-100 end-0 w-100' : 'd-none'}
        role="listbox"
        id={selectControlsId}
        onKeyDown={onMenuKeyDown}
        tabIndex={-1}
      >
        {options.map((o, i) => {
          const isSelected = selectedIndex === i;

          const optionClassnames = classNames(
            'custom-dropdown-option w-100 d-flex align-items-center px-16 py-8',
            { selected: isSelected },
            { checked: isSelected && showCheckMark },
            { hover: hoverIndex === i }
          );

          const optionAriaLabel = isSelected ? `${o.label} selected` : o.label;
          const optionId = `${uid}-listbox-option-${i}`;
          return (
            <div
              key={optionId}
              id={optionId}
              tabIndex={-1}
              role="option"
              className={optionClassnames}
              onMouseDown={() => onOptionMouseDown(i)}
              onMouseEnter={() => hoverOption(i)}
              aria-selected={isSelected}
            >
              <span className="custom-dropdown-option-content me-8" aria-label={optionAriaLabel}>
                {o.children || o.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { CustomDropdown };
