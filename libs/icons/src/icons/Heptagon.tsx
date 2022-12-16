

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.6685 0.077727C11.7716 0.026915 11.885 0.000488281 12 0.000488281C12.115 0.000488281 12.2284 0.026915 12.3315 0.077727L21.354 4.53273C21.4547 4.58235 21.5429 4.65394 21.6122 4.74221C21.6815 4.83047 21.7302 4.93317 21.7545 5.04273L23.982 15.0567C24.0059 15.1644 24.0059 15.276 23.9817 15.3835C23.9576 15.4911 23.9101 15.5921 23.8425 15.6792L17.5995 23.7102C17.5293 23.8004 17.4395 23.8734 17.3368 23.9236C17.2341 23.9738 17.1213 23.9998 17.007 23.9997H6.99301C6.87872 23.9998 6.76592 23.9738 6.66323 23.9236C6.56055 23.8734 6.47068 23.8004 6.40051 23.7102L0.157508 15.6792C0.0899255 15.5921 0.0423854 15.4911 0.0182734 15.3835C-0.00583856 15.276 -0.00592912 15.1644 0.0180082 15.0567L2.24551 5.04273C2.26985 4.93317 2.31848 4.83047 2.38779 4.74221C2.45711 4.65394 2.54535 4.58235 2.64601 4.53273L11.6685 0.079227V0.077727ZM3.63301 5.71923L1.55851 15.0372L7.36051 22.4997H16.6395L22.4415 15.0372L20.367 5.71923L12 1.58673L3.63301 5.71923Z" fill="black" />
    </IconBase>
  );
};

export default Icon