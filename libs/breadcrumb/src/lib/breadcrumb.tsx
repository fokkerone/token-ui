import React from 'react';
import styles from './breadcrumb.module.scss';
import { ArrowRight } from '@tokenui/icons';
export interface DividerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export interface CrumbProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  active: boolean | undefined;
  href: string | '#';
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Divider = ({ children, ...props }: DividerProps) => {
  return (
    <span className={styles['divider']} {...props}>
      <ArrowRight />
    </span>
  );
};

export const Crumb = ({ children, href, active }: CrumbProps) => {
  return (
    <li className={styles['crumb']}>
      {active ? <p>{children}</p> : <a href={href}>{children}</a>}
    </li>
  );
};

export const Root = ({ children, ...porps }: BreadcrumbProps) => {
  return <ul className={styles['root']}>{children}</ul>;
};
