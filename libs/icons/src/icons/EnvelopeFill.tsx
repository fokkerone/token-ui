

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0.075 5.3325C0.226227 4.66986 0.597983 4.07822 1.12938 3.65446C1.66078 3.23071 2.32033 2.99995 3 3H21C21.6797 2.99995 22.3392 3.23071 22.8706 3.65446C23.402 4.07822 23.7738 4.66986 23.925 5.3325L12 12.621L0.075 5.3325ZM0 7.0455V17.7015L8.7045 12.3645L0 7.0455ZM10.1415 13.245L0.2865 19.2855C0.52999 19.7989 0.91429 20.2326 1.39467 20.5362C1.87505 20.8397 2.43176 21.0005 3 21H21C21.5681 21.0001 22.1246 20.8389 22.6048 20.5351C23.0849 20.2313 23.4688 19.7975 23.712 19.284L13.857 13.2435L12 14.379L10.1415 13.2435V13.245ZM15.2955 12.366L24 17.7015V7.0455L15.2955 12.3645V12.366Z" fill="black" />
    </IconBase>
  );
};

export default Icon
