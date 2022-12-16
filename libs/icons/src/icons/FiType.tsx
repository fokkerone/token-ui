

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M8 20C8 19.4477 8.44772 19 9 19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20Z" fill="#250116" /><path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V7C21 7.55228 20.5523 8 20 8C19.4477 8 19 7.55228 19 7V5H5V7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7V4Z" fill="#250116" /><path d="M12 3C12.5523 3 13 3.44772 13 4V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V4C11 3.44772 11.4477 3 12 3Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon