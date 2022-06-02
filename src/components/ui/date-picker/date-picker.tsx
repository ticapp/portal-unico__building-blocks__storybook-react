import classNames from 'classnames';
import React, { KeyboardEvent, useEffect, useMemo, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useOutsideElementClick } from '../../hooks';
import { Icon } from '../../index';
import './date-picker.scss';

export interface DaysLabels {
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}

export interface MonthsLabels {
  january: string;
  february: string;
  march: string;
  april: string;
  may: string;
  june: string;
  july: string;
  august: string;
  september: string;
  october: string;
  november: string;
  december: string;
}

export interface ModalAriaLabels {
  title: string;
  description: string;
  currentDay: string;
  previousYear: string;
  previousMonth: string;
  nextYear: string;
  nextMonth: string;
}

export interface DatePickerProps {
  /** Additional classes for date picker */
  className?: string;

  /** Id of the label for the input */
  labeledBy?: string;
  /** Id to set in input */
  inputId?: string;
  /** Input placeholder */
  placeholder?: string;

  /** Initial date */
  date?: Date | string;

  /** Callback to run whenever the date changes */
  onChange?: (val: Date) => void;

  /** Week days labels */
  days?: DaysLabels;
  /** Months labels */
  months?: MonthsLabels;
  /** Modal container aria label */
  modalAriaLabels?: ModalAriaLabels;
}

