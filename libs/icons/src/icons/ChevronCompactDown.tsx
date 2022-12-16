

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M2.32948 10.164C2.4186 9.98652 2.57444 9.85167 2.76284 9.78896C2.95123 9.72626 3.15681 9.74082 3.33448 9.82945L12 14.16L20.664 9.82795C20.7521 9.78292 20.8483 9.75579 20.947 9.74811C21.0457 9.74043 21.1449 9.75236 21.239 9.78321C21.333 9.81407 21.42 9.86323 21.495 9.92787C21.5699 9.99251 21.6313 10.0713 21.6757 10.1598C21.72 10.2483 21.7464 10.3447 21.7533 10.4435C21.7603 10.5422 21.7476 10.6413 21.716 10.7351C21.6844 10.8289 21.6346 10.9156 21.5693 10.99C21.5041 11.0645 21.4248 11.1253 21.336 11.169L12.336 15.669C12.2317 15.7212 12.1166 15.7484 12 15.7484C11.8833 15.7484 11.7683 15.7212 11.664 15.669L2.66398 11.169C2.48655 11.0798 2.3517 10.924 2.28899 10.7356C2.22629 10.5472 2.24085 10.3416 2.32948 10.164Z" fill="black" />
    </IconBase>
  );
};

export default Icon
