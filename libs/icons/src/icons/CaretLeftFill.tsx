

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5.79003 13.1295L14.013 20.3235C14.982 21.1725 16.5 20.4825 16.5 19.194V4.80597C16.5003 4.51761 16.4174 4.23528 16.2613 3.99281C16.1052 3.75033 15.8826 3.55798 15.62 3.4388C15.3574 3.31962 15.066 3.27865 14.7808 3.3208C14.4955 3.36295 14.2284 3.48644 14.0115 3.67647L5.79153 10.8705C5.63042 11.0113 5.50129 11.1849 5.41281 11.3797C5.32434 11.5745 5.27856 11.786 5.27856 12C5.27856 12.2139 5.32434 12.4254 5.41281 12.6202C5.50129 12.8151 5.63042 12.9887 5.79153 13.1295H5.79003Z" fill="black" />
    </IconBase>
  );
};

export default Icon
