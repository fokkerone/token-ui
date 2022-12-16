

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 16C20.7348 16 20.4804 16.1054 20.2929 16.2929C20.1054 16.4804 20 16.7348 20 17V18.59L13.41 12L15.54 9.88C15.7283 9.6917 15.8341 9.4363 15.8341 9.17C15.8341 8.9037 15.7283 8.6483 15.54 8.46C15.3517 8.2717 15.0963 8.16591 14.83 8.16591C14.5637 8.16591 14.3083 8.2717 14.12 8.46L12 10.59L5.41 4H7C7.26522 4 7.51957 3.89464 7.70711 3.70711C7.89464 3.51957 8 3.26522 8 3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2H3C2.86932 2.00158 2.74022 2.02876 2.62 2.08C2.37565 2.18147 2.18147 2.37565 2.08 2.62C2.02876 2.74022 2.00158 2.86932 2 3V7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8C3.26522 8 3.51957 7.89464 3.70711 7.70711C3.89464 7.51957 4 7.26522 4 7V5.41L10.59 12L8.46 14.12C8.36627 14.213 8.29188 14.3236 8.24111 14.4454C8.19034 14.5673 8.1642 14.698 8.1642 14.83C8.1642 14.962 8.19034 15.0927 8.24111 15.2146C8.29188 15.3364 8.36627 15.447 8.46 15.54C8.55344 15.6327 8.66426 15.706 8.78609 15.7558C8.90793 15.8055 9.03839 15.8308 9.17 15.83C9.30161 15.8308 9.43207 15.8055 9.55391 15.7558C9.67574 15.706 9.78656 15.6327 9.88 15.54L12 13.41L18.59 20H17C16.7348 20 16.4804 20.1054 16.2929 20.2929C16.1054 20.4804 16 20.7348 16 21C16 21.2652 16.1054 21.5196 16.2929 21.7071C16.4804 21.8946 16.7348 22 17 22H21C21.1307 21.9984 21.2598 21.9712 21.38 21.92C21.6243 21.8185 21.8185 21.6243 21.92 21.38C21.9712 21.2598 21.9984 21.1307 22 21V17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
