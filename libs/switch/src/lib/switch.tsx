import styles from './switch.module.scss';
import * as SwitchPrimitive from '@radix-ui/react-switch';

/* eslint-disable-next-line */
export interface SliderProps {}

const Switch = () => {
  return (
    <SwitchPrimitive.Root className={styles['Root']} id="airplane-mode">
      <SwitchPrimitive.Thumb className={styles['Thumb']} />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
