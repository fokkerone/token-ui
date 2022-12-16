import styles from './collapsible.module.scss';
import * as CollapsibleBase from '@radix-ui/react-collapsible';
import React from 'react';

/* eslint-disable-next-line */
export interface CollapsibleRootProps
  extends CollapsibleBase.CollapsibleProps {}

export const Root = ({ children, ...props }: CollapsibleRootProps) => {
  return (
    <CollapsibleBase.Root className={styles['root']} {...props}>
      {children}
    </CollapsibleBase.Root>
  );
};

export const Trigger = ({
  children,
  ...props
}: CollapsibleBase.CollapsibleTriggerProps) => {
  return (
    <CollapsibleBase.Trigger className={styles['trigger']} {...props}>
      {children}
    </CollapsibleBase.Trigger>
  );
};

export const Content = ({
  children,
  ...props
}: CollapsibleBase.CollapsibleContentProps) => {
  return (
    <CollapsibleBase.Content className={styles['content']} {...props}>
      {children}
    </CollapsibleBase.Content>
  );
};

export const CollapsibleDemo = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <CollapsibleBase.Root
      className={styles['root']}
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'pink',
        }}
      >
        <span className="Text" style={{ color: '#c30' }}>
          @peduarte starred 3 repositories
        </span>
        <CollapsibleBase.Trigger asChild>
          <button className="IconButton">
            {open ? <>open</> : <>close</>}
          </button>
        </CollapsibleBase.Trigger>
      </div>

      <div className="Repository">
        <span className="Text">@radix-ui/primitives</span>
      </div>

      <CollapsibleBase.Content style={{ backgroundColor: 'pink' }}>
        <div className="Repository">
          <span className="Text">@radix-ui/primitives</span>
        </div>
        <div className="Repository">
          <span className="Text">@radix-ui/primitives</span>
        </div>
      </CollapsibleBase.Content>
    </CollapsibleBase.Root>
  );
};
