import styles from './text.module.scss';
import clsx from 'classnames';

export interface TextProps {
  size?: 1 | 2 | 3 | 4 | 6 | 7;
  Text?: 'warning' | 'success' | 'error';
  children?: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const Text = ({
  as: Tag = 'p',
  size,
  Text,
  className,
  children,
  ...rest
}: TextProps) => {
  const classes = clsx(
    styles['root'],
    {
      [styles[`size-${size}`]]: size || false,
    },
    className
  );

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
};

export default Text;
