import React from 'react';
import styles from './flex.module.scss';
import clsx from 'classnames';

/* eslint-disable-next-line */
export interface FlexProps {
  children: React.ReactNode;
  gap: 'none' | 1 | 2;
  direction: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  align: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify: 'start' | 'center' | 'end' | 'between';
  wrap: 'noWrap' | 'wrap' | 'wrapReverse';
  col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const Flex = ({ children, gap, direction, ...rest }: FlexProps) => {
  const clss = clsx(styles['Root'], {
    [styles[`gap-${gap}`]]: gap,
    [styles[`direction-${direction}`]]: direction || false,
  });

  return <div className={clss}>{children}</div>;
};

export default Flex;
