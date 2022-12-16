

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M15.75 5.25C15.75 4.25544 15.3549 3.30161 14.6517 2.59835C13.9484 1.89509 12.9946 1.5 12 1.5C11.0054 1.5 10.0516 1.89509 9.34835 2.59835C8.64509 3.30161 8.25 4.25544 8.25 5.25V6H15.75V5.25ZM17.25 5.25V6H22.5V21C22.5 21.7956 22.1839 22.5587 21.6213 23.1213C21.0587 23.6839 20.2956 24 19.5 24H4.5C3.70435 24 2.94129 23.6839 2.37868 23.1213C1.81607 22.5587 1.5 21.7956 1.5 21V6H6.75V5.25C6.75 3.85761 7.30312 2.52226 8.28769 1.53769C9.27226 0.553123 10.6076 0 12 0C13.3924 0 14.7277 0.553123 15.7123 1.53769C16.6969 2.52226 17.25 3.85761 17.25 5.25ZM9 14.25C8.80109 14.25 8.61032 14.329 8.46967 14.4697C8.32902 14.6103 8.25 14.8011 8.25 15C8.25 15.1989 8.32902 15.3897 8.46967 15.5303C8.61032 15.671 8.80109 15.75 9 15.75H15C15.1989 15.75 15.3897 15.671 15.5303 15.5303C15.671 15.3897 15.75 15.1989 15.75 15C15.75 14.8011 15.671 14.6103 15.5303 14.4697C15.3897 14.329 15.1989 14.25 15 14.25H9Z" fill="black" />
    </IconBase>
  );
};

export default Icon
