

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.5 7.5C3.30653 7.5 2.16193 7.97411 1.31802 8.81802C0.474106 9.66193 0 10.8065 0 12C0 13.1935 0.474106 14.3381 1.31802 15.182C2.16193 16.0259 3.30653 16.5 4.5 16.5H19.5C20.6935 16.5 21.8381 16.0259 22.682 15.182C23.5259 14.3381 24 13.1935 24 12C24 10.8065 23.5259 9.66193 22.682 8.81802C21.8381 7.97411 20.6935 7.5 19.5 7.5H4.5ZM5.25 11.25C5.05109 11.25 4.86032 11.329 4.71967 11.4697C4.57902 11.6103 4.5 11.8011 4.5 12C4.5 12.1989 4.57902 12.3897 4.71967 12.5303C4.86032 12.671 5.05109 12.75 5.25 12.75H18.75C18.9489 12.75 19.1397 12.671 19.2803 12.5303C19.421 12.3897 19.5 12.1989 19.5 12C19.5 11.8011 19.421 11.6103 19.2803 11.4697C19.1397 11.329 18.9489 11.25 18.75 11.25H5.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon