import styles from './badge.module.scss';

/* eslint-disable-next-line */
export interface BadgeProps {}

export function Badge(props: BadgeProps) {
  return <span className={styles['root']}>Badge</span>;
}

export default Badge;
