

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.5 1.5H10.5C9.67157 1.5 9 2.17157 9 3V18C9 18.8284 9.67157 19.5 10.5 19.5H13.5C14.3284 19.5 15 18.8284 15 18V3C15 2.17157 14.3284 1.5 13.5 1.5Z" fill="black" /><path d="M2.25 21C2.05109 21 1.86032 21.079 1.71967 21.2197C1.57902 21.3603 1.5 21.5511 1.5 21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5V21ZM21.75 22.5C21.9489 22.5 22.1397 22.421 22.2803 22.2803C22.421 22.1397 22.5 21.9489 22.5 21.75C22.5 21.5511 22.421 21.3603 22.2803 21.2197C22.1397 21.079 21.9489 21 21.75 21V22.5ZM2.25 22.5H21.75V21H2.25V22.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
