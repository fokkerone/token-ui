

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 19.5C13.9891 19.5 15.8968 18.7098 17.3033 17.3033C18.7098 15.8968 19.5 13.9891 19.5 12C19.5 10.0109 18.7098 8.10322 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5C10.0109 4.5 8.10322 5.29018 6.6967 6.6967C5.29018 8.10322 4.5 10.0109 4.5 12C4.5 13.9891 5.29018 15.8968 6.6967 17.3033C8.10322 18.7098 10.0109 19.5 12 19.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
