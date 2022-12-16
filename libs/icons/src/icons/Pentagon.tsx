

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 1.932L22.263 10.272L18.4005 22.5H5.5995L1.737 10.2705L12 1.932ZM24 9.75L12 0L0 9.75L4.5 24H19.5L24 9.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
