import classNames from 'classnames';
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { useOutsideElementClick } from '../../hooks';
import { Icon } from '../icon';
import './select.scss';

export interface SelectOption {
  /** Value of the select option */
  value: any;
  /** Label of the select option */
  label: string;
}

export interface SelectProps {
  /** Additional class names to add */
  className?: string;
  /** Id of the select element*/
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
  /** Icon size */
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /** Keep select options open */
  allwaysOpen?: boolean;
}

let searchTimeout;
let searchString = '';

const Select = ({
  className,
  id,
  labelledby,
  placeholder = '',
  searchable = false,
  multiSelection = false,
  options,
  onChange,
  disabled = false,
  active,
  size,
  allwaysOpen,
}: SelectProps) => {
  const guid = v4();
  const singleSelectId = id || `ama-select-id-${guid}`;
  const selectControlsId = `ama-select-controls-id-${guid}`;

  const comboRef = useRef<HTMLDivElement | null>(null);
  const listboxRef = useRef<HTMLDivElement | null>(null);

  const comboWrapperRef = useRef(null);

  const [isInitialized, setIsInitialized] = useState(false);
  const [ignoreBlur, setIgnoreBlur] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isComboExpanded, setIsComboExpanded] = useState(false);
  const [activeIndexes, setActiveIndexes] = useState([] as number[]);

  // Save a list of named combobox actions, for future readability
  const SelectActions = {
    Close: 0,
    CloseSelect: 1,
    First: 2,
    Last: 3,
    Next: 4,
    Open: 5,
    PageDown: 6,
    PageUp: 7,
    Previous: 8,
    Select: 9,
    Type: 10,
  };

  // Get action when menu open
  function getActionWithMenuOpen(key: string, altKey: boolean) {
    if (key === 'ArrowUp' && altKey) {
      return SelectActions.CloseSelect;
    } else if (key === 'ArrowDown' && !altKey) {
      return SelectActions.Next;
    } else if (key === 'ArrowUp') {
      return SelectActions.Previous;
    } else if (key === 'PageUp') {
      return SelectActions.PageUp;
    } else if (key === 'PageDown') {
      return SelectActions.PageDown;
    } else if (key === 'Escape') {
      return SelectActions.Close;
    } else if (key === 'Enter') {
      return SelectActions.CloseSelect;
    } else if (key === ' ') {
      return SelectActions.Select;
    }
  }
  // map a key press to an action
  function getActionFromKey(event, menuOpen) {
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
    if (
      key === 'Backspace' ||
      key === 'Clear' ||
      (key.length === 1 && key !== ' ' && !altKey && !ctrlKey && !metaKey)
    ) {
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
    var bounding = element.getBoundingClientRect();

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // check if an element is currently scrollable
  function isScrollable(element) {
    return element && element.clientHeight < element.scrollHeight;
  }

  // ensure a given child element is within the parent's visible scroll area
  // if the child is not visible, scroll the parent
  function maintainScrollVisibility(activeElement, scrollParent) {
    const { offsetHeight, offsetTop } = activeElement;
    const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;

    const isAbove = offsetTop < scrollTop;
    const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

    if (isAbove) {
      scrollParent.scrollTo(0, offsetTop);
    } else if (isBelow) {
      scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
    }
  }

  const selectOption = (index) => {
    // update state
    setActiveIndex(index);

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');

    if (multiSelection) {
      setActiveIndexes((lastValue: number[]) => {
        let newVal: number[];
        if (lastValue.indexOf(index) >= 0) {
          newVal = lastValue.filter((i) => i !== index);
        } else {
          newVal = lastValue.concat(index);
        }

        optionsElems?.forEach((e, i) => {
          e.classList.remove('option-current');
          if (newVal.indexOf(i) >= 0) {
            e.classList.add('option-current');
          }
        });

        onChange?.(options.filter((_o, i) => newVal.includes(i)));

        return newVal;
      });
    } else {
      optionsElems?.forEach((e, i) => {
        e.classList.remove('option-current');
        if (i === index) {
          e.classList.add('option-current');
        }
      });

      onChange?.(options[index]);
    }
  };

  const updateMenuState = (open, callFocus = true) => {
    if (allwaysOpen) {
      setIsOpen(true);
      return;
    }

    if (isOpen === open) {
      return;
    }

    // update state
    setIsOpen(open);

    // update aria-expanded and styles
    setIsComboExpanded(open);

    if (!open && comboRef.current && !isElementInView(comboRef.current)) {
      comboRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }

    // move focus back to the combobox, if needed
    callFocus && comboRef.current?.focus();
  };

  const onOptionChange = (index) => {
    // update state
    setActiveIndex(index);

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');

    if (optionsElems) {
      if (isScrollable(listboxRef.current)) {
        const curr = optionsElems[index];
        maintainScrollVisibility(curr, listboxRef.current);
        // ensure the new option is visible on screen
        // ensure the new option is in view
        if (!isElementInView(curr)) {
          curr.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      }

      //  ADD CLASS HOVER FOR KEYBOARD NAVIGATION "HOVER"
      optionsElems.forEach((e) => e.classList.remove('hover'));
      optionsElems[index].classList.add('hover');
    }
  };

  const onComboBlur = () => {
    // do not do blur action if ignoreBlur flag has been set
    if (ignoreBlur) {
      setIgnoreBlur(false);
      return;
    }

    // select current option and close
    if (isOpen) {
      updateMenuState(false, false);
    }
  };

  const onComboClick = () => {
    if (!disabled) {
      updateMenuState(!isOpen, false);
    }
  };

  const onOptionClick = (index) => {
    onOptionChange(index);
    selectOption(index);

    if (!multiSelection) {
      updateMenuState(false);
    }
  };

  const onOptionMouseDown = () => {
    setIgnoreBlur(true);
  };

  const onOptionMouseOver = (evt: MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();

    if (!(evt.target as HTMLDivElement).classList.contains('combo-option')) {
      return;
    }

    const optionsElems = listboxRef.current?.querySelectorAll('[role=option]');
    if (optionsElems) {
      optionsElems.forEach((e) => e.classList.remove('hover'));
    }
    (evt.target as HTMLDivElement).classList.add('hover');
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
        event.preventDefault();
        updateMenuState(true);
        return onOptionChange(getUpdatedIndex(activeIndex, max, action));

      case SelectActions.Next:
      case SelectActions.Previous:
      case SelectActions.PageUp:
      case SelectActions.PageDown:
        event.preventDefault();
        return onOptionChange(getUpdatedIndex(activeIndex, max, action));

      case SelectActions.CloseSelect:
        event.preventDefault();
        selectOption(activeIndex);
        return updateMenuState(false);

      case SelectActions.Close:
        event.preventDefault();
        return updateMenuState(false);

      case SelectActions.Type:
        if (searchable) {
          return onComboType(key);
        }

        return false;

      case SelectActions.Open:
        event.preventDefault();
        return updateMenuState(true);

      case SelectActions.Select:
        event.preventDefault();

        if (!searchable) {
          return selectOption(activeIndex);
        }

        if (multiSelection) {
          return selectOption(activeIndex);
        }

        updateMenuState(true);
        return onComboType(key);
    }
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
    searchString = searchString + letter;

    const searchIndex = options.findIndex((opt) => {
      return opt.label.toLowerCase().indexOf(searchString.toLowerCase()) === 0;
    });

    if (searchIndex >= 0) {
      // if a match was found, go to it
      onOptionChange(searchIndex);
    } else {
      // if no matches, clear the timeout and search string
      window.clearTimeout(searchTimeout);
      searchString = '';
    }
  };

  useOutsideElementClick(comboWrapperRef, () => onComboBlur());

  const wrapperClassNames = classNames(
    'combo',
    className,
    { open: isOpen },
    { disabled }
  );

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  // Initial values
  useEffect(() => {
    if (isInitialized) {
      return;
    }

    if (multiSelection && Array.isArray(active)) {
      setActiveIndexes(
        options
          .filter((opt: SelectOption) => {
            return active.find((activeOption) => {
              return opt.label == activeOption.label;
            });
          })
          .map((_o, i) => i)
      );
    } else if (!multiSelection && !!active && !Array.isArray(active)) {
      setActiveIndex(options.findIndex((o) => o.label === active.label));
    }

    if (allwaysOpen) {
      updateMenuState(true, true);
    }
  }, []);

  const getActiveDescendantValue = (): string => {
    if (multiSelection) {
      return activeIndexes.length > 0
        ? `${singleSelectId}-option-${activeIndexes[activeIndexes.length - 1]}`
        : '';
    }

    return activeIndex >= 0 ? `${singleSelectId}-option-${activeIndex}` : '';
  };

  return (
    <div
      ref={comboWrapperRef}
      className={wrapperClassNames}
      aria-disabled={disabled}
    >
      <div
        className="combo-input p-16 w-100 d-flex align-items-center"
        ref={comboRef}
        aria-controls={selectControlsId}
        aria-expanded={isComboExpanded}
        aria-haspopup="listbox"
        aria-labelledby={labelledby}
        aria-activedescendant={getActiveDescendantValue()}
        id={singleSelectId}
        role="combobox"
        tabIndex={0}
        onBlur={onComboBlur}
        onClick={onComboClick}
        onKeyDown={onComboKeyDown}
      >
        <div className="tags w-100 d-flex flex-wrap">
          {!multiSelection &&
            (activeIndex < 0 ? placeholder : options[activeIndex].label)}

          {multiSelection &&
            (activeIndexes.length <= 0
              ? placeholder
              : options
                  .filter((_o, i) => activeIndexes.includes(i))
                  .map((o, i) => {
                    return (
                      <div
                        className="tag bg-neutral-dark d-flex align-items-center m-4 py-8 px-16"
                        key={`${guid}-${i}`}
                      >
                        <span>{o.label}</span>
                      </div>
                    );
                  }))}
        </div>

        <Icon
          icon={isOpen ? 'ama-chevron-up' : 'ama-chevron-down'}
          size={size}
          ariaHidden={true}
        />
      </div>

      <div
        ref={listboxRef}
        className={
          isOpen
            ? 'combo-menu d-block w-100 py-16 px-0 bg-neutral-white '
            : 'd-none'
        }
        role="listbox"
        aria-multiselectable={multiSelection}
        id={selectControlsId}
        aria-labelledby={labelledby}
        tabIndex={-1}
      >
        {options.map((o, i) => {
          const isSelected = multiSelection
            ? activeIndexes.indexOf(i) >= 0
            : activeIndex === i;

          return (
            <div
              role="option"
              key={i}
              id={`${singleSelectId}-option-${i}`}
              className={
                'combo-option w-100 d-flex align-items-center py-8 px-16'
              }
              onClick={() => onOptionClick(i)}
              onMouseDown={onOptionMouseDown}
              onMouseOver={onOptionMouseOver}
              aria-selected={
                multiSelection
                  ? activeIndexes.indexOf(i) >= 0
                  : activeIndex === i
              }
            >
              {multiSelection && isSelected && (
                <span className="icon me-16">
                  <Icon icon="ama-checkbox-checked" />
                </span>
              )}

              {multiSelection && !isSelected && (
                <span className="icon me-16">
                  <Icon icon="ama-checkbox" />
                </span>
              )}

              <span aria-label={isSelected ? `${o.label} selected` : o.label}>
                {o.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { Select };
