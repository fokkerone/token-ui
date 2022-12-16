

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.219 0.219001C6.28878 0.149398 6.37159 0.0942313 6.4627 0.0566538C6.55382 0.0190762 6.65144 -0.000174824 6.75 1.19624e-06H17.25C17.4489 1.19624e-06 17.6397 0.0790188 17.7803 0.219671C17.921 0.360323 18 0.551089 18 0.750001C18 1.77 17.487 2.511 17.031 2.9685C16.842 3.156 16.656 3.3045 16.5 3.4155V10.062L16.617 10.134C16.9215 10.3245 17.331 10.605 17.7435 10.9665C18.54 11.6625 19.5 12.7905 19.5 14.25C19.5 14.4489 19.421 14.6397 19.2803 14.7803C19.1397 14.921 18.9489 15 18.75 15H12.75V21.75C12.75 22.164 12.414 24 12 24C11.586 24 11.25 22.164 11.25 21.75V15H5.25C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25C4.5 12.7905 5.46 11.6625 6.255 10.9665C6.64305 10.6295 7.05961 10.3269 7.5 10.062V3.4155C7.31084 3.28157 7.13322 3.13205 6.969 2.9685C6.513 2.511 6 1.7685 6 0.750001C5.99982 0.651444 6.01908 0.553818 6.05665 0.462705C6.09423 0.371593 6.1494 0.28878 6.219 0.219001Z" fill="black" />
    </IconBase>
  );
};

export default Icon