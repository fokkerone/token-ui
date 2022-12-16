

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.5 7.782C4.5 3.5115 7.83 0 12 0C16.17 0 19.5 3.513 19.5 7.782V16.2195C19.5 20.487 16.17 24 12 24C7.83 24 4.5 20.487 4.5 16.218V7.7835V7.782ZM11.25 1.5495C8.3115 1.9335 6 4.5525 6 7.782V8.25H11.25V1.5495ZM12.75 1.5495V8.25H18V7.7805C18 4.5525 15.6885 1.9335 12.75 1.5495ZM18 9.75H6V16.2195C6 19.7175 8.715 22.5 12 22.5C15.285 22.5 18 19.7175 18 16.218V9.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
