

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M15.75 22.5C15.5511 22.5 15.3603 22.421 15.2197 22.2803C15.079 22.1397 15 21.9489 15 21.75V3H13.5V21.75C13.5 21.9489 13.421 22.1397 13.2803 22.2803C13.1397 22.421 12.9489 22.5 12.75 22.5C12.5511 22.5 12.3603 22.421 12.2197 22.2803C12.079 22.1397 12 21.9489 12 21.75V13.5H10.5C8.9087 13.5 7.38258 12.8679 6.25736 11.7426C5.13214 10.6174 4.5 9.0913 4.5 7.5C4.5 5.9087 5.13214 4.38258 6.25736 3.25736C7.38258 2.13214 8.9087 1.5 10.5 1.5H18.75C18.9489 1.5 19.1397 1.57902 19.2803 1.71967C19.421 1.86032 19.5 2.05109 19.5 2.25C19.5 2.44891 19.421 2.63968 19.2803 2.78033C19.1397 2.92098 18.9489 3 18.75 3H16.5V21.75C16.5 21.9489 16.421 22.1397 16.2803 22.2803C16.1397 22.421 15.9489 22.5 15.75 22.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
