

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V15C24 15.7957 23.6839 16.5587 23.1213 17.1213C22.5587 17.6839 21.7956 18 21 18H6.621C6.22321 18.0001 5.84174 18.1582 5.5605 18.4395L1.281 22.719C1.1762 22.8241 1.04258 22.8957 0.897054 22.9248C0.751531 22.9539 0.600648 22.9392 0.463499 22.8825C0.32635 22.8258 0.209103 22.7297 0.126596 22.6063C0.0440889 22.483 3.15223e-05 22.3379 0 22.1895L0 3ZM5.25 4.5C5.05109 4.5 4.86032 4.57902 4.71967 4.71967C4.57902 4.86032 4.5 5.05109 4.5 5.25C4.5 5.44891 4.57902 5.63968 4.71967 5.78033C4.86032 5.92098 5.05109 6 5.25 6H18.75C18.9489 6 19.1397 5.92098 19.2803 5.78033C19.421 5.63968 19.5 5.44891 19.5 5.25C19.5 5.05109 19.421 4.86032 19.2803 4.71967C19.1397 4.57902 18.9489 4.5 18.75 4.5H5.25ZM5.25 8.25C5.05109 8.25 4.86032 8.32902 4.71967 8.46967C4.57902 8.61032 4.5 8.80109 4.5 9C4.5 9.19891 4.57902 9.38968 4.71967 9.53033C4.86032 9.67098 5.05109 9.75 5.25 9.75H18.75C18.9489 9.75 19.1397 9.67098 19.2803 9.53033C19.421 9.38968 19.5 9.19891 19.5 9C19.5 8.80109 19.421 8.61032 19.2803 8.46967C19.1397 8.32902 18.9489 8.25 18.75 8.25H5.25ZM5.25 12C5.05109 12 4.86032 12.079 4.71967 12.2197C4.57902 12.3603 4.5 12.5511 4.5 12.75C4.5 12.9489 4.57902 13.1397 4.71967 13.2803C4.86032 13.421 5.05109 13.5 5.25 13.5H12.75C12.9489 13.5 13.1397 13.421 13.2803 13.2803C13.421 13.1397 13.5 12.9489 13.5 12.75C13.5 12.5511 13.421 12.3603 13.2803 12.2197C13.1397 12.079 12.9489 12 12.75 12H5.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon