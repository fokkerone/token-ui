

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.6684 0.077727C11.7716 0.026915 11.885 0.000488281 11.9999 0.000488281C12.1149 0.000488281 12.2283 0.026915 12.3314 0.077727L21.3539 4.53273C21.4546 4.58235 21.5428 4.65394 21.6122 4.74221C21.6815 4.83047 21.7301 4.93317 21.7544 5.04273L23.9819 15.0567C24.0059 15.1644 24.0058 15.276 23.9817 15.3835C23.9576 15.4911 23.91 15.5921 23.8424 15.6792L17.5994 23.7102C17.5293 23.8004 17.4394 23.8734 17.3367 23.9236C17.234 23.9738 17.1212 23.9998 17.0069 23.9997H6.99295C6.87866 23.9998 6.76586 23.9738 6.66317 23.9236C6.56048 23.8734 6.47062 23.8004 6.40045 23.7102L0.157447 15.6792C0.0898645 15.5921 0.0423243 15.4911 0.0182124 15.3835C-0.0058996 15.276 -0.00599015 15.1644 0.0179472 15.0567L2.24545 5.04273C2.26979 4.93317 2.31841 4.83047 2.38773 4.74221C2.45704 4.65394 2.54529 4.58235 2.64595 4.53273L11.6684 0.079227V0.077727ZM11.9999 22.4997H16.6394L22.4414 15.0372L20.3669 5.71923L11.9999 1.58673V22.4997Z" fill="black" />
    </IconBase>
  );
};

export default Icon