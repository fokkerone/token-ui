

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6 0.75C6 0.551088 5.92098 0.360322 5.78033 0.21967C5.63968 0.0790176 5.44891 0 5.25 0C5.05109 0 4.86032 0.0790176 4.71967 0.21967C4.57902 0.360322 4.5 0.551088 4.5 0.75V1.5H3C2.20435 1.5 1.44129 1.81607 0.87868 2.37868C0.316071 2.94129 0 3.70435 0 4.5L0 6H24V4.5C24 3.70435 23.6839 2.94129 23.1213 2.37868C22.5587 1.81607 21.7956 1.5 21 1.5H19.5V0.75C19.5 0.551088 19.421 0.360322 19.2803 0.21967C19.1397 0.0790176 18.9489 0 18.75 0C18.5511 0 18.3603 0.0790176 18.2197 0.21967C18.079 0.360322 18 0.551088 18 0.75V1.5H6V0.75ZM24 21V7.5H0V21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21ZM10.281 12.219L12 13.9395L13.719 12.219C13.8598 12.0782 14.0508 11.9991 14.25 11.9991C14.4492 11.9991 14.6402 12.0782 14.781 12.219C14.9218 12.3598 15.0009 12.5508 15.0009 12.75C15.0009 12.9492 14.9218 13.1402 14.781 13.281L13.0605 15L14.781 16.719C14.9218 16.8598 15.0009 17.0508 15.0009 17.25C15.0009 17.4492 14.9218 17.6402 14.781 17.781C14.6402 17.9218 14.4492 18.0009 14.25 18.0009C14.0508 18.0009 13.8598 17.9218 13.719 17.781L12 16.0605L10.281 17.781C10.1402 17.9218 9.94916 18.0009 9.75 18.0009C9.55084 18.0009 9.35983 17.9218 9.219 17.781C9.07817 17.6402 8.99905 17.4492 8.99905 17.25C8.99905 17.0508 9.07817 16.8598 9.219 16.719L10.9395 15L9.219 13.281C9.14927 13.2113 9.09395 13.1285 9.05622 13.0374C9.01848 12.9463 8.99905 12.8486 8.99905 12.75C8.99905 12.6514 9.01848 12.5537 9.05622 12.4626C9.09395 12.3715 9.14927 12.2887 9.219 12.219C9.28873 12.1493 9.37152 12.094 9.46262 12.0562C9.55373 12.0185 9.65138 11.9991 9.75 11.9991C9.84862 11.9991 9.94627 12.0185 10.0374 12.0562C10.1285 12.094 10.2113 12.1493 10.281 12.219Z" fill="black" />
    </IconBase>
  );
};

export default Icon