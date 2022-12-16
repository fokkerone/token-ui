

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.5 16C4.5 15.4477 4.94772 15 5.5 15H18.5C19.0523 15 19.5 15.4477 19.5 16C19.5 16.5523 19.0523 17 18.5 17H5.5C4.94772 17 4.5 16.5523 4.5 16Z" fill="#250116" /><path d="M18.5 8C16.567 8 15 9.567 15 11.5C15 13.433 16.567 15 18.5 15C20.433 15 22 13.433 22 11.5C22 9.567 20.433 8 18.5 8ZM13 11.5C13 8.46243 15.4624 6 18.5 6C21.5376 6 24 8.46243 24 11.5C24 14.5376 21.5376 17 18.5 17C15.4624 17 13 14.5376 13 11.5Z" fill="#250116" /><path d="M5.5 8C3.567 8 2 9.567 2 11.5C2 13.433 3.567 15 5.5 15C7.433 15 9 13.433 9 11.5C9 9.567 7.433 8 5.5 8ZM0 11.5C0 8.46243 2.46243 6 5.5 6C8.53757 6 11 8.46243 11 11.5C11 14.5376 8.53757 17 5.5 17C2.46243 17 0 14.5376 0 11.5Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
