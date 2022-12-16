

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 15C0 14.2044 0.316071 13.4413 0.87868 12.8787C1.44129 12.3161 2.20435 12 3 12H21C21.7956 12 22.5587 12.3161 23.1213 12.8787C23.6839 13.4413 24 14.2044 24 15V16.5C24 17.2956 23.6839 18.0587 23.1213 18.6213C22.5587 19.1839 21.7956 19.5 21 19.5H3C2.20435 19.5 1.44129 19.1839 0.87868 18.6213C0.316071 18.0587 0 17.2956 0 16.5V15ZM3.75 16.5C3.94891 16.5 4.13968 16.421 4.28033 16.2803C4.42098 16.1397 4.5 15.9489 4.5 15.75C4.5 15.5511 4.42098 15.3603 4.28033 15.2197C4.13968 15.079 3.94891 15 3.75 15C3.55109 15 3.36032 15.079 3.21967 15.2197C3.07902 15.3603 3 15.5511 3 15.75C3 15.9489 3.07902 16.1397 3.21967 16.2803C3.36032 16.421 3.55109 16.5 3.75 16.5ZM6.75 16.5C6.94891 16.5 7.13968 16.421 7.28033 16.2803C7.42098 16.1397 7.5 15.9489 7.5 15.75C7.5 15.5511 7.42098 15.3603 7.28033 15.2197C7.13968 15.079 6.94891 15 6.75 15C6.55109 15 6.36032 15.079 6.21967 15.2197C6.07902 15.3603 6 15.5511 6 15.75C6 15.9489 6.07902 16.1397 6.21967 16.2803C6.36032 16.421 6.55109 16.5 6.75 16.5ZM1.365 10.806C1.88618 10.603 2.4407 10.4993 3 10.5H21C21.576 10.5 22.128 10.608 22.635 10.806L19.8345 5.673C19.641 5.31803 19.3554 5.02176 19.0078 4.81535C18.6601 4.60893 18.2633 4.5 17.859 4.5H6.141C5.7367 4.5 5.33988 4.60893 4.99225 4.81535C4.64461 5.02176 4.35902 5.31803 4.1655 5.673L1.365 10.806Z" fill="black" />
    </IconBase>
  );
};

export default Icon