export const DatePicker = ({
  className,
  inputId = uuidv4(),
  labeledBy,
  placeholder = 'dd-mm-aaaa',
  days,
  months,
  modalAriaLabels,
  date,
  onChange
}: DatePickerProps) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const [isInitialized, setIsInitialized] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [forceFocusOnCalendarDay, setForceFocusOnCalendarDay] = useState(true);

  const mainContainer = useRef(null);
  const dialogContainerRef = useRef(null);
  const inputRef = useRef(null);

  const classes = classNames('ama-date-picker', className, 'p-0 m-0');

  const modalActionsAriaLabels = useMemo(() => {
    return (
      modalAriaLabels ||
      ({
        title: 'Escolha uma data',
        description: 'Pode navegar no calendário usando o teclado',
        currentDay: 'Day',
        previousYear: 'Ano anterior',
        previousMonth: 'Mês anterior',
        nextMonth: 'Próximo mês',
        nextYear: 'Próximo ano'
      } as ModalAriaLabels)
    );
  }, [modalAriaLabels]);

  const weekDaysLabels = useMemo(() => {
    return days
      ? [days.sunday, days.monday, days.tuesday, days.wednesday, days.thursday, days.friday, days.saturday]
      : ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  }, [days]);

  const MonthLabels = useMemo(() => {
    return months
      ? [
          months.january,
          months.february,
          months.march,
          months.april,
          months.may,
          months.june,
          months.july,
          months.august,
          months.september,
          months.october,
          months.november,
          months.december
        ]
      : ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  }, [months]);

  const isDateInSameMonthOfYear = (date1: Date, date2: Date): boolean => {
    return date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
  };

  const getDateString = (d: Date) => {
    let dayString = d.getDate().toString();
    if (d.getDate() <= 9) {
      dayString = `0${dayString}`;
    }

    let monthString = (d.getMonth() + 1).toString();
    if (d.getMonth() <= 9) {
      monthString = `0${monthString}`;
    }

    const yearString = d.getFullYear();

    return `${dayString}-${monthString}-${yearString}`;
  };

  const parseInputDate = (val: string): Date | null => {
    if (!val) {
      return null;
    }

    if (/^(\d+-)(\d+-)(\*|\d+)$/.test(val)) {
      const parts = val.split('-');
      if (parts) {
        const year = +parts[2];
        const month = +parts[1];
        const day = +parts[0];
        const parsedDate = new Date(year, month - 1, day);

        return getDateString(parsedDate) === val ? parsedDate : null;
      }
    }

    return null;
  };

  const parseDateString = (dateString: string): Date => {
    if (dateString) {
      const parts = dateString.split('-');
      const year = +parts[2];
      const month = +parts[1];
      const day = +parts[0];
      return new Date(year, month - 1, day);
    }

    return new Date();
  };

  const focusCurrentDate = (): void => {
    if (dialogContainerRef.current) {
      const dateString = getDateString(currentDate);

      const elem = (dialogContainerRef.current as HTMLElement).querySelectorAll(`.table-dates td[data-date="${dateString}"]`)[0];

      if (elem) {
        (elem as HTMLElement).focus();
      }
    }
  };

  const moveToNextYear = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setFullYear(last.getFullYear() + 1);
      return newDate;
    });
  };

  const moveToPreviousYear = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setFullYear(last.getFullYear() - 1);
      return newDate;
    });
  };

  const moveToNextMonth = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setMonth(last.getMonth() + 1);
      return newDate;
    });
  };

  const moveToPreviousMonth = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setMonth(last.getMonth() - 1);
      return newDate;
    });
  };

  const moveToNextDay = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setDate(last.getDate() + 1);
      return isDateInSameMonthOfYear(newDate, last) ? newDate : last;
    });
  };

  const moveToNextWeek = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setDate(last.getDate() + 7);
      return isDateInSameMonthOfYear(newDate, last) ? newDate : last;
    });
  };

  const moveToPreviousDay = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setDate(last.getDate() - 1);
      return isDateInSameMonthOfYear(newDate, last) ? newDate : last;
    });
  };

  const moveToPreviousWeek = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setDate(last.getDate() - 7);
      return isDateInSameMonthOfYear(newDate, last) ? newDate : last;
    });
  };

  const moveToFirstDayOfWeek = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setDate(last.getDate() - last.getDay());
      return isDateInSameMonthOfYear(newDate, last) ? newDate : last;
    });
  };

  const moveToLastDayOfWeek = () => {
    setCurrentDate((last) => {
      const newDate = new Date(+last);
      newDate.setDate(last.getDate() + (6 - last.getDay()));
      return isDateInSameMonthOfYear(newDate, last) ? newDate : last;
    });
  };

  const hideDialog = () => {
    setIsDialogVisible(false);
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).focus();
    }
  };

  const setDateValues = (d: Date) => {
    setCurrentDate(d);
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).value = getDateString(d);
    }
  };

  const selectDate = (dateString: string): void => {
    const d = parseDateString(dateString);

    setDateValues(d);

    hideDialog();

    onChange?.(d);
  };

  const onInputKeyDown = (evt: KeyboardEvent): void => {
    const { key } = evt;

    if (inputRef.current) {
      const el = inputRef.current as HTMLInputElement;

      if (key === 'Escape') {
        hideDialog();
      }

      if (key === 'Enter') {
        setIsDialogVisible(true);

        const d = parseInputDate(el.value);
        if (d) {
          setCurrentDate(d);
        }

        focusCurrentDate();
      }
    }
  };

  const onDayKeydown = (evt: KeyboardEvent, dateString: string): void => {
    const { key } = evt;
    const { shiftKey } = evt;

    setForceFocusOnCalendarDay(true);

    switch (key) {
      case 'ArrowUp':
        moveToPreviousWeek();
        break;
      case 'ArrowDown':
        moveToNextWeek();
        break;
      case 'ArrowLeft':
        moveToPreviousDay();
        break;
      case 'ArrowRight':
        moveToNextDay();
        break;

      case 'PageUp':
        if (shiftKey) {
          moveToPreviousYear();
        } else {
          moveToPreviousMonth();
        }
        break;

      case 'PageDown':
        if (shiftKey) {
          moveToNextYear();
        } else {
          moveToNextMonth();
        }
        break;

      case 'Home':
        moveToFirstDayOfWeek();

        break;

      case 'End':
        moveToLastDayOfWeek();
        break;

      case 'Enter':
        selectDate(dateString);
        break;

      case 'Escape':
        hideDialog();
        break;

      default:
        break;
    }
  };

  const onHeaderKeyDown = (evt: KeyboardEvent): void => {
    const { target } = evt;
    const { key } = evt;

    setForceFocusOnCalendarDay(false);

    if (key === 'Enter') {
      if ((target as HTMLElement).classList.contains('previous-year')) {
        moveToPreviousYear();
        return;
      }

      if ((target as HTMLElement).classList.contains('previous-month')) {
        moveToPreviousMonth();
        return;
      }

      if ((target as HTMLElement).classList.contains('next-month')) {
        moveToNextMonth();
        return;
      }

      if ((target as HTMLElement).classList.contains('next-year')) {
        moveToNextYear();
        return;
      }
    }

    if (key === 'Escape') {
      hideDialog();
    }
  };

  const getCurrentMonthYear = () => {
    return `${MonthLabels[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  };

  const buildHeader = () => {
    const gridAriaLabelId = uuidv4();
    return (
      <>
        <Col xs={1} className="header-action previous-year d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="d-flex align-items-center justify-content-center"
            aria-label={modalActionsAriaLabels.previousYear}
            tabIndex={0}
            onClick={moveToPreviousYear}
            onKeyDown={onHeaderKeyDown}
          >
            <Icon icon="ama-first-page" ariaHidden />
          </button>
        </Col>
        <Col xs={1} className="header-action previous-month d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="d-flex align-items-center justify-content-center"
            aria-label={modalActionsAriaLabels.previousMonth}
            tabIndex={0}
            onClick={moveToPreviousMonth}
            onKeyDown={onHeaderKeyDown}
          >
            <Icon icon="ama-chevron-left" ariaHidden />
          </button>
        </Col>
        <Col aria-live="polite" className="d-flex align-items-center justify-content-center" id={gridAriaLabelId}>
          {getCurrentMonthYear()}
        </Col>
        <Col xs={1} className="header-action next-month d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="d-flex align-items-center justify-content-center"
            aria-label={modalActionsAriaLabels.nextMonth}
            tabIndex={0}
            onClick={moveToNextMonth}
            onKeyDown={onHeaderKeyDown}
          >
            <Icon icon="ama-chevron-right" ariaHidden />
          </button>
        </Col>
        <Col xs={1} className="header-action next-year d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="d-flex align-items-center justify-content-center"
            aria-label={modalActionsAriaLabels.nextYear}
            tabIndex={0}
            onClick={moveToNextYear}
            onKeyDown={onHeaderKeyDown}
          >
            <Icon icon="ama-last-page" ariaHidden />
          </button>
        </Col>
      </>
    );
  };

  const buildWeekDays = () => {
    return (
      <tr>
        {weekDaysLabels.map((wd) => (
          <th className="week-day-container" role="columnheader" key={uuidv4()} scope="col" aria-label={wd}>
            <div className="week-day d-flex align-items-center justify-content-center position-relative disabled">
              <div className="label">{wd.slice(0, 3)}</div>
            </div>
          </th>
        ))}
      </tr>
    );
  };

  const buildWeek = (weekNumber) => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay();

    firstDayOfMonth.setDate(firstDayOfMonth.getDate() - dayOfWeek);

    firstDayOfMonth.setDate(firstDayOfMonth.getDate() + weekNumber * 7);

    const d = new Date(firstDayOfMonth);

    return Array.from(Array(7).keys()).map(() => {
      const isInCurrentMonth = d.getMonth() === currentDate.getMonth();
      const isSelectedDate = isSameDay(d, currentDate);

      const stringDate = getDateString(d);

      const currentDay = d.getDate();

      const dayAriaLabel = `${modalActionsAriaLabels.currentDay} ${currentDay}`;

      const dayClasses = classNames(
        'day d-flex align-items-center justify-content-center position-relative',
        { disabled: !isInCurrentMonth },
        { selected: isSelectedDate }
      );

      d.setDate(currentDay + 1);

      return (
        <td
          key={uuidv4()}
          data-date={stringDate}
          className="day-container p-0 m-0 border-0"
          aria-label={dayAriaLabel}
          role={isSelectedDate ? 'gridcell' : 'none'}
          aria-selected={isSelectedDate}
          tabIndex={isSelectedDate ? 0 : -1}
          onClick={() => selectDate(stringDate)}
          onKeyDown={(evt) => onDayKeydown(evt, stringDate)}
        >
          <div className={dayClasses}>
            <div className="label position-absolute top-50 start-50 translate-middle">{currentDay}</div>
            <div className="marker position-absolute top-50 start-50 translate-middle">&nbsp;</div>
          </div>
        </td>
      );
    });
  };

  const buildMonth = () => {
    return Array.from(Array(6).keys()).map((trCount) => {
      return (
        <tr role="row" key={uuidv4()}>
          {buildWeek(trCount)}
        </tr>
      );
    });
  };

  const modalAriaLabelId = uuidv4();
  const modalAriaDescribeId = uuidv4();

  useOutsideElementClick(mainContainer, hideDialog);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      return;
    }

    if (typeof date === 'string') {
      const d = parseInputDate(date);
      if (d) {
        setDateValues(d);
      }
    }

    if (typeof date === 'object') {
      setDateValues(date);
    }
  }, []);

  useEffect(() => {
    if (forceFocusOnCalendarDay) {
      focusCurrentDate();
    }
  });

  return (
    <Container ref={mainContainer} className={classes}>
      <Row className="ama-date-picker-input">
        <Col>
          <div
            className="input-container d-flex align-items-center p-16"
            onClick={() => setIsDialogVisible(true)}
            onKeyDown={onInputKeyDown}
          >
            <input
              id={inputId}
              ref={inputRef}
              type="text"
              className="w-100 border-0"
              placeholder={placeholder}
              aria-labelledby={labeledBy}
            />

            <Icon size="xs" icon="ama-calendar" ariaHidden />
          </div>
        </Col>
      </Row>
      {isDialogVisible && (
        <Row>
          <Col className="position-relative">
            <Container
              className="ama-date-picker-dialog position-absolute top-0 left-0 z-index-dropdown bg-neutral-white p-xs-8 p-md-16"
              ref={dialogContainerRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={modalAriaLabelId}
              aria-describedby={modalAriaDescribeId}
            >
              <Row className="d-none">
                <Col>
                  <h2 id={modalAriaLabelId}>{modalActionsAriaLabels.title}</h2>
                </Col>
                <Col>
                  <p id={modalAriaDescribeId}>{modalActionsAriaLabels.description}</p>
                </Col>
              </Row>

              <Row className="header">{buildHeader()}</Row>

              <Row>
                <Col className="calendar d-flex align-items-center justify-content-center">
                  <table className="table-dates" role="grid">
                    <thead>{buildWeekDays()}</thead>
                    <tbody>{buildMonth()}</tbody>
                  </table>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      )}
    </Container>
  );
};
