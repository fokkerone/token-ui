

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5.25 0C5.44891 0 5.63968 0.0790176 5.78033 0.21967C5.92098 0.360322 6 0.551088 6 0.75V1.5H18V0.75C18 0.551088 18.079 0.360322 18.2197 0.21967C18.3603 0.0790176 18.5511 0 18.75 0C18.9489 0 19.1397 0.0790176 19.2803 0.21967C19.421 0.360322 19.5 0.551088 19.5 0.75V1.5H21C21.7956 1.5 22.5587 1.81607 23.1213 2.37868C23.6839 2.94129 24 3.70435 24 4.5V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V7.5H24V6H0V4.5C0 3.70435 0.316071 2.94129 0.87868 2.37868C1.44129 1.81607 2.20435 1.5 3 1.5H4.5V0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790176 5.05109 0 5.25 0V0Z" fill="black" />
    </IconBase>
  );
};

export default Icon