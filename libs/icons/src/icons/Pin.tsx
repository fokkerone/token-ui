

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.219 0.219001C6.28878 0.149398 6.37159 0.0942313 6.4627 0.0566538C6.55382 0.0190762 6.65144 -0.000174824 6.75 1.19624e-06H17.25C17.4489 1.19624e-06 17.6397 0.0790188 17.7803 0.219671C17.921 0.360323 18 0.551089 18 0.750001C18 1.77 17.487 2.511 17.031 2.9685C16.842 3.156 16.656 3.3045 16.5 3.4155V10.062L16.617 10.134C16.9215 10.3245 17.331 10.605 17.7435 10.9665C18.54 11.6625 19.5 12.7905 19.5 14.25C19.5 14.4489 19.421 14.6397 19.2803 14.7803C19.1397 14.921 18.9489 15 18.75 15H12.75V21.75C12.75 22.164 12.414 24 12 24C11.586 24 11.25 22.164 11.25 21.75V15H5.25C5.05109 15 4.86032 14.921 4.71967 14.7803C4.57902 14.6397 4.5 14.4489 4.5 14.25C4.5 12.7905 5.46 11.6625 6.255 10.9665C6.64305 10.6295 7.05961 10.3269 7.5 10.062V3.4155C7.31084 3.28157 7.13322 3.13205 6.969 2.9685C6.513 2.511 6 1.7685 6 0.750001C5.99982 0.651444 6.01908 0.553818 6.05665 0.462705C6.09423 0.371593 6.1494 0.28878 6.219 0.219001ZM8.589 2.331L8.586 2.3295L8.589 2.331ZM8.586 2.3295L8.589 2.331C8.71263 2.39365 8.81649 2.48933 8.88904 2.60742C8.96159 2.72551 9 2.8614 9 3V10.5C9 10.6392 8.96127 10.7756 8.88815 10.894C8.81504 11.0124 8.71042 11.1082 8.586 11.1705H8.583L8.565 11.181L8.484 11.226C8.04176 11.4727 7.62607 11.7642 7.2435 12.096C6.7665 12.513 6.366 12.99 6.156 13.5H17.844C17.634 12.99 17.2335 12.513 16.7565 12.096C16.3507 11.7438 15.9075 11.4369 15.435 11.181L15.417 11.172H15.414C15.2894 11.1095 15.1846 11.0136 15.1115 10.8949C15.0383 10.7762 14.9997 10.6394 15 10.5V3C14.9994 2.85497 15.0409 2.71288 15.1195 2.59094C15.198 2.46901 15.3102 2.37247 15.4425 2.313C15.6343 2.20004 15.8112 2.06348 15.969 1.9065C16.089 1.7865 16.2015 1.6515 16.29 1.5H7.71C7.8 1.65 7.9095 1.7865 8.031 1.9065C8.1967 2.07117 8.38329 2.21339 8.586 2.3295Z" fill="black" />
    </IconBase>
  );
};

export default Icon