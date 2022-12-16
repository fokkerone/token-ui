

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.8705 7.29003L3.67652 15.5115C2.82752 16.482 3.51752 18 4.80602 18H19.194C19.4824 18.0003 19.7647 17.9174 20.0072 17.7613C20.2497 17.6052 20.442 17.3826 20.5612 17.12C20.6804 16.8574 20.7213 16.566 20.6792 16.2808C20.637 15.9955 20.5136 15.7284 20.3235 15.5115L13.1295 7.29153C12.9887 7.13042 12.8151 7.00129 12.6203 6.91281C12.4255 6.82434 12.214 6.77856 12 6.77856C11.7861 6.77856 11.5746 6.82434 11.3798 6.91281C11.1849 7.00129 11.0113 7.13042 10.8705 7.29153V7.29003Z" fill="black" />
    </IconBase>
  );
};

export default Icon