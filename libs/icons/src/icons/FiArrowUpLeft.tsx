

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z" fill="#250116" /><path d="M6 7C6 6.44772 6.44772 6 7 6H17C17.5523 6 18 6.44772 18 7C18 7.55228 17.5523 8 17 8H8V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V7Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
