import React from 'react';
import styles from './icons.module.scss';
import clsx from 'classnames';

/* eslint-disable-next-line */
export interface IconProps {
  children?: React.ReactNode;
  viewBox?: string;
  size?: 'small' | 'large' | 'huge';
  className?: string;
}

const IconBase = ({ children, size, className, ...props }: IconProps) => {
  const classes = clsx(
    styles['Root'],
    {
      [styles[`${size}`]]: size || false,
    },
    className
  );

  return (
    <svg viewBox="0 0 24 24" className={classes}>
      {children}
    </svg>
  );
};

export default IconBase;
