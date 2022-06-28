/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React, { KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useOutsideElementClick } from '../../hooks';
import { Icon } from '../icon';
import './input-tag.scss';

export interface InputTagOption {
  label: string;
  id: string;
}

export interface InputTagProps {
  /** Add classes to the input tag component */
  className?: string;
  /** Set input label id */
  labeledBy?: string;
  /** Set the placeholder of input */
  placeholder?: string;
  /** Set autocomplete options */
  options: InputTagOption[];
  /** On change event */
  onChange?: (val: string[]) => void;
  /** Aria label to show in list box */
  optionsAriaLabel?: string;
}

export const InputTag = ({ className, labeledBy, placeholder, options, optionsAriaLabel = 'Opções', onChange }: InputTagProps) => {
  const classes = classNames('ama-input-tag', className);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);

  const [activeOptionId, setActiveOptionId] = useState('');
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);

  const [tags, setTags] = useState([] as string[]);
  const [availableOptions, setAvailableOptions] = useState(options);

  const [isOpen, setIsOpen] = useState(false);

  const openListBox = () => {
    setIsOpen(true);
  };

  const closeListBox = () => {
    setIsOpen(false);
    setActiveOptionId('');
    setActiveOptionIndex(-1);
  };

  const focusNextOption = () => {
    if (!availableOptions.length) {
      return;
    }

    setActiveOptionIndex((last) => {
      if (last === -1) {
        openListBox();
      }

      const newIndex = Math.min(last + 1, availableOptions.length - 1);

      if (listBoxRef.current) {
        const liOpttions = listBoxRef.current.querySelectorAll('li[role="option"]');
        const elem = liOpttions[newIndex];

        liOpttions.forEach((e) => e.classList.remove('focus'));
        elem.classList.add('focus');

        setActiveOptionId(elem.id);
      }

      return newIndex;
    });
  };

  const focusPreviousOption = () => {
    if (!availableOptions.length) {
      return;
    }

    setActiveOptionIndex((last) => {
      const newIndex = Math.max(last - 1, -1);

      if (listBoxRef.current) {
        const liOpttions = listBoxRef.current.querySelectorAll('li[role="option"]');
        const elem = liOpttions[newIndex];

        liOpttions.forEach((e) => e.classList.remove('focus'));

        if (newIndex === -1) {
          setActiveOptionId('');
          closeListBox();
        } else {
          elem.classList.add('focus');
          setActiveOptionId(elem.id);
        }
      }

      return newIndex;
    });
  };

  const updateAvailableOptions = () => {
    const val = inputRef.current?.value || '';

    setTags((lastTags) => {
      const newAvailableOptions = options.filter((o) => {
        return lastTags.indexOf(o.label) < 0;
      });

      if (!val) {
        setAvailableOptions(newAvailableOptions);
      } else {
        const filteredOptions = newAvailableOptions.filter((l) => {
          return l.label.toLowerCase().indexOf(val.toLowerCase()) >= 0;
        });

        setAvailableOptions(filteredOptions);
      }

      return lastTags;
    });
  };

  const tryAddTag = (tag = ''): void => {
    const value = tag || inputRef.current?.value || '';

    if (!value) {
      return;
    }

    const option = availableOptions.find((o) => {
      return o.label.toLowerCase() === value.toLowerCase();
    });

    if (!option) {
      return;
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setTags((lastTags: string[]) => {
      return [...lastTags, value];
    });

    setTags((last) => {
      updateAvailableOptions();

      onChange?.(last);
      return last;
    });

    closeListBox();
  };

  const removeTag = (tag: string) => {
    setTags((last) => {
      return last.filter((t) => t !== tag);
    });

    setTags((last) => {
      updateAvailableOptions();

      if (last.length === 0 && inputRef.current) {
        inputRef.current.focus();
      }

      return last;
    });
  };

  const onKeyDownHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
    const { key } = evt;

    switch (key) {
      case 'Enter':
        if (activeOptionIndex >= 0) {
          tryAddTag(availableOptions[activeOptionIndex].label);
        } else {
          if (inputRef.current?.value) {
            tryAddTag();
          }

          if (availableOptions.length === 1) {
            tryAddTag(availableOptions[0].label);
          }
        }

        break;
      case 'Escape':
        closeListBox();
        break;

      case 'ArrowUp':
        evt.preventDefault();
        if (isOpen) {
          focusPreviousOption();
        }
        break;
      case 'ArrowDown':
        evt.preventDefault();
        focusNextOption();
        break;

      case 'Backspace':
        if (inputRef.current && inputRef.current.value === '' && tags.length > 0) {
          const lastTag = tags[tags.length - 1];
          removeTag(lastTag);
        }

        break;
      default:
        openListBox();
        break;
    }
  };

  const onClickHandler = () => {
    openListBox();
  };

  const onTagClick = (_evt: MouseEvent<HTMLSpanElement>, tag: string) => {
    removeTag(tag);
  };

  const onTagKeyDown = (evt: KeyboardEvent<HTMLSpanElement>, tag: string) => {
    const { key } = evt;

    if (key === 'Enter' || key === 'Space') {
      removeTag(tag);
    }
  };

  const onOptionTagClick = (evt: MouseEvent<HTMLLIElement>, tag: string) => {
    setActiveOptionId((evt.target as HTMLLIElement).id);
    tryAddTag(tag);
  };

  const focusLiElement = (element: HTMLLIElement) => {
    if (listBoxRef.current) {
      const liOpttions = listBoxRef.current.querySelectorAll('li[role="option"]');
      liOpttions.forEach((e) => e.classList.remove('focus'));
      element.classList.add('focus');
      setActiveOptionId(element.id);
    }
  };

  const onOptionMouseOver = (evt: MouseEvent<HTMLLIElement>) => {
    const { target } = evt;
    focusLiElement(target as HTMLLIElement);
  };

  useOutsideElementClick(containerRef, () => closeListBox());

  const customInputId = uuidv4();
  const listBoxId = uuidv4();
  const listboxClassname = classNames(
    { 'd-block': isOpen },
    { 'd-none': !isOpen },
    'w-100 position-absolute top-0 left-0 w-100 py-16 px-0'
  );

  return (
    <div ref={containerRef} className={classes}>
      <div className="input-container px-16 py-12 d-flex flex-wrap gap-10">
        {tags.map((t) => {
          return (
            <span
              className="tag d-flex align-items-center px-16 py-4"
              key={uuidv4()}
              role="button"
              onClick={(evt: MouseEvent<HTMLSpanElement>) => onTagClick(evt, t)}
              tabIndex={0}
              onKeyDown={(evt: KeyboardEvent<HTMLSpanElement>) => onTagKeyDown(evt, t)}
              aria-label={t}
            >
              <span className="tag-name me-4">{t}</span>
              <Icon icon="ama-close-circle" size="sm" aria-hidden="true" />
            </span>
          );
        })}

        <input
          id={customInputId}
          ref={inputRef}
          placeholder={placeholder}
          onKeyDown={onKeyDownHandler}
          onChange={updateAvailableOptions}
          onClick={onClickHandler}
          onFocus={openListBox}
          className="flex-fill d-inline-block m-0 p-0"
          aria-controls={listBoxId}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={labeledBy}
          aria-activedescendant={activeOptionId}
          role="combobox"
          aria-autocomplete="list"
        />
      </div>

      <div className="autocomplete-container">
        <ul id={listBoxId} ref={listBoxRef} role="listbox" aria-label={optionsAriaLabel} className={listboxClassname}>
          {availableOptions.map((o, i) => {
            const liClassNames = classNames({ focus: activeOptionIndex === i }, 'w-100 d-flex align-items-center py-8 px-16');
            return (
              <li
                id={o.id}
                key={o.id}
                role="option"
                className={liClassNames}
                aria-selected={activeOptionIndex === i}
                tabIndex={-1}
                onClick={(evt: MouseEvent<HTMLLIElement>) => {
                  onOptionTagClick(evt, o.label);
                }}
                onMouseOver={(evt: MouseEvent<HTMLLIElement>) => {
                  onOptionMouseOver(evt);
                }}
                aria-label={o.label}
              >
                <span className="w-100" aria-label={o.label}>
                  {o.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
