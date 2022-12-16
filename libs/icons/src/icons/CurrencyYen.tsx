

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.125 21V17.0565H16.794V15.606H13.125V13.641H16.7925V12.1905H13.692L18.75 3H16.2015L12.0705 10.9905H11.9415L7.8105 3H5.25L10.2945 12.1905H7.167V13.6425H10.875V15.6075H7.17V17.0565H10.875V21H13.128H13.125Z" fill="black" />
    </IconBase>
  );
};

export default Icon
