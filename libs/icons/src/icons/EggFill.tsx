

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 15C21 17.3869 20.0518 19.6761 18.364 21.364C16.6761 23.0518 14.3869 24 12 24C9.61305 24 7.32387 23.0518 5.63604 21.364C3.94821 19.6761 3 17.3869 3 15C3 8.529 7.5 0 12 0C16.5 0 21 8.529 21 15Z" fill="black" />
    </IconBase>
  );
};

export default Icon
