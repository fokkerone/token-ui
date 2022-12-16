

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M18.3871 4.5H5.62206L5.49756 8.19H6.21606C6.60606 5.874 7.35306 5.5155 10.2556 5.4225L10.8916 5.403V17.1435C10.8916 18.138 10.6756 18.3735 8.94156 18.528V19.308H15.0646V18.528C13.3216 18.3735 13.1056 18.138 13.1056 17.1435V5.403L13.7521 5.4225C16.6531 5.5155 17.4031 5.874 17.7916 8.1915H18.5101L18.3871 4.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
