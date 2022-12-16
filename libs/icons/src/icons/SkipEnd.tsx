

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M18.75 6C18.75 5.80109 18.671 5.61032 18.5303 5.46967C18.3897 5.32902 18.1989 5.25 18 5.25C17.8011 5.25 17.6103 5.32902 17.4697 5.46967C17.329 5.61032 17.25 5.80109 17.25 6V10.872L7.8495 5.418C7.0695 4.965 6 5.4825 6 6.462V17.538C6 18.5175 7.0695 19.035 7.8495 18.582L17.25 13.128V18C17.25 18.1989 17.329 18.3897 17.4697 18.5303C17.6103 18.671 17.8011 18.75 18 18.75C18.1989 18.75 18.3897 18.671 18.5303 18.5303C18.671 18.3897 18.75 18.1989 18.75 18V6ZM7.5 6.9495L16.206 12L7.5 17.0505V6.9495Z" fill="black" />
    </IconBase>
  );
};

export default Icon
