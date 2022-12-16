import * as ToolbarBase from '@radix-ui/react-toolbar';
import styles from './toolbar.module.scss';

export const Root = ({ children, ...props }: ToolbarBase.ToolbarProps) => {
  return (
    <ToolbarBase.Root className={styles['root']} {...props}>
      {children}
    </ToolbarBase.Root>
  );
};

export const Button = ({
  children,
  ...props
}: ToolbarBase.ToolbarButtonProps) => {
  return (
    <ToolbarBase.Button className={styles['button']} {...props}>
      {children}
    </ToolbarBase.Button>
  );
};

export const Separator = ({
  children,
  ...props
}: ToolbarBase.ToolbarSeparatorProps) => {
  return (
    <ToolbarBase.Separator className={styles['separator']} {...props}>
      {children}
    </ToolbarBase.Separator>
  );
};

export const Link = ({ children, ...props }: ToolbarBase.ToolbarLinkProps) => {
  return (
    <ToolbarBase.Link className={styles['link']} {...props}>
      {children}
    </ToolbarBase.Link>
  );
};

export const ToggleGroup = ({
  children,
  ...props
}: ToolbarBase.ToolbarToggleGroupSingleProps) => {
  return (
    <ToolbarBase.ToggleGroup className={styles['group']} {...props}>
      {children}
    </ToolbarBase.ToggleGroup>
  );
};

export const ToggleItem = ({
  children,
  ...props
}: ToolbarBase.ToolbarToggleItemProps) => {
  return (
    <ToolbarBase.ToggleItem className={styles['item']} {...props}>
      {children}
    </ToolbarBase.ToggleItem>
  );
};
