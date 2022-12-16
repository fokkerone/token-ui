

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 0H24V24H0V0ZM1.5 1.5V11.25H11.25V1.5H1.5ZM12.75 1.5V11.25H22.5V1.5H12.75ZM22.5 12.75H12.75V22.5H22.5V12.75ZM11.25 22.5V12.75H1.5V22.5H11.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
