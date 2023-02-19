import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  return <button className={styles['Root']}>{props.children}</button>;
};
