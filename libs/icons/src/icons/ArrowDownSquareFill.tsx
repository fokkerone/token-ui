

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0ZM12.75 6.75V15.4395L15.969 12.219C16.0387 12.1493 16.1215 12.094 16.2126 12.0562C16.3037 12.0185 16.4014 11.9991 16.5 11.9991C16.5986 11.9991 16.6963 12.0185 16.7874 12.0562C16.8785 12.094 16.9613 12.1493 17.031 12.219C17.1007 12.2887 17.156 12.3715 17.1938 12.4626C17.2315 12.5537 17.2509 12.6514 17.2509 12.75C17.2509 12.8486 17.2315 12.9463 17.1938 13.0374C17.156 13.1285 17.1007 13.2113 17.031 13.281L12.531 17.781C12.4613 17.8508 12.3786 17.9063 12.2874 17.9441C12.1963 17.9819 12.0987 18.0013 12 18.0013C11.9013 18.0013 11.8037 17.9819 11.7125 17.9441C11.6214 17.9063 11.5387 17.8508 11.469 17.781L6.969 13.281C6.89927 13.2113 6.84395 13.1285 6.80621 13.0374C6.76848 12.9463 6.74905 12.8486 6.74905 12.75C6.74905 12.6514 6.76848 12.5537 6.80621 12.4626C6.84395 12.3715 6.89927 12.2887 6.969 12.219C7.10983 12.0782 7.30084 11.9991 7.5 11.9991C7.59862 11.9991 7.69627 12.0185 7.78738 12.0562C7.87848 12.094 7.96127 12.1493 8.031 12.219L11.25 15.4395V6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967C12.671 6.36032 12.75 6.55109 12.75 6.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
