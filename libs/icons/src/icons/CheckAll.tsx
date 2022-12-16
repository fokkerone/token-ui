

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.455 7.45506C13.6663 7.2539 13.9475 7.14268 14.2392 7.14489C14.531 7.1471 14.8104 7.26256 15.0187 7.4669C15.2269 7.67124 15.3476 7.94848 15.3553 8.24013C15.363 8.53177 15.2571 8.81501 15.06 9.03006L9.07499 16.5151C8.97208 16.6259 8.84787 16.7149 8.70979 16.7766C8.57171 16.8384 8.4226 16.8716 8.27137 16.8744C8.12014 16.8772 7.9699 16.8495 7.82963 16.7929C7.68936 16.7363 7.56194 16.652 7.45499 16.5451L3.48599 12.5761C3.37546 12.4731 3.28681 12.3489 3.22532 12.2109C3.16383 12.0729 3.13077 11.9239 3.1281 11.7728C3.12544 11.6218 3.15323 11.4718 3.20981 11.3317C3.26639 11.1916 3.35061 11.0643 3.45743 10.9575C3.56426 10.8507 3.69151 10.7665 3.8316 10.7099C3.97168 10.6533 4.12172 10.6255 4.27278 10.6282C4.42383 10.6308 4.5728 10.6639 4.7108 10.7254C4.8488 10.7869 4.973 10.8755 5.07599 10.9861L8.21699 14.1256L13.425 7.48806C13.4343 7.47648 13.4444 7.46546 13.455 7.45506ZM12.075 15.1651L13.455 16.5451C13.5619 16.6518 13.6892 16.7359 13.8294 16.7923C13.9695 16.8488 14.1196 16.8765 14.2706 16.8737C14.4217 16.8709 14.5706 16.8377 14.7085 16.7761C14.8465 16.7144 14.9706 16.6257 15.0735 16.5151L21.0615 9.03006C21.1691 8.92387 21.2541 8.79708 21.3116 8.65728C21.3691 8.51748 21.3978 8.36752 21.396 8.21638C21.3943 8.06523 21.3621 7.91599 21.3013 7.77756C21.2406 7.63914 21.1526 7.51437 21.0426 7.41071C20.9326 7.30705 20.8028 7.22662 20.661 7.17423C20.5192 7.12184 20.3684 7.09856 20.2174 7.10578C20.0664 7.113 19.9184 7.15057 19.7823 7.21625C19.6461 7.28193 19.5246 7.37438 19.425 7.48806L14.2155 14.1256L13.488 13.3966L12.0735 15.1651H12.075Z" fill="black" />
    </IconBase>
  );
};

export default Icon