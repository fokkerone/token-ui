

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 8C12.2652 8.00018 12.5194 8.10559 12.7069 8.29309C12.8944 8.48059 12.9998 8.73484 13 9C13 9.26522 13.1054 9.51957 13.2929 9.70711C13.4804 9.89464 13.7348 10 14 10C14.2652 10 14.5196 9.89464 14.7071 9.70711C14.8946 9.51957 15 9.26522 15 9C14.9997 8.50078 14.8749 8.00952 14.6367 7.57077C14.3986 7.13201 14.0547 6.75963 13.6362 6.48739C13.2178 6.21514 12.738 6.05165 12.2404 6.01172C11.7428 5.97179 11.2431 6.0567 10.7866 6.25874C10.33 6.46079 9.93119 6.77357 9.62614 7.16875C9.32109 7.56392 9.11949 8.02899 9.03963 8.52178C8.95977 9.01456 9.00417 9.51949 9.1688 9.99078C9.33343 10.4621 9.61309 10.8848 9.98242 11.2207C9.99242 11.2298 10.1436 11.3906 10.1758 11.4355C10.289 11.6002 10.3496 11.7953 10.3496 11.9951C10.3496 12.1949 10.289 12.3901 10.1758 12.5547C10.1015 12.6629 10.0493 12.7847 10.0221 12.9131C9.99496 13.0416 9.99334 13.1741 10.0174 13.3031C10.0414 13.4322 10.0906 13.5552 10.1622 13.6652C10.2338 13.7752 10.3263 13.8701 10.4346 13.9443C10.5428 14.0186 10.6646 14.0708 10.793 14.098C10.9214 14.1252 11.054 14.1268 11.183 14.1028C11.312 14.0787 11.4351 14.0295 11.5451 13.9579C11.6551 13.8863 11.75 13.7938 11.8242 13.6855C12.1672 13.1869 12.3505 12.5957 12.3496 11.9905C12.3487 11.3852 12.1638 10.7945 11.8193 10.2969C11.6654 10.1029 11.5014 9.91712 11.3281 9.74023C11.2686 9.68592 11.2155 9.62498 11.1699 9.55859C11.0688 9.40803 11.0105 9.23283 11.0013 9.05171C10.9921 8.8706 11.0322 8.69037 11.1175 8.53031C11.2027 8.37024 11.3298 8.23635 11.4853 8.14294C11.6407 8.04954 11.8186 8.00013 12 8ZM12 2C10.9263 2.00009 9.86707 2.24714 8.90414 2.72204C7.9412 3.19694 7.10041 3.88696 6.44677 4.73874C5.79314 5.59053 5.34419 6.58124 5.13463 7.63426C4.92508 8.68728 4.96054 9.77439 5.23828 10.8115C5.30772 11.0668 5.47548 11.2841 5.70481 11.4159C5.93414 11.5477 6.20636 11.5833 6.46186 11.5148C6.71737 11.4464 6.93533 11.2795 7.06804 11.0507C7.20075 10.8218 7.23738 10.5498 7.16992 10.294C6.98576 9.60651 6.9505 8.88763 7.06648 8.18542C7.18245 7.4832 7.44701 6.81384 7.84245 6.22208C8.23789 5.63032 8.7551 5.1298 9.35951 4.75398C9.96393 4.37815 10.6416 4.1357 11.3472 4.04281C12.0529 3.94992 12.7702 4.00874 13.4513 4.21535C14.1324 4.42195 14.7615 4.77157 15.2966 5.24084C15.8317 5.7101 16.2605 6.2882 16.5542 6.93648C16.848 7.58475 17 8.28827 17 9C16.9958 9.90303 16.7525 10.7888 16.2949 11.5674L12.7315 19C12.5556 19.3036 12.3031 19.5558 11.9993 19.7313C11.6955 19.9068 11.3509 19.9994 11 20C10.4717 19.993 9.96709 19.7801 9.59352 19.4065C9.21995 19.0329 9.00699 18.5283 9 18C8.99999 17.6492 9.09263 17.3045 9.26855 17.001C9.40142 16.7713 9.43759 16.4982 9.3691 16.2418C9.30061 15.9854 9.13307 15.7667 8.90334 15.6338C8.67361 15.5009 8.4005 15.4647 8.1441 15.5332C7.8877 15.6017 7.669 15.7693 7.53613 15.999C7.27151 16.4565 7.10022 16.962 7.03215 17.4861C6.96409 18.0102 7.00061 18.5427 7.13959 19.0526C7.27858 19.5625 7.51728 20.0399 7.84189 20.457C8.1665 20.8741 8.57058 21.2227 9.03076 21.4827C9.49094 21.7427 9.99809 21.9088 10.5229 21.9716C11.0477 22.0343 11.5797 21.9924 12.0882 21.8483C12.5967 21.7041 13.0716 21.4606 13.4854 21.1318C13.8992 20.803 14.2437 20.3954 14.499 19.9326L18.0625 12.5C18.6768 11.4358 19.0001 10.2287 19 8.99998C18.9999 7.77125 18.6764 6.56418 18.062 5.50008C17.4476 4.43598 16.564 3.55234 15.4999 2.93795C14.4358 2.32356 13.2287 2.00008 12 2Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
