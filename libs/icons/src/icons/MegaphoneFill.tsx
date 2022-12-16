

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19.5 3.75C19.5 3.15326 19.7371 2.58097 20.159 2.15901C20.581 1.73705 21.1533 1.5 21.75 1.5C22.3467 1.5 22.919 1.73705 23.341 2.15901C23.7629 2.58097 24 3.15326 24 3.75V20.25C24 20.8467 23.7629 21.419 23.341 21.841C22.919 22.2629 22.3467 22.5 21.75 22.5C21.1533 22.5 20.581 22.2629 20.159 21.841C19.7371 21.419 19.5 20.8467 19.5 20.25V3.75ZM18 4.836C14.8995 6.261 11.1915 7.0575 7.5 7.32V16.6755C8.04486 16.7062 8.58898 16.7487 9.132 16.803C12.2115 17.109 15.189 17.805 18 19.143V4.836ZM6 16.5975V7.401C4.98 7.4415 3.9015 7.4655 2.988 7.4805C2.19351 7.49151 1.43513 7.81416 0.876245 8.37894C0.317355 8.94372 0.00267717 9.70544 0 10.5L0 13.5C0 15.159 1.344 16.494 2.991 16.5135C3.23901 16.5166 3.48702 16.5206 3.735 16.5255C4.49026 16.5406 5.24531 16.5646 6 16.5975ZM8.085 18.219C8.5125 18.2505 8.9385 18.2895 9.36 18.336L9.7395 20.871C9.7808 21.0879 9.77368 21.3113 9.71867 21.5252C9.66365 21.7391 9.56209 21.9381 9.42124 22.1082C9.28039 22.2783 9.10372 22.4152 8.90385 22.5091C8.70398 22.603 8.48583 22.6516 8.265 22.6515H7.443C7.15143 22.6515 6.86619 22.5665 6.62217 22.4069C6.37815 22.2473 6.18592 22.0201 6.069 21.753L4.098 18.033C4.94438 18.0541 5.79045 18.0861 6.636 18.129C7.1265 18.1545 7.611 18.1845 8.085 18.219Z" fill="black" />
    </IconBase>
  );
};

export default Icon
