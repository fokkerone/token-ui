

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.5 3V0H0V7.5H3V16.5H0V24H7.5V21H16.5V24H24V16.5H21V7.5H24V0H16.5V3H7.5ZM16.5 4.5V7.5H19.5V16.5H16.5V19.5H7.5V16.5H4.5V7.5H7.5V4.5H16.5ZM18 1.5H22.5V6H18V1.5ZM22.5 18V22.5H18V18H22.5ZM6 22.5H1.5V18H6V22.5ZM1.5 6V1.5H6V6H1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
