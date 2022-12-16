

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" fill="#250116" /><path d="M14 8C14.5523 8 15 8.44772 15 9V15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8Z" fill="#250116" /><path d="M10 8C10.5523 8 11 8.44772 11 9V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V9C9 8.44772 9.44772 8 10 8Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
