

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M15 19.194V4.80597L6.77853 12L15 19.194ZM14.0115 20.3235L5.79153 13.1295C5.63042 12.9887 5.50129 12.8151 5.41281 12.6202C5.32434 12.4254 5.27856 12.2139 5.27856 12C5.27856 11.786 5.32434 11.5745 5.41281 11.3797C5.50129 11.1849 5.63042 11.0113 5.79153 10.8705L14.0115 3.67647C14.2284 3.48644 14.4955 3.36295 14.7808 3.3208C15.066 3.27865 15.3574 3.31962 15.62 3.4388C15.8826 3.55798 16.1052 3.75033 16.2613 3.99281C16.4174 4.23528 16.5003 4.51761 16.5 4.80597V19.194C16.5003 19.4823 16.4174 19.7647 16.2613 20.0071C16.1052 20.2496 15.8826 20.442 15.62 20.5611C15.3574 20.6803 15.066 20.7213 14.7808 20.6791C14.4955 20.637 14.2284 20.5135 14.0115 20.3235Z" fill="black" />
    </IconBase>
  );
};

export default Icon
