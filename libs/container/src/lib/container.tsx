import React from 'react';
import styles from './container.module.scss';
import clsx from 'classnames';

/* eslint-disable-next-line */
export interface ContainerProps {
  children?: React.ReactNode;
  position?: undefined | 'left' | 'right';
}

export function Container({ children, position, ...props }: ContainerProps) {
  const classes = clsx(styles['root'], {
    [styles['left']]: position === 'left',
    [styles['right']]: position === 'right',
  });

  return <div className={classes}>{children}</div>;
}

export default Container;
