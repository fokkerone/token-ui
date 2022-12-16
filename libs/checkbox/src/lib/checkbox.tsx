import * as CheckboxBase from '@radix-ui/react-checkbox';
import styles from './checkbox.module.scss';
import { Check2 } from '@tokenui/icons';
import classNames from 'classnames';

export interface CheckboxRootProps extends CheckboxBase.CheckboxProps {
  size?: 'small' | 'large' | 'huge';
  children?: React.ReactNode;
  className?: 'string';
}

export type CheckboxIndicatorProps = CheckboxBase.CheckboxIndicatorProps;

export const Root = ({
  children,
  size,
  className,
  ...props
}: CheckboxRootProps) => {
  return (
    <CheckboxBase.Root
      className={classNames(
        styles['Root'],

        {
          [styles[`size-${size}`]]: size || styles[`size-medium`],
        },
        className
      )}
      defaultChecked
    >
      {children}
    </CheckboxBase.Root>
  );
};

export const Indicator = (props: CheckboxIndicatorProps) => {
  return (
    <CheckboxBase.Indicator className={styles['Indicator']}>
      <Check2 />
    </CheckboxBase.Indicator>
  );
};
