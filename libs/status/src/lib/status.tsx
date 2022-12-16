import styles from './status.module.scss';
import clsx from 'classnames';
/* eslint-disable-next-line */
export interface StatusProps {
  size?: 1 | 2 | 3 | 4 | 6 | 7;
  status?: 'warning' | 'success' | 'error';
  children?: React.ReactNode;
  className?: string;
}

const Status = ({
  size,
  status,
  className,
  children,
  ...rest
}: StatusProps) => {
  const classes = clsx(
    styles['root'],
    {
      [styles[`size-${size}`]]: size || false,
      [styles[`color-${status}`]]: status || false,
    },
    className
  );

  

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
};

export default Status;
