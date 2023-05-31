import styles from './button.module.scss';
import classNames from 'classnames';

type default_sizes = 'xsmall' | 'small' | 'default' | 'large' | 'xlarge';

/* eslint-disable-next-line */
export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    size: default_sizes;
    type?: 'ghost' | 'link' | undefined;
    color?:
        | 'primary'
        | 'secondary'
        | 'warning'
        | 'error'
        | 'success'
        | 'info'
        | undefined;
}

export interface AffixProps {
    children: React.ReactNode;
}

export const Root = ({
    children,
    size = 'default',
    type,
    color,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={classNames(
                styles['root'],
                {
                    [styles[`size-${size}`]]: size || styles[`size-default`],
                    [styles[`${type}`]]: type,
                    [styles[`${color}`]]: color,
                },
                className
            )}
        >
            {children}
        </button>
    );
};

export const ButtonAffix = (props: AffixProps) => {
    return <span>Affix</span>;
};

//export default Button;
