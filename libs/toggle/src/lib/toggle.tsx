import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import styles from './toggle.module.scss';

/* eslint-disable-next-line */
export interface ToggleProps {
  children?: React.ReactNode;
}

const Toggle = ({ children, ...rest }: ToggleProps) => {
  return (
    <TogglePrimitive.Root className={styles['Root']} aria-label="Toggle italic">
      {children}
    </TogglePrimitive.Root>
  );
};

export default Toggle;
