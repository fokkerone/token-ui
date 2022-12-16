

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3.75 20.25C3.75 20.0511 3.82902 19.8603 3.96967 19.7197C4.11032 19.579 4.30109 19.5 4.5 19.5H19.5C19.6989 19.5 19.8897 19.579 20.0303 19.7197C20.171 19.8603 20.25 20.0511 20.25 20.25C20.25 20.4489 20.171 20.6397 20.0303 20.7803C19.8897 20.921 19.6989 21 19.5 21H4.5C4.30109 21 4.11032 20.921 3.96967 20.7803C3.82902 20.6397 3.75 20.4489 3.75 20.25ZM3 3H21C21 3 24 3 24 6V15C24 15 24 18 21 18H3C3 18 0 18 0 15V6C0 6 0 3 3 3Z" fill="black" />
    </IconBase>
  );
};

export default Icon
