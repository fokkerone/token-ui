

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84286 16.1566 4 14.1217 4 12C3.9978 10.2233 4.59302 8.49755 5.69 7.1L16.9 18.31C15.5025 19.407 13.7767 20.0022 12 20ZM18.31 16.9L7.1 5.69C8.49755 4.59302 10.2233 3.99779 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C20.0022 13.7767 19.407 15.5025 18.31 16.9Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
