

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5.25002 17.25C4.31053 17.2498 3.38831 16.9975 2.57956 16.5194C1.77081 16.0414 1.10516 15.355 0.652051 14.532C0.198943 13.709 -0.0250208 12.7795 0.00352281 11.8405C0.0320664 10.9014 0.312072 9.98726 0.814329 9.1933C1.31659 8.39934 2.02269 7.75471 2.85899 7.32664C3.69528 6.89857 4.63112 6.70276 5.56888 6.75963C6.50664 6.8165 7.41197 7.12396 8.19041 7.64995C8.96885 8.17593 9.59188 8.90117 9.99452 9.75H21L23.25 12L21 14.25L19.5 12.75L18 14.25L16.5 12.75L15 14.25L13.5 12.75L12 14.25H9.99452C9.56866 15.1478 8.89675 15.9063 8.05688 16.4374C7.21702 16.9684 6.24369 17.2502 5.25002 17.25ZM3.75002 13.5C4.14784 13.5 4.52937 13.342 4.81068 13.0607C5.09198 12.7794 5.25002 12.3978 5.25002 12C5.25002 11.6022 5.09198 11.2206 4.81068 10.9393C4.52937 10.658 4.14784 10.5 3.75002 10.5C3.35219 10.5 2.97066 10.658 2.68936 10.9393C2.40805 11.2206 2.25002 11.6022 2.25002 12C2.25002 12.3978 2.40805 12.7794 2.68936 13.0607C2.97066 13.342 3.35219 13.5 3.75002 13.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon