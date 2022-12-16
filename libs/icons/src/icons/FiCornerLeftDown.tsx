

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3.29289 14.2929C3.68342 13.9024 4.31658 13.9024 4.70711 14.2929L9 18.5858L13.2929 14.2929C13.6834 13.9024 14.3166 13.9024 14.7071 14.2929C15.0976 14.6834 15.0976 15.3166 14.7071 15.7071L9.70711 20.7071C9.31658 21.0976 8.68342 21.0976 8.29289 20.7071L3.29289 15.7071C2.90237 15.3166 2.90237 14.6834 3.29289 14.2929Z" fill="#250116" /><path d="M9.46447 4.46447C10.4021 3.52678 11.6739 3 13 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H13C12.2044 5 11.4413 5.31607 10.8787 5.87868C10.3161 6.44129 10 7.20435 10 8V20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20V8C8 6.67392 8.52678 5.40215 9.46447 4.46447Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
