import React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import styles from './toggle-group.module.scss';

/* eslint-disable-next-line */
export interface ToggleGroupProps
  extends ToggleGroupPrimitive.ToggleGroupMultipleProps {
  children?: React.ReactNode;
}

export interface ToggleGroupItemProps
  extends ToggleGroupPrimitive.ToggleGroupItemProps {
  children?: React.ReactNode;
}

const ToggleGroup = ({ children, ...rest }: ToggleGroupProps) => {
  return (
    <ToggleGroupPrimitive.Root className={styles['Root']} {...rest}>
      {children}
    </ToggleGroupPrimitive.Root>
  );
};

export const ToggleGroupItem = ({
  children,
  ...rest
}: ToggleGroupItemProps) => {
  console.log(...rest);
  return (
    <ToggleGroupPrimitive.Item className={styles['Item']} {...rest}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

export default ToggleGroup;
