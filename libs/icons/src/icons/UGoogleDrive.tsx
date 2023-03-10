

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21.4231 13.8879L15.3336 3.33792H8.66663L14.7566 13.8879H21.4231ZM8.08917 4.33835L2 14.8874L5.33356 20.6621L11.4227 10.1128L8.08917 4.33835ZM9.8219 14.8874L6.48877 20.6621H18.6666L22 14.8874L9.8219 14.8874Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
