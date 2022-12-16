import React from 'react';
import styles from './main.module.scss';
import clsx from 'classnames';

/* eslint-disable-next-line */
export interface FlexColProps {
  children: React.ReactNode;

  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offsetXs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  offsetLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

  className?: string;
}

const Col = ({
  children,
  xs,
  sm,
  md,
  lg,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  className,
  ...rest
}: FlexColProps) => {
  const classes = clsx(
    styles['col'],
    {
      // [styles[`gap-${gap}`]]: gap,
      [styles[`col-xs-${xs}`]]: xs || false,
      [styles[`col-sm-${sm}`]]: sm || false,
      [styles[`col-md-${md}`]]: md || false,
      [styles[`col-lg-${lg}`]]: lg || false,

      [styles[`col-xs-offset-${offsetXs}`]]: offsetXs || false,
      [styles[`col-sm-offset-${offsetSm}`]]: offsetSm || false,
      [styles[`col-md-offset-${offsetMd}`]]: offsetMd || false,
      [styles[`col-lg-offset-${offsetLg}`]]: offsetLg || false,
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Col;
