

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M23.7071 5.29289C24.0976 5.68342 24.0976 6.31658 23.7071 6.70711L14.2071 16.2071C13.8166 16.5976 13.1834 16.5976 12.7929 16.2071L8.5 11.9142L1.70711 18.7071C1.31658 19.0976 0.683417 19.0976 0.292893 18.7071C-0.0976311 18.3166 -0.0976311 17.6834 0.292893 17.2929L7.79289 9.79289C8.18342 9.40237 8.81658 9.40237 9.20711 9.79289L13.5 14.0858L22.2929 5.29289C22.6834 4.90237 23.3166 4.90237 23.7071 5.29289Z" fill="#250116" /><path d="M16 6C16 5.44772 16.4477 5 17 5H23C23.5523 5 24 5.44772 24 6V12C24 12.5523 23.5523 13 23 13C22.4477 13 22 12.5523 22 12V7H17C16.4477 7 16 6.55228 16 6Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon