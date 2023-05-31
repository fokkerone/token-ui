import React, { useState } from 'react';

import * as Popover from '@radix-ui/react-popover';

import clsx from 'classnames';
import styles from './calendar.module.scss';

import Days from './components/days';
import Day from './components/day';
import Header from './components/header';

import {
    useDatePicker,
    useDatePickerState,
    useCalendars,
} from '@rehookify/datepicker';

const DatePicker = ({ time, ...props }) => {
    const [selectedDates, onDatesChange] = useState<Date[]>([time]);
    const {
        // data: { calendars, weekDays, formattedDates, months, years },
        propGetters: {
            dayButton,
            nextMonthButton,
            previousMonthButton,
            monthButton,
            nextYearsButton,
            previousYearsButton,
            yearButton,
        },
    } = useDatePicker({
        selectedDates,
        onDatesChange,
        calendar: {
            startDay: 1,
        },
    });

    const dpState = useDatePickerState({
        selectedDates,
        onDatesChange,
        dates: { toggle: true, mode: 'multiple' },
    });

    const { calendars, weekDays } = useCalendars(dpState);

    const { month, year, days } = calendars[0];

    const onDayClick = (evt?: React.MouseEvent, date: Date) => {
        // displatch a A11y conform Event to close Popover
        document.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Escape',
                code: 'Escape',
                keyCode: 27,
                charCode: 27,
            })
        );
        // In case you need any action with evt
        evt.stopPropagation();
    };

    return (
        <section className={styles['Root']}>
            <Header
                previousMonthButton={previousMonthButton}
                nextMonthButton={nextMonthButton}
                month={month}
            />
            <Days>
                {days.map((d) => (
                    <Day
                        key={d.$date.toString()}
                        day={d}
                        {...dayButton(d, { onClick: onDayClick })}
                    >
                        {d.day}
                    </Day>
                ))}
            </Days>
        </section>
    );
};

export const Trigger = ({ children, time, ...props }) => {
    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <button>Open Date Picker</button>
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content sideOffset={5}>
                    <DatePicker time={time} close />
                    <Popover.Close aria-label="Close">
                        {/* <Cross2Icon /> */}
                        clse
                    </Popover.Close>
                    {/* <Popover.Arrow /> */}
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
};

export default DatePicker;
