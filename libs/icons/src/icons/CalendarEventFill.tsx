

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6 0.75C6 0.551088 5.92098 0.360322 5.78033 0.21967C5.63968 0.0790176 5.44891 0 5.25 0C5.05109 0 4.86032 0.0790176 4.71967 0.21967C4.57902 0.360322 4.5 0.551088 4.5 0.75V1.5H3C2.20435 1.5 1.44129 1.81607 0.87868 2.37868C0.316071 2.94129 0 3.70435 0 4.5L0 6H24V4.5C24 3.70435 23.6839 2.94129 23.1213 2.37868C22.5587 1.81607 21.7956 1.5 21 1.5H19.5V0.75C19.5 0.551088 19.421 0.360322 19.2803 0.21967C19.1397 0.0790176 18.9489 0 18.75 0C18.5511 0 18.3603 0.0790176 18.2197 0.21967C18.079 0.360322 18 0.551088 18 0.75V1.5H6V0.75ZM24 21V7.5H0V21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21ZM18.75 10.5H20.25C20.4489 10.5 20.6397 10.579 20.7803 10.7197C20.921 10.8603 21 11.0511 21 11.25V12.75C21 12.9489 20.921 13.1397 20.7803 13.2803C20.6397 13.421 20.4489 13.5 20.25 13.5H18.75C18.5511 13.5 18.3603 13.421 18.2197 13.2803C18.079 13.1397 18 12.9489 18 12.75V11.25C18 11.0511 18.079 10.8603 18.2197 10.7197C18.3603 10.579 18.5511 10.5 18.75 10.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon