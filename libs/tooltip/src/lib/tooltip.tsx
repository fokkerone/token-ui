import styles from './tooltip.module.scss';
import * as TooltipBase from '@radix-ui/react-tooltip';
import React from 'react';

/* eslint-disable-next-line */
export interface TooltipArrowProps extends TooltipBase.TooltipArrowProps {}
export type TooltipContentProps = TooltipBase.TooltipContentProps;
export interface TooltipProps {
  element?: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
}

export const Content = ({
  children,
  sideOffset,
  ...props
}: TooltipContentProps) => {
  return (
    <TooltipBase.Content
      className={styles['content']}
      sideOffset={5}
      {...props}
    >
      {children}
    </TooltipBase.Content>
  );
};

export const Arrow = (props: TooltipArrowProps) => {
  return <TooltipBase.Arrow className={styles['arrow']} />;
};

export const Tooltip = ({ children, text, ...props }: TooltipProps) => {
  return (
    <TooltipBase.Provider>
      <TooltipBase.Root>
        <TooltipBase.Trigger asChild>{children}</TooltipBase.Trigger>
        <TooltipBase.Portal>
          <Content>
            {text}
            <Arrow />
          </Content>
        </TooltipBase.Portal>
      </TooltipBase.Root>
    </TooltipBase.Provider>
  );
};

export default Tooltip;

export const Root = TooltipBase.Root;
export const Provider = TooltipBase.Provider;
export const Trigger = TooltipBase.Trigger;
export const Portal = TooltipBase.Portal;
