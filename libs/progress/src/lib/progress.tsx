import styles from './progress.module.scss';
import * as ProgressBase from '@radix-ui/react-progress';

/* eslint-disable-next-line */
export interface ProgressProps {
  value: number;
}

const Progress = ({ value = 0, ...props }: ProgressProps) => {
  console.log('sfsf', value);
  return (
    <ProgressBase.Root className={styles['base']} value={66}>
      <ProgressBase.Indicator
        className={styles['indicator']}
        style={{
          transform: `translateX(-${100 - value}%)`,
        }}
      />
    </ProgressBase.Root>
  );
};

export default Progress;
