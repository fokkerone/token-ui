

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 0L24 9.75L19.5 24H4.5L0 9.75L12 0Z" fill="black" />
    </IconBase>
  );
};

export default Icon
