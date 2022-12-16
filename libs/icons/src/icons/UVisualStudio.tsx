

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.85 2L9.09005 9.77L4.19005 5.91L2.05005 7V17L4.20005 18.09L9.13005 14.24L16.87 22L22 19.93V4L16.85 2ZM4.37005 14.3V9.65L6.81005 12.08L4.37005 14.3ZM16.7 15.59L12.05 12L16.7 8.41V15.59Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon