import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styles from './navigation-menu.module.scss';

export interface NavigationMenuRootProps
  extends NavigationMenu.NavigationMenuProps {
  children?: React.ReactNode;
}

export interface NavigationMenuListProps
  extends NavigationMenu.NavigationMenuListProps {
  children?: React.ReactNode;
}

export interface NavigationMenuItemProps
  extends NavigationMenu.NavigationMenuItemProps {
  children?: React.ReactNode;
}

export interface NavigationMenuTriggerProps
  extends NavigationMenu.NavigationMenuTriggerProps {
  children?: React.ReactNode;
}

export interface NavigationMenuContentProps
  extends NavigationMenu.NavigationMenuContentProps {
  children?: React.ReactNode;
}

export const Root = ({ children, ...props }: NavigationMenuRootProps) => {
  return (
    <NavigationMenu.Root className={styles['Root']} {...props}>
      {children}
    </NavigationMenu.Root>
  );
};

export const List = ({ children, ...props }: NavigationMenuListProps) => {
  return (
    <NavigationMenu.List className={styles['list']} {...props}>
      {children}
    </NavigationMenu.List>
  );
};

export const Item = ({ children, ...props }: NavigationMenuItemProps) => {
  return (
    <NavigationMenu.Item className={styles['item']} {...props}>
      {children}
    </NavigationMenu.Item>
  );
};

export const Link = (props) => {
  return <NavigationMenu.Indicator />;
};

export const Indicator = (props) => {
  return <NavigationMenu.Indicator className={styles['indicator']} />;
};

export const Trigger = ({ children, ...props }: NavigationMenuTriggerProps) => {
  return (
    <NavigationMenu.Trigger className={styles['trigger']} {...props}>
      {children}
    </NavigationMenu.Trigger>
  );
};

export const Viewport = (props: any) => {
  return <>YO!</>;
};

export const Content = (props: any) => {
  return (
    <NavigationMenu.Content className={styles['content']}>
      {props.children}
    </NavigationMenu.Content>
  );
};
