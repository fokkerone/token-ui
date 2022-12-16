import styles from './main.module.scss';
import clsx from 'classnames';

export interface FlexRowProps {
  children: React.ReactNode;

  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';
  alignXs?: 'start' | 'center' | 'end';
  alignSm?: 'start' | 'center' | 'end';
  alignMd?: 'start' | 'center' | 'end';
  alignLg?: 'start' | 'center' | 'end';

  verticalXs?: 'top' | 'middle' | 'bottom';
  verticalSm?: 'top' | 'middle' | 'bottom';
  verticalMd?: 'top' | 'middle' | 'bottom';
  verticalLg?: 'top' | 'middle' | 'bottom';

  distributionXs?: 'around' | 'between';
  distributionSm?: 'around' | 'between';
  distributionMd?: 'around' | 'between';
  distributionLg?: 'around' | 'between';

  className?: string;
}

const Row = ({
  children,
  alignXs,
  alignSm,
  alignMd,
  alignLg,
  verticalXs,
  verticalSm,
  verticalMd,
  verticalLg,

  distributionXs,
  distributionSm,
  distributionMd,
  distributionLg,

  className,
  ...rest
}: FlexRowProps) => {
  const classes = clsx(
    styles['row'],
    {
      [styles[`${alignXs}-xs`]]: alignXs || false,
      [styles[`${alignSm}-sm`]]: alignSm || false,
      [styles[`${alignMd}-md`]]: alignMd || false,
      [styles[`${alignLg}-lg`]]: alignLg || false,

      [styles[`${verticalXs}-xs`]]: verticalXs || false,
      [styles[`${verticalSm}-sm`]]: verticalSm || false,
      [styles[`${verticalMd}-md`]]: verticalMd || false,
      [styles[`${verticalLg}-lg`]]: verticalLg || false,

      [styles[`${distributionXs}-xs`]]: distributionXs || false,
      [styles[`${distributionSm}-sm`]]: distributionSm || false,
      [styles[`${distributionMd}-md`]]: distributionMd || false,
      [styles[`${distributionLg}-lg`]]: distributionLg || false,
    },
    className
  );
  console.log(distributionXs, styles[`${distributionXs}-xs`]);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Row;
