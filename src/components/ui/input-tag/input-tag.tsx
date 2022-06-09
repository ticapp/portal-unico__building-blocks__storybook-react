import classNames from 'classnames';
import React, { FocusEvent, KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './input-tag.scss';

export interface InputTagProps {
  /** Add classes to the input tag component */
  className?: string;
  /** Set input label id */
  labeledBy?: string;
  /** Set the placeholder of input */
  placeholder?: string;
  /** Set autocomplete options */
  options: string[];
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
        return lastTags.indexOf(o) < 0;
      });

      if (!val) {
        setAvailableOptions(newAvailableOptions);
      } else {
        const filteredOptions = newAvailableOptions.filter((l) => {
          return l.toLowerCase().indexOf(val.toLowerCase()) >= 0;
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
      return o.toLowerCase() === value.toLowerCase();
    });

    if (!option) {
      return;
    }

    setTags((lastTags: string[]) => {
      return [...lastTags, value];
    });

    setTags((last) => {
      updateAvailableOptions();

      onChange?.(last);
      return last;
    });
  };

  const removeTag = (tag: string) => {
    setTags((last) => {
      updateAvailableOptions();
      return last.filter((t) => t !== tag);
    });

    setTags((last) => {
      updateAvailableOptions();
      return last;
    });
  };

  const onKeyDownHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
    const { key } = evt;

    switch (key) {
      case 'Enter':
        if (inputRef.current?.value) {
          tryAddTag();
        }

        if (availableOptions.length === 1) {
          tryAddTag(availableOptions[0]);
        }

        break;
      case 'Escape':
        closeListBox();

        if (inputRef.current) {
          inputRef.current.value = '';
        }
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

      default:
        openListBox();
        break;
    }
  };

  const onClickHandler = () => {
    openListBox();
  };

  const onTagClick = (evt: MouseEvent<HTMLSpanElement>, tag: string) => {
    removeTag(tag);
  };

  const onTagKeyDown = (evt: KeyboardEvent<HTMLSpanElement>, tag: string) => {
    const { key } = evt;

    switch (key) {
      case 'Enter':
        removeTag(tag);
        break;

      default:
        break;
    }
  };

  const onOptionTagClick = (evt: MouseEvent<HTMLLIElement>, tag: string) => {
    setActiveOptionId((evt.target as HTMLLIElement).id);
    tryAddTag(tag);
  };

  const onOptionTagKeyDown = (evt: KeyboardEvent<HTMLLIElement>, tag: string) => {
    setActiveOptionId((evt.target as HTMLLIElement).id);
    tryAddTag(tag);
  };

  const focusLiElement = (element: HTMLLIElement) => {
    if (listBoxRef.current) {
      const liOpttions = listBoxRef.current.querySelectorAll('li[role="option"]');
      liOpttions.forEach((e) => e.classList.remove('focus'));
      element.classList.add('focus');
    }
  };

  const onOptionMouseOver = (evt: MouseEvent<HTMLLIElement>) => {
    const { target } = evt;
    focusLiElement(target as HTMLLIElement);
  };

  const onOptionFocus = (evt: FocusEvent<HTMLLIElement>) => {
    const { target } = evt;
    focusLiElement(target as HTMLLIElement);
  };

  const customInputId = uuidv4();
  const listBoxId = uuidv4();

  return (
    <div ref={containerRef} className={classes}>
      {tags.map((t) => {
        return (
          <span
            className="tag"
            key={uuidv4()}
            role="button"
            onClick={(evt: MouseEvent<HTMLSpanElement>) => onTagClick(evt, t)}
            tabIndex={0}
            onKeyDown={(evt: KeyboardEvent<HTMLSpanElement>) => onTagKeyDown(evt, t)}
          >
            <span>{t}</span>
            <span>|X|</span>
          </span>
        );
      })}

      <input
        id={customInputId}
        ref={inputRef}
        placeholder={placeholder}
        aria-labelledby={labeledBy}
        onKeyDown={onKeyDownHandler}
        onChange={updateAvailableOptions}
        onClick={onClickHandler}
        aria-expanded={isOpen}
        aria-activedescendant={activeOptionId}
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listBoxId}
      />

      <ul id={listBoxId} ref={listBoxRef} role="listbox" aria-label={optionsAriaLabel} className={isOpen ? 'd-block' : 'd-none'}>
        {availableOptions.map((o, i) => {
          const id = uuidv4();
          return (
            <li
              id={id}
              key={id}
              role="option"
              className={activeOptionIndex === i ? 'focus' : ''}
              aria-selected={activeOptionIndex === i}
              tabIndex={-1}
              onClick={(evt: MouseEvent<HTMLLIElement>) => {
                onOptionTagClick(evt, o);
              }}
              onKeyDown={(evt: KeyboardEvent<HTMLLIElement>) => {
                onOptionTagKeyDown(evt, o);
              }}
              onFocus={(evt: FocusEvent<HTMLLIElement>) => {
                onOptionFocus(evt);
              }}
              onMouseOver={(evt: MouseEvent<HTMLLIElement>) => {
                onOptionMouseOver(evt);
              }}
            >
              {o}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
