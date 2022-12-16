import React from 'react';
import * as AccordionBase from '@radix-ui/react-accordion';
import styles from './accordion.module.scss';
import classNames from 'classnames';
import { ArrowRightSquare } from '@tokenui/icons';
type AccordionRootProps = AccordionBase.AccordionMultipleProps;

export const Root = ({ children, type, ...props }: AccordionRootProps) => {
  return (
    <AccordionBase.Root className={styles['root']} type={type} {...props}>
      {children}
    </AccordionBase.Root>
  );
};

export const Item = ({
  children,
  ...props
}: AccordionBase.AccordionItemProps) => {
  return (
    <AccordionBase.Item className={styles['item']} {...props}>
      {children}
    </AccordionBase.Item>
  );
};

export const Content = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <AccordionBase.Content
      className={classNames('content', className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={styles['innercontent']}>{children}</div>
    </AccordionBase.Content>
  )
);

export const Trigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <AccordionBase.Header className={styles['header']}>
      <AccordionBase.Trigger
        className={classNames(styles['trigger'], className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ArrowRightSquare className={styles['chevron']}>-</ArrowRightSquare>
      </AccordionBase.Trigger>
    </AccordionBase.Header>
  )
);
