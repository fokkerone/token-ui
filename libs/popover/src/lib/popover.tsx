import styles from './popover.module.scss';
import * as PopoverBase from '@radix-ui/react-popover';

/* eslint-disable-next-line */
export interface PopoverProps {}

export type PopoverContentProps = PopoverBase.PopoverContentProps;

const Popover = () => {
  return <>Popopverpsss</>;
};

export const Content = ({ children, ...props }: PopoverContentProps) => {
  return (
    <PopoverBase.Content className={styles['content']} {...props}>
      {children}
    </PopoverBase.Content>
  );
};

export const Close = () => {
  return <PopoverBase.Close className="close" />;
};

export const Arrow = () => {
  return <PopoverBase.Arrow className="arrow" />;
};

export default Popover;
export const Root = PopoverBase.Root;
export const Trigger = PopoverBase.Trigger;
export const Portal = PopoverBase.Portal;
