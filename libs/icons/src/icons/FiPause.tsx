

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13 4C13 3.44772 13.4477 3 14 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H14C13.4477 21 13 20.5523 13 20V4ZM15 5V19H17V5H15Z" fill="#250116" /><path d="M5 4C5 3.44772 5.44772 3 6 3H10C10.5523 3 11 3.44772 11 4V20C11 20.5523 10.5523 21 10 21H6C5.44772 21 5 20.5523 5 20V4ZM7 5V19H9V5H7Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
