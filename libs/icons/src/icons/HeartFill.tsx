

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.9999 1.97108C18.6569 -4.87192 35.3009 7.10258 11.9999 22.5001C-11.3011 7.10408 5.34292 -4.87192 11.9999 1.97108Z" fill="black" />
    </IconBase>
  );
};

export default Icon
