import React from 'react';
import styles from '../calendar.module.scss';

const Days = ({ children, ...props }) => {
    return (
        <main className={styles['Days']} {...props}>
            {children}
        </main>
    );
};

export default Days;
