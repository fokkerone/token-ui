

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3.75 3C3.15326 3 2.58097 3.23705 2.15901 3.65901C1.73705 4.08097 1.5 4.65326 1.5 5.25V18H22.5V5.25C22.5 4.65326 22.2629 4.08097 21.841 3.65901C21.419 3.23705 20.8467 3 20.25 3H3.75ZM0 18.75H24C24 19.3467 23.7629 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H2.25C1.65326 21 1.08097 20.7629 0.65901 20.341C0.237053 19.919 0 19.3467 0 18.75H0Z" fill="black" />
    </IconBase>
  );
};

export default Icon
