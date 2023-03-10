

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5.7855 0L1.5 4.2855V19.7145H6.6435V24L10.929 19.7145H14.355L22.071 12V0H5.7855ZM20.3565 11.1435L16.929 14.571H13.5L10.5 17.571V14.571H6.6435V1.7145H20.3565V11.1435Z" fill="black" /><path d="M17.7855 4.71436H16.071V9.85486H17.7855V4.71436ZM13.071 4.71436H11.3565V9.85486H13.071V4.71436Z" fill="black" />
    </IconBase>
  );
};

export default Icon
