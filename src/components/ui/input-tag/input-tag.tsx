/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React, { KeyboardEvent, MouseEvent, useId, useMemo, useRef, useState } from 'react';
import { useOutsideElementClick } from '../../hooks';
import { preventScrolling } from '../../libs';
import { Icon } from '../icon';
import './input-tag.scss';

export interface InputTagOption {
  label: string;
  id: string;
}

export interface InputTagProps {
  /** Add classes to the input tag component */
  className?: string;
  /** Id to set in input */
  inputId?: string;
  /** Set input label id */
  labeledBy?: string;
  /** Set the placeholder of input */
  placeholder?: string;
  /** Set autocomplete options */
  options: InputTagOption[];
  /** On change event */
  onChange?: (val: InputTagOption[]) => void;
  /** Aria label to show in list box */
  optionsAriaLabel?: string;
}

export const InputTag = ({ className, inputId, labeledBy, placeholder, options, optionsAriaLabel = 'Opções', onChange }: InputTagProps) => {
  const classes = classNames('ama-input-tag', className);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);

  const [activeOptionId, setActiveOptionId] = useState('');
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);

  const [tags, setTags] = useState([] as InputTagOption[]);
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

  function isScrollable(element) {
    return element && element.clientHeight < element.scrollHeight;
  }

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

  const focusByIndex = (index: number) => {
    if (index === -1) {
      setActiveOptionId('');
      closeListBox();
      return;
    }

    if (listBoxRef.current) {
      const liOpttions = listBoxRef.current.querySelectorAll('li[role="option"]');
      const elem = liOpttions[index];

      liOpttions.forEach((e) => e.classList.remove('focus'));
      elem.classList.add('focus');

      setActiveOptionId(elem.id);

      if (isScrollable(listBoxRef.current)) {
        maintainScrollVisibility(elem, listBoxRef.current);
        // ensure the new option is visible on screen
        // ensure the new option is in view
        if (!isElementInView(elem)) {
          elem.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }
    }
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

      focusByIndex(newIndex);

      return newIndex;
    });
  };

  const focusPreviousOption = () => {
    if (!availableOptions.length) {
      return;
    }

    setActiveOptionIndex((last) => {
      const newIndex = Math.max(last - 1, -1);

      focusByIndex(newIndex);

      return newIndex;
    });
  };

  const focusFirst = () => {
    if (!availableOptions.length) {
      return;
    }

    setActiveOptionIndex(0);

    focusByIndex(0);
  };

  const focusLast = () => {
    if (!availableOptions.length) {
      return;
    }

    setActiveOptionIndex(availableOptions.length - 1);
    focusByIndex(availableOptions.length - 1);
  };

  const updateAvailableOptions = () => {
    const val = inputRef.current?.value || '';

    setTags((lastTags) => {
      const newAvailableOptions = options.filter((o) => {
        return !lastTags.find((lt) => lt.id === o.id);
      });

      if (!val) {
        setAvailableOptions(newAvailableOptions);
      } else {
        const filteredOptions = newAvailableOptions.filter((l) => {
          return l.label.toLowerCase().indexOf(val.toLowerCase()) >= 0;
        });

        setAvailableOptions(filteredOptions);
      }

      onChange?.(lastTags);

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

    setTags((lastTags) => {
      return [...lastTags, option];
    });

    setTags((last) => {
      updateAvailableOptions();

      return last;
    });

    closeListBox();
  };

  const removeTag = (tag: string) => {
    setTags((last) => {
      return last.filter((t) => t.label !== tag);
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

    preventScrolling(evt);

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
      case 'Tab':
        if (isOpen) {
          closeListBox();
        }
        break;

      case 'ArrowUp':
        if (!isOpen) {
          openListBox();
        } else {
          focusPreviousOption();
        }
        break;
      case 'ArrowDown':
        if (!isOpen) {
          openListBox();
        }

        focusNextOption();
        break;

      case 'PageUp':
        if (!isOpen) {
          openListBox();
        }

        focusFirst();

        break;
      case 'PageDown':
        if (!isOpen) {
          openListBox();
        }

        focusLast();
        break;

      case 'Backspace':
        if (inputRef.current && inputRef.current.value === '' && tags.length > 0) {
          const lastTag = tags[tags.length - 1];
          removeTag(lastTag.label);
        }

        break;

      default:
        if (!isOpen) {
          openListBox();
        }
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

    preventScrolling(evt);

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
    if ((target as HTMLElement).tagName === 'LI') {
      focusLiElement(target as HTMLLIElement);
    }
  };

  useOutsideElementClick(containerRef, () => closeListBox());

  const uid = useId();
  const memoInputId = useMemo(() => inputId || uid, [inputId]);
  const listBoxId = useMemo(() => `${memoInputId}-listbox`, [memoInputId]);

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
              key={t.id}
              role="button"
              onClick={(evt: MouseEvent<HTMLSpanElement>) => onTagClick(evt, t.label)}
              tabIndex={0}
              onKeyDown={(evt: KeyboardEvent<HTMLSpanElement>) => onTagKeyDown(evt, t.label)}
              aria-label={t.label}
            >
              <span className="tag-name me-4">{t.label}</span>
              <Icon icon="ama-close-circle" size="sm" aria-hidden="true" />
            </span>
          );
        })}

        <input
          id={memoInputId}
          ref={inputRef}
          placeholder={placeholder}
          onKeyDown={onKeyDownHandler}
          onChange={updateAvailableOptions}
          onClick={onClickHandler}
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
