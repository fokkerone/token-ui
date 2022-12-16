

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.25 0.0390625C7.437 0.429062 4.5 3.77256 4.5 7.78206V8.25006H11.25V0.0390625ZM12.75 0.0390625V8.25006H19.5V7.78206C19.5 3.77256 16.563 0.429062 12.75 0.0390625ZM19.5 9.75006H4.5V16.2196C4.5 20.4871 7.83 24.0001 12 24.0001C16.17 24.0001 19.5 20.4871 19.5 16.2181V9.75006Z" fill="black" />
    </IconBase>
  );
};

export default Icon
