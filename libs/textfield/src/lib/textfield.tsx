import styles from './textfield.module.scss';

/* eslint-disable-next-line */
import clsx from 'classnames';
export interface TextfieldProps extends React.HTMLAttributes<HTMLInputElement> {
  size: 'small' | 'default' | 'large' | 'huge';
  pill: boolean | undefined;
}

export const TextField = ({
  placeholder,
  size,
  pill,
  className,
  ...props
}: TextfieldProps) => {
  const classes = clsx(
    styles['base'],
    {
      [styles[`${size}`]]: size,
      [styles[`${pill}`]]: pill,
    },
    className
  );

  return <input className={classes} placeholder={placeholder} {...props} />;
};

export default TextField;
