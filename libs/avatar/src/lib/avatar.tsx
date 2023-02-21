import React, { useEffect } from 'react';
import * as AvatarRadix from '@radix-ui/react-avatar';
import styles from './avatar.module.scss';
import classNames from 'classnames';
import { FiUser } from '@tokenui/icons';
type default_sizes = 'xsmall' | 'small' | 'default' | 'large' | 'xlarge';

export interface AvatarProps {
  size?: default_sizes;
  children?: React.ReactNode;
}

export interface AvatarRootProps extends AvatarRadix.AvatarProps {
  children?: React.ReactNode;
  className?: string;
  type?: 'rounded' | 'circle' | 'square';
  size?: default_sizes;
  bg?: string;
  color?: string;
}

export const Root = ({
  size = 'default',
  type,
  className,
  bg,
  color,
  ...props
}: AvatarRootProps) => {
  const o_inline = bg ? { backgroundColor: bg } : {};
  const o_color = color ? { color: color } : {};

  return (
    <AvatarRadix.Root
      className={classNames(
        styles['Root'],

        {
          [styles[`size-${size}`]]: size || styles[`size-medium`],
          [styles[`${type}`]]: type,
        },
        className
      )}
      style={Object.assign(o_color, o_inline)}
    >
      {props.children}
    </AvatarRadix.Root>
  );
};

export const Image = ({
  children,
  alt,
  src,
  ...props
}: AvatarRadix.AvatarImageProps) => {
  return (
    <AvatarRadix.Image
      className={styles['image']}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export const Fallback = ({
  children,
  delayMs = 600,
  ...props
}: AvatarRadix.AvatarFallbackProps) => {
  return (
    <AvatarRadix.Fallback
      className={styles['fallback']}
      delayMs={delayMs}
      {...props}
    >
      {!children && <FiUser></FiUser>}
      {children}
    </AvatarRadix.Fallback>
  );
};
