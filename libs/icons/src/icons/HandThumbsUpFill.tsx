

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.434 2.61756C10.5315 1.21506 11.862 0.13056 13.296 0.48756L13.6875 0.58656C14.382 0.76056 14.9985 1.27056 15.2055 2.03406C15.5355 3.25806 16.005 5.80056 15.2985 8.79906C15.5194 8.76855 15.741 8.74304 15.963 8.72256C17.0325 8.62506 18.4665 8.61456 19.737 9.03756C20.514 9.29706 21.228 10.0591 21.537 10.9471C21.813 11.7451 21.777 12.6901 21.186 13.5466C21.273 13.7251 21.3405 13.9096 21.393 14.0911C21.5085 14.4961 21.5625 14.9416 21.5625 15.3751C21.5625 15.8086 21.5085 16.2541 21.393 16.6591C21.3345 16.8616 21.258 17.0686 21.153 17.2651C21.4065 17.8456 21.3135 18.4936 21.1485 18.9871C20.9796 19.4744 20.7323 19.9308 20.4165 20.3386C20.4975 20.5666 20.5305 20.8066 20.5305 21.0361C20.5305 21.4936 20.397 21.9736 20.151 22.4041C19.65 23.2831 18.6555 24.0001 17.25 24.0001H12C11.0925 24.0001 10.395 23.8786 9.801 23.6731C9.29024 23.4865 8.80216 23.243 8.346 22.9471L8.274 22.9021C7.518 22.4416 6.7755 21.9886 5.172 21.8191C4.023 21.6961 3 20.7691 3 19.5001V13.5001C3 12.2251 4.0275 11.3521 5.0355 11.0776C6.309 10.7296 7.3965 9.89706 8.2335 8.96256C9.0735 8.02206 9.6045 7.04256 9.792 6.50406C10.0905 5.64156 10.326 4.19556 10.434 2.61906V2.61756Z" fill="black" />
    </IconBase>
  );
};

export default Icon
