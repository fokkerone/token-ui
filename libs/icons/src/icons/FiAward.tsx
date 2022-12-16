

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2ZM4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8C20 12.4183 16.4183 16 12 16C7.58172 16 4 12.4183 4 8Z" fill="#250116" /><path d="M15.6585 12.8887C16.206 12.816 16.7087 13.201 16.7813 13.7485L17.9913 22.8685C18.0418 23.2491 17.8699 23.625 17.549 23.8358C17.2281 24.0466 16.8148 24.055 16.4855 23.8575L12 21.1662L7.51452 23.8575C7.18525 24.0551 6.77193 24.0466 6.45099 23.8358C6.13004 23.625 5.95817 23.249 6.00873 22.8683L7.21873 13.7583C7.29145 13.2109 7.79421 12.826 8.34169 12.8987C8.88917 12.9714 9.27403 13.4742 9.20132 14.0217L8.26447 21.0751L11.4855 19.1425C11.8022 18.9525 12.1978 18.9525 12.5145 19.1425L15.7359 21.0753L14.7987 14.0115C14.7261 13.464 15.111 12.9613 15.6585 12.8887Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
