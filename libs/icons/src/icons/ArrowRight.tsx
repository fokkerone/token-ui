

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.531C15.0782 6.39017 14.9991 6.19916 14.9991 6C14.9991 5.80084 15.0782 5.60983 15.219 5.469C15.3598 5.32817 15.5508 5.24905 15.75 5.24905C15.9492 5.24905 16.1402 5.32817 16.281 5.469L22.281 11.469C22.3508 11.5387 22.4063 11.6214 22.4441 11.7126C22.4819 11.8037 22.5013 11.9013 22.5013 12C22.5013 12.0987 22.4819 12.1963 22.4441 12.2875C22.4063 12.3786 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3902 14.9991 18.1992 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3897 1.5 12.1989 1.5 12Z" fill="black" />
    </IconBase>
  );
};

export default Icon