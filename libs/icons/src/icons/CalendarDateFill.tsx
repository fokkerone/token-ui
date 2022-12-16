

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6 0.75C6 0.551088 5.92098 0.360322 5.78033 0.21967C5.63968 0.0790176 5.44891 0 5.25 0C5.05109 0 4.86032 0.0790176 4.71967 0.21967C4.57902 0.360322 4.5 0.551088 4.5 0.75V1.5H3C2.20435 1.5 1.44129 1.81607 0.87868 2.37868C0.316071 2.94129 0 3.70435 0 4.5L0 6H24V4.5C24 3.70435 23.6839 2.94129 23.1213 2.37868C22.5587 1.81607 21.7956 1.5 21 1.5H19.5V0.75C19.5 0.551088 19.421 0.360322 19.2803 0.21967C19.1397 0.0790176 18.9489 0 18.75 0C18.5511 0 18.3603 0.0790176 18.2197 0.21967C18.079 0.360322 18 0.551088 18 0.75V1.5H6V0.75ZM14.103 15.369C15.0405 15.369 15.879 14.643 15.879 13.599C15.879 12.351 15.0885 11.754 14.139 11.754C13.26 11.754 12.387 12.3345 12.387 13.569C12.387 14.7945 13.2015 15.369 14.103 15.369Z" fill="black" /><path d="M24 21V7.5H0V21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21ZM14.004 19.185C12.339 19.185 11.52 18.0345 11.4495 17.0745H12.474C12.5385 17.6295 13.0545 18.3045 14.0505 18.3045C15.3165 18.3045 16.002 17.0325 16.008 15.0585H15.9675C15.738 15.6795 15.012 16.2435 13.893 16.2435C12.615 16.2435 11.379 15.3285 11.379 13.5885C11.379 11.883 12.6855 10.875 14.0745 10.875C15.8325 10.875 17.004 11.976 17.004 14.877C17.004 17.5845 15.891 19.1835 14.004 19.1835V19.185ZM9.669 11.0325V19.0305H8.655V12.1185H8.637C8.202 12.3525 7.3125 12.8985 6.75 13.284V12.24C7.38126 11.7977 8.03899 11.3945 8.7195 11.0325H9.6675H9.669Z" fill="black" />
    </IconBase>
  );
};

export default Icon
