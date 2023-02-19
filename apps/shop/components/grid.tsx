import React from 'react';
import styles from './grid.module.scss';

const Grid = ({ children, ...props }) => {
  return <div className={styles['root']}>{children}</div>;
};

export default Grid;
