

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 24C14.3869 24 16.6761 23.0518 18.364 21.364C20.0518 19.6761 21 17.3869 21 15C21 12.5175 19.317 10.644 17.352 8.457C15.381 6.264 13.125 3.7545 12 0C12 0 3 8.529 3 15C3 17.3869 3.94821 19.6761 5.63604 21.364C7.32387 23.0518 9.61305 24 12 24ZM9.969 6.969L11.031 8.031C10.596 8.466 9.339 9.9975 8.1705 12.336L6.8295 11.664C8.0595 9.2025 9.405 7.5345 9.969 6.969Z" fill="black" />
    </IconBase>
  );
};

export default Icon
