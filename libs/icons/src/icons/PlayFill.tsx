

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M17.394 13.0455L7.8495 18.5835C7.0395 19.053 6 18.4845 6 17.538V6.46203C6 5.51703 7.038 4.94703 7.8495 5.41803L17.394 10.956C17.5783 11.0612 17.7314 11.2133 17.8379 11.3967C17.9445 11.5802 18.0006 11.7886 18.0006 12.0008C18.0006 12.2129 17.9445 12.4213 17.8379 12.6048C17.7314 12.7883 17.5783 12.9403 17.394 13.0455Z" fill="black" />
    </IconBase>
  );
};

export default Icon
