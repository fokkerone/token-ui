import styles from './label.module.scss';
import * as LabelRadix from '@radix-ui/react-label';

/* eslint-disable-next-line */
export interface LabelProps {
  children?: React.ReactNode;
}

const Label = (props: LabelProps) => {
  return (
    <LabelRadix.Root className={styles['Root']}>
      {props.children}
    </LabelRadix.Root>
  );
};

export default Label;
