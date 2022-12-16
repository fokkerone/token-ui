

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.5 5.25H16.5C17.0967 5.25 17.669 5.48705 18.091 5.90901C18.5129 6.33097 18.75 6.90326 18.75 7.5V16.5C18.75 17.0967 18.5129 17.669 18.091 18.091C17.669 18.5129 17.0967 18.75 16.5 18.75H7.5C6.90326 18.75 6.33097 18.5129 5.90901 18.091C5.48705 17.669 5.25 17.0967 5.25 16.5V7.5C5.25 6.90326 5.48705 6.33097 5.90901 5.90901C6.33097 5.48705 6.90326 5.25 7.5 5.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
