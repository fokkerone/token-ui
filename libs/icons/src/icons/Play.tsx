

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.206 12.0002L7.5 6.94967V17.0507L16.206 12.0002ZM17.394 10.9562C17.5779 11.0615 17.7307 11.2135 17.837 11.3968C17.9433 11.5801 17.9993 11.7883 17.9993 12.0002C17.9993 12.2121 17.9433 12.4202 17.837 12.6036C17.7307 12.7869 17.5779 12.9389 17.394 13.0442L7.8495 18.5822C7.0695 19.0352 6 18.5177 6 17.5382V6.46217C6 5.48267 7.0695 4.96517 7.8495 5.41817L17.394 10.9562Z" fill="black" />
    </IconBase>
  );
};

export default Icon
