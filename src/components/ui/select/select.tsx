/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React, { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { useActiveElement, useOutsideElementClick } from '../../hooks';
import { Icon } from '../icon';
import './select.scss';

export interface SelectOption {
  /** Value of the select option */
  value: string | number;
  /** Label of the select option */
  label: string;
  /** If specified, will render in label element */
  labelElement?: ReactNode;
  /** Disable select option */
  disabled?: boolean;
}

export interface SelectProps {
  /** Additional class names to add */
  className?: string;
  /** Id of the select element */
  id?: string;
  /** Id of the label element to be associated with the select */
  labelledby?: string;
  /** Text to be displayed when there is no selected options  */
  placeholder?: string;
  /** Allow typing for faster search */
  searchable?: boolean;
  /** Enables multi selection of menu options */
  multiSelection?: boolean;
  /** List of the available options to display */
  options: SelectOption[];
  /** Default selected option */
  active?: SelectOption | SelectOption[];
  /** Callback to be executed whenever the value change */
  onChange?: (val: SelectOption | SelectOption[]) => void;
  /** Disables the select */
  disabled?: boolean;
  /** Chevron icon size */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /** Keep select options open */
  allwaysOpen?: boolean;
}

let searchTimeout;
let searchString = '';

const Select = ({
  className = '',
  id = '',
  labelledby = '',
  placeholder = '',
  searchable = false,
  multiSelection = false,
  options,
  onChange,
  disabled = false,
  active,
  size,
  allwaysOpen
}: SelectProps) => {
  const singleSelectId = id || `ama-select-id-${v4()}`;
  const selectControlsId = `ama-select-controls-id-${v4()}`;

  const comboRef = useRef<HTMLDivElement | null>(null);
  const listboxRef = useRef<HTMLDivElement | null>(null);

  const comboWrapperRef = useRef(null);

  const [isInitialized, setIsInitialized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isComboExpanded, setIsComboExpanded] = useState(false);

  const [checkedIndex, setCheckedIndex] = useState(-1);
  const [checkedIndexes, setCheckedIndexes] = useState([] as number[]);

  const [selectedIndex, setSelectedIndex] = useState(-1);

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
    Type: 9,
    SelectClose: 10
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
    if (key === 'Enter' && !multiSelection) {
      return SelectActions.SelectClose;
    }
    if (key === 'Enter' && !!multiSelection) {
      return SelectActions.Select;
    }
    if (key === ' ') {
      return SelectActions.Select;
    }

    return -1;
  }

  // map a key press to an action
  function getActionFromKey(event, menuOpen): number {
    const { key, altKey, ctrlKey, metaKey } = event;

    // home move the selected option when open or closed
    if (key === 'Home') {
      return SelectActions.First;
    }
    // end move the selected option when open or closed
    if (key === 'End') {
      return SelectActions.Last;
    }
    // handle typing characters when open or closed
    if (key === 'Backspace' || key === 'Clear' || (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)) {
      return SelectActions.Type;
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
    if (allwaysOpen) {
      return;
    }

    setIsOpen((lastValue) => {
      if (lastValue === newOpenValue) {
        return lastValue;
      }

      // update aria-expanded and styles
      setIsComboExpanded(newOpenValue);

      if (newOpenValue) {
        // move focus back to the combobox, if needed
        comboRef.current?.focus();

        // scroll combo into view
        if (comboRef.current && !isElementInView(comboRef.current)) {
          comboRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }

      return newOpenValue;
    });
  };

  const checkOption = (index) => {
    if (multiSelection) {
      setCheckedIndexes((last) => {
        let newVal;

        if (last.includes(index)) {
          newVal = last.filter((i) => i !== index);
        } else {
          newVal = last.concat(index);
        }

        onChange?.(options.filter((_o, i) => newVal.includes(i)));

        return newVal;
      });
    } else {
      onChange?.(options[index]);
      setCheckedIndex(index);
    }

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');
    optionsElems?.forEach((e, i) => {
      e.classList.remove('checked');
      if (i === index) {
        e.classList.add('checked');
      }
    });
  };

  const selectOption = (index) => {
    setSelectedIndex(index);

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');
    optionsElems?.forEach((e, i) => {
      e.classList.remove('selected');
      if (i === index) {
        e.classList.add('selected');
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

  const onComboClick = () => {
    if (!disabled) {
      updateMenuState(!isOpen);
    }
  };

  const onOptionClick = (index) => {
    if (options[index].disabled) {
      return;
    }

    checkOption(index);

    if (!multiSelection) {
      updateMenuState(false);
    }
  };

  const onOptionMouseOver = (evt: MouseEvent<HTMLDivElement>) => {
    if (!(evt.target as HTMLDivElement).classList.contains('combo-option')) {
      return;
    }

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');
    if (optionsElems) {
      optionsElems.forEach((e) => e.classList.remove('selected'));
    }
    (evt.target as HTMLDivElement).classList.add('selected');
  };

  const onComboType = (letter) => {
    // find the index of the first matching option
    if (typeof searchTimeout === 'number') {
      window.clearTimeout(searchTimeout);
    }

    searchTimeout = window.setTimeout(() => {
      searchString = '';
    }, 500);

    // add most recent letter to saved search string
    searchString += letter;

    const searchIndex = options.findIndex((opt) => {
      return opt.label.toLowerCase().indexOf(searchString.toLowerCase()) === 0;
    });

    if (searchIndex >= 0) {
      // if a match was found, go to it
      selectOption(searchIndex);
    } else {
      // if no matches, clear the timeout and search string
      window.clearTimeout(searchTimeout);
      searchString = '';
    }
  };
  const onComboKeyDown = (event) => {
    if (disabled) {
      return;
    }

    const max = options.length - 1;

    const action = getActionFromKey(event, isOpen);

    const { key } = event;

    switch (action) {
      case SelectActions.Last:
      case SelectActions.First:
        updateMenuState(true);
        selectOption(getUpdatedIndex(selectedIndex, max, action));
        return;

      case SelectActions.Next:
      case SelectActions.Previous:
      case SelectActions.PageUp:
      case SelectActions.PageDown:
        selectOption(getUpdatedIndex(selectedIndex, max, action));
        return;

      case SelectActions.Close:
        updateMenuState(false);
        return;

      case SelectActions.Type:
        if (searchable) {
          onComboType(key);
        }

        return;

      case SelectActions.Open:
        updateMenuState(true);
        return;

      case SelectActions.SelectClose:
        if (!options[selectedIndex].disabled) {
          checkOption(selectedIndex);
          updateMenuState(false);
        }
        return;

      case SelectActions.Select:
        if (!options[selectedIndex].disabled) {
          if (!searchable) {
            checkOption(selectedIndex);
            return;
          }

          onComboType(key);
        }
        break;

      case -1:
        break;

      default:
        break;
    }
  };

  const onMenuKeyDown = (event) => {
    // move focus back to the combobox, if needed
    comboRef.current?.focus();

    // business as usual
    onComboKeyDown(event);
  };

  useOutsideElementClick(comboWrapperRef, () => updateMenuState(false));

  const { activeElement } = useActiveElement();

  // Dismiss if active element is not contained in combo ref
  useEffect(() => {
    if (!activeElement) {
      return;
    }

    if (!isOpen || !comboWrapperRef.current) {
      return;
    }

    if (!(comboWrapperRef.current as HTMLElement).contains(activeElement as HTMLElement)) {
      updateMenuState(false);
    }
  }, [activeElement]);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Initial values
  useEffect(() => {
    if (isInitialized) {
      return;
    }

    if (multiSelection && Array.isArray(active)) {
      setCheckedIndexes(
        options
          .filter((opt: SelectOption) => {
            return active.find((activeOption) => {
              return opt.label === activeOption.label;
            });
          })
          .map((_o, i) => i)
      );
    } else if (!multiSelection && !!active && !Array.isArray(active)) {
      setCheckedIndex(options.findIndex((o) => o.label === active.label));
    }

    if (allwaysOpen) {
      updateMenuState(true);
    }
  }, []);

  const wrapperClassNames = classNames(className, 'combo', { open: isOpen }, { disabled }, { multiselection: multiSelection });

  return (
    <div ref={comboWrapperRef} className={wrapperClassNames} aria-disabled={disabled}>
      <div
        className="combo-input p-16 w-100 d-flex align-items-center justify-content-between"
        ref={comboRef}
        aria-controls={selectControlsId}
        aria-expanded={isComboExpanded}
        aria-haspopup="listbox"
        aria-labelledby={labelledby}
        aria-activedescendant={selectedIndex >= 0 ? `${singleSelectId}-option-${selectedIndex}` : ''}
        id={singleSelectId}
        role="combobox"
        tabIndex={0}
        onClick={onComboClick}
        onKeyDown={onComboKeyDown}
      >
        <div className="tags me-10 d-flex flex-wrap">
          {!multiSelection && (checkedIndex < 0 ? placeholder : options[checkedIndex].label)}

          {multiSelection &&
            (checkedIndexes.length <= 0
              ? placeholder
              : options
                  .filter((_o, i) => checkedIndexes.includes(i))
                  .map((o) => {
                    return (
                      <div className="tag bg-neutral-dark d-flex align-items-center m-4 py-8 px-16" key={`${v4()}`}>
                        <span>{o.label}</span>
                      </div>
                    );
                  }))}
        </div>

        <div className="ms-auto">
          <Icon icon={isOpen ? 'ama-chevron-up' : 'ama-chevron-down'} size={size} ariaHidden />
        </div>
      </div>

      <div
        ref={listboxRef}
        className={isOpen ? 'combo-menu d-block w-100 py-16 px-0' : 'd-none'}
        role="listbox"
        aria-multiselectable={multiSelection}
        id={selectControlsId}
        aria-labelledby={labelledby}
        onKeyDown={onMenuKeyDown}
        tabIndex={-1}
      >
        {options.map((o, i) => {
          const isChecked = multiSelection ? checkedIndexes.indexOf(i) >= 0 : checkedIndex === i;

          const isSelected = selectedIndex === i;

          return (
            <div
              role="option"
              key={v4()}
              id={`${singleSelectId}-option-${i}`}
              className={`combo-option w-100 d-flex align-items-center py-8 px-16 ${isChecked ? 'checked' : ''}
              ${isSelected ? 'selected' : ''}
              `}
              onClick={() => onOptionClick(i)}
              onMouseOver={onOptionMouseOver}
              aria-selected={isChecked}
            >
              {multiSelection && isChecked && (
                <span className="icon me-16">
                  <Icon icon="ama-checkbox-checked" />
                </span>
              )}

              {multiSelection && !isChecked && (
                <span className="icon me-16">
                  <Icon icon="ama-checkbox" />
                </span>
              )}

              <span className="combo-option-content w-100" aria-label={isChecked ? `${o.label} selected` : o.label}>
                {o.labelElement || o.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { Select };
