import styles from './section.module.scss';
import clsx from 'classnames';
/* eslint-disable-next-line */
export interface SectionProps {
  size: 1 | 2 | 3 | 4 | 6 | 7;
  children?: React.ReactNode;
}

const Section = ({ size, children, ...rest }: SectionProps) => {
  const classes = clsx(styles['root'], {
    [styles[`size-${size}`]]: size || false,
  });

  console.log(size, styles['size-2'], styles);
  return (
    <section className={classes} {...rest}>
      {children}
    </section>
  );
};

export default Section;
