

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.609 5.013C8.10822 3.7202 10.0204 3.00621 12 3C16.035 3 19.3845 6 19.749 9.8685C22.137 10.206 24 12.2055 24 14.6595C24 17.3535 21.753 19.5 19.0305 19.5H5.6715C2.562 19.5 0 17.049 0 13.977C0 11.3325 1.899 9.1425 4.413 8.5875C4.6275 7.293 5.46 6.003 6.609 5.013Z" fill="black" />
    </IconBase>
  );
};

export default Icon
