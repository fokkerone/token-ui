

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 4.12207V20.6926C17.178 17.1406 20.0475 13.8796 21.429 11.1571C22.8615 8.32807 22.686 6.11407 21.9 4.57957C20.229 1.31707 15.6 0.420073 13.0755 3.01507L12 4.12207ZM12 22.5001C-10.9995 7.30207 4.91846 -4.55993 11.736 1.71457C11.826 1.79707 11.9145 1.88257 12 1.97107C12.0846 1.88265 12.1727 1.79759 12.264 1.71607C19.08 -4.56293 34.9995 7.30057 12 22.5001Z" fill="black" />
    </IconBase>
  );
};

export default Icon
