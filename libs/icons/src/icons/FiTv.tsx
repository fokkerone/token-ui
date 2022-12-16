

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4 8C3.44772 8 3 8.44772 3 9V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V9C21 8.44772 20.5523 8 20 8H4ZM1 9C1 7.34315 2.34315 6 4 6H20C21.6569 6 23 7.34315 23 9V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V9Z" fill="#250116" /><path d="M6.29289 1.29289C6.68342 0.902369 7.31658 0.902369 7.70711 1.29289L12 5.58579L16.2929 1.29289C16.6834 0.902369 17.3166 0.902369 17.7071 1.29289C18.0976 1.68342 18.0976 2.31658 17.7071 2.70711L12.7071 7.70711C12.3166 8.09763 11.6834 8.09763 11.2929 7.70711L6.29289 2.70711C5.90237 2.31658 5.90237 1.68342 6.29289 1.29289Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon