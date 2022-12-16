

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.0965 0L3 13.6875H7.182L10.095 8.2455L12.99 13.6875H17.139L10.0965 0ZM17.1375 13.6875L15.0795 17.8215L12.99 13.6875H9.8205L15.0795 24L20.3055 13.6875H17.1375Z" fill="black" />
    </IconBase>
  );
};

export default Icon
