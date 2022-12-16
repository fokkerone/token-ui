import React from 'react';
import styles from './radio.module.scss';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

/* eslint-disable-next-line */
export interface RadioProps extends RadioGroupPrimitive.RadioGroupItemProps {
  children?: React.ReactNode;
  value: string;
}

const StyledRadio = ({ children, value, ...props }: RadioProps) => {
  return (
    <RadioGroupPrimitive.Item
      className={styles['root']}
      value={value}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
};

const StyledIndicator = (
  props: RadioGroupPrimitive.RadioGroupIndicatorProps
) => {
  return (
    <RadioGroupPrimitive.Indicator
      className={styles['indicator']}
      {...props}
    ></RadioGroupPrimitive.Indicator>
  );
};

const Radio = React.forwardRef<RadioProps>((props, forwardedRef) => (
  <StyledRadio {...props} ref={forwardedRef}>
    <StyledIndicator />
  </StyledRadio>
));

export default Radio;
