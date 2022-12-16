

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.79 18C16.2753 18.2127 15.7266 18.3313 15.17 18.35C14.9037 18.379 14.6344 18.3465 14.3827 18.255C14.1309 18.1635 13.9036 18.0154 13.7181 17.8222C13.5326 17.629 13.394 17.3958 13.3128 17.1406C13.2317 16.8853 13.2102 16.6149 13.25 16.35V10.12H17.25V7.12H13.25V2H10.33C10.292 2.00254 10.2563 2.01946 10.2303 2.04732C10.2043 2.07518 10.1899 2.11189 10.19 2.15C10.127 3.3338 9.72089 4.47369 9.0213 5.43074C8.32172 6.38779 7.35883 7.12065 6.25 7.54V10.12H8.25V16.66C8.25 18.89 9.9 22.07 14.25 22C15.72 22 17.36 21.36 17.72 20.83L16.79 18Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon