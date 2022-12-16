import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className={styles['Root']}>{props.children}</button>;
}

export default Button;
