import * as RadixTabs from '@radix-ui/react-tabs';
import styles from './tablines.module.scss';

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
  const onTValueChange = (v) => {
    const el = document.querySelector('[role="tablist"]');
    const tab = el && el.querySelector('[data-state="active"]');
    const rect = tab?.getBoundingClientRect();

    const line = el && el.getElementsByTagName('span');

    //console.log('---->', el.getBoundingClientRect());
    // Functionconsole.log(v, 'TAB', tab, rect, 'line', line[0].style);
    //console.log(line[0].style);
    line[0].style.left = rect.x - el.getBoundingClientRect().x + 'px';
    line[0].style.width = rect.width + 'px';
  };

  return (
    <RadixTabs.Root
      data-role="tab-nav"
      onValueChange={onTValueChange}
      className={styles['Root']}
    >
      {children}
    </RadixTabs.Root>
  );
};

export const TabsList = ({ children, ...props }: TabsListProps) => {
  return (
    <RadixTabs.List className={styles['List']}>
      {children}
      <span className={styles['triggerline']}></span>
    </RadixTabs.List>
  );
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
