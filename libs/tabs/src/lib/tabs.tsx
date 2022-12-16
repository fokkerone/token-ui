import * as RadixTabs from '@radix-ui/react-tabs';
import styles from './tabs.module.scss';

/* eslint-disable-next-line */
export interface TabsRootProps {
  children?: React.ReactNode;
}
export interface TabsListProps {
  children?: React.ReactNode;
}
export interface TabsTriggerProps {
  children?: React.ReactNode;
  value: string;
}
export interface TabsContentProps {
  children?: React.ReactNode;
  value: string;
}

export const TabsRoot = ({ children, ...props }: TabsRootProps) => {
  return <RadixTabs.Root className={styles['Root']}>{children}</RadixTabs.Root>;
};

export const TabsList = ({ children, ...props }: TabsListProps) => {
  return <RadixTabs.List className={styles['List']}>{children}</RadixTabs.List>;
};

export const TabsTrigger = ({
  children,
  value,
  ...props
}: TabsTriggerProps) => {
  return (
    <RadixTabs.Trigger value={value} className={styles['Trigger']}>
      {children}
    </RadixTabs.Trigger>
  );
};

export const TabsContent = ({
  children,
  value,
  ...props
}: TabsContentProps) => {
  return (
    <RadixTabs.Content value={value} className={styles['Content']}>
      {children}
    </RadixTabs.Content>
  );
};
