

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.9695 4.7041H6.1245V14.3101C6.1245 17.4676 8.3295 19.7446 12 19.7446C15.6705 19.7446 17.8755 17.4676 17.8755 14.3101V4.7041H16.0305V14.1886C16.0305 16.4236 14.5635 18.0436 12 18.0436C9.4365 18.0436 7.9695 16.4236 7.9695 14.1886V4.7041ZM18.75 22.5001H5.25V21.0001H18.75V22.5001Z" fill="black" />
    </IconBase>
  );
};

export default Icon
