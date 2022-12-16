import styles from './container.module.scss';

/* eslint-disable-next-line */
export interface ContainerProps {
  children?: React.ReactNode;
}

export function Container({ children, ...props }: ContainerProps) {
  return <div className={styles['Root']}>{children}</div>;
}

export default Container;
