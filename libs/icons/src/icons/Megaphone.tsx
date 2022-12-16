

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19.5 3.75C19.5 3.15326 19.7371 2.58097 20.159 2.15901C20.581 1.73705 21.1533 1.5 21.75 1.5C22.3467 1.5 22.919 1.73705 23.341 2.15901C23.7629 2.58097 24 3.15326 24 3.75V20.25C24 20.8467 23.7629 21.419 23.341 21.841C22.919 22.2629 22.3467 22.5 21.75 22.5C21.1533 22.5 20.581 22.2629 20.159 21.841C19.7371 21.419 19.5 20.8467 19.5 20.25V19.929C16.257 18.0675 12.765 17.1645 9.132 16.8045L9.7395 20.8725C9.7803 21.0892 9.77281 21.3123 9.71756 21.5258C9.66232 21.7393 9.56068 21.938 9.41988 22.1077C9.27908 22.2774 9.10259 22.414 8.90297 22.5078C8.70336 22.6015 8.48553 22.6501 8.265 22.65H7.443C7.15143 22.65 6.86619 22.565 6.62217 22.4054C6.37815 22.2458 6.18592 22.0186 6.069 21.7515L3.294 16.5165C3.193 16.5149 3.092 16.5134 2.991 16.512C2.19655 16.5041 1.43718 16.1836 0.877358 15.6198C0.317536 15.0561 0.00232777 14.2945 0 13.5L0 10.5C0.00267717 9.70544 0.317355 8.94372 0.876245 8.37894C1.43513 7.81416 2.19351 7.49151 2.988 7.4805C4.23004 7.46366 5.47171 7.42615 6.7125 7.368C11.277 7.137 15.9345 6.0945 19.5 4.0695V3.75ZM21 3.75V20.25C21 20.4489 21.079 20.6397 21.2197 20.7803C21.3603 20.921 21.5511 21 21.75 21C21.9489 21 22.1397 20.921 22.2803 20.7803C22.421 20.6397 22.5 20.4489 22.5 20.25V3.75C22.5 3.55109 22.421 3.36032 22.2803 3.21967C22.1397 3.07902 21.9489 3 21.75 3C21.5511 3 21.3603 3.07902 21.2197 3.21967C21.079 3.36032 21 3.55109 21 3.75ZM19.5 5.775C15.984 7.5825 11.6865 8.538 7.5 8.8245V15.174C7.77 15.189 8.0385 15.207 8.3055 15.228C12.1575 15.5115 15.945 16.344 19.5 18.2175V5.775ZM6 15.0975V8.9025C5.0043 8.93894 4.00824 8.96494 3.012 8.9805C2.61116 8.98521 2.22817 9.14704 1.94542 9.4312C1.66266 9.71536 1.50272 10.0991 1.5 10.5V13.5C1.5 14.325 2.172 15.003 3.009 15.0135C4.00639 15.0251 5.00353 15.0531 6 15.0975ZM5.0145 16.56L7.428 21.1155L7.443 21.1515H8.265L8.262 21.1305L7.5975 16.6815C6.73705 16.6296 5.87599 16.5886 5.0145 16.5585V16.56Z" fill="black" />
    </IconBase>
  );
};

export default Icon
