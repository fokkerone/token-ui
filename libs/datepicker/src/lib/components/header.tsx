import React from 'react';
import styles from '../calendar.module.scss';
import clsx from 'classnames';
import { ChevronLeft, ChevronRight } from '@tokenui/icons';
const Header = ({
    children,
    previousMonthButton,
    nextMonthButton,
    month,
    ...props
}) => {
    return (
        <header className={styles['Header']}>
            <button className="w-8" {...previousMonthButton()}>
                <ChevronLeft />
            </button>
            <p className="text-center text-sm">{month}</p>
            <button className="w-8" {...nextMonthButton()}>
                <ChevronRight />
            </button>
        </header>
    );
};

export default Header;
