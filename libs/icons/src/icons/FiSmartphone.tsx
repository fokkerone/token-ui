

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7 3C6.44772 3 6 3.44772 6 4V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V4C18 3.44772 17.5523 3 17 3H7ZM4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V4Z" fill="#250116" /><path d="M11 18C11 17.4477 11.4477 17 12 17H12.01C12.5623 17 13.01 17.4477 13.01 18C13.01 18.5523 12.5623 19 12.01 19H12C11.4477 19 11 18.5523 11 18Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
