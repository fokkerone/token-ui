import React, { FC } from 'react';
import { CalendarDay } from '@rehookify/datepicker';
import styles from '../calendar.module.scss';
import clsx from 'classnames';

interface DayProps {
    className?: string;
    children: React.ReactNode;
    day: CalendarDay;
    onClick?: (evt?: unknown, date?: Date) => unknown;
}

const Day: FC<DayProps> = ({ className, children, day, ...props }) => {
    const buttonClassName = clsx(
        styles['Day'],
        {
            [styles['Today']]: day.now,
            [styles['DayActive']]: day.selected,
        },
        className
    );

    return (
        <button className={buttonClassName} {...props}>
            {children}
        </button>
    );
};

export default Day;
