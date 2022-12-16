import styles from './slider.module.scss';
import * as SliderPrimitive from '@radix-ui/react-slider';

/* eslint-disable-next-line */
export interface SliderProps {}

// export function Slider(props: SliderProps) {
//   return (
//
//   );
// }

const Slider = () => {
  return (
    <SliderPrimitive.Root
      className={styles['Root']}
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
    >
      <SliderPrimitive.Track className={styles['Track']}>
        <SliderPrimitive.Range className={styles['Range']} />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className={styles['Thumb']} />
    </SliderPrimitive.Root>
  );
};

export default Slider;
