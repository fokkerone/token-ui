

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 2C9.65322 2.00682 7.38358 2.8388 5.58836 4.35031C3.79313 5.86182 2.5867 7.95656 2.18022 10.2679C1.77374 12.5792 2.19311 14.9599 3.36493 16.9932C4.53675 19.0265 6.38636 20.5829 8.59002 21.39H8.65002C10.8141 22.1763 13.1859 22.1763 15.35 21.39H15.41C17.6137 20.5829 19.4633 19.0265 20.6351 16.9932C21.8069 14.9599 22.2263 12.5792 21.8198 10.2679C21.4133 7.95656 20.2069 5.86182 18.4117 4.35031C16.6165 2.8388 14.3468 2.00682 12 2ZM14 19.74C12.6892 20.0868 11.3108 20.0868 10 19.74V16.61C10.6004 16.237 11.2932 16.0393 12 16.0393C12.7069 16.0393 13.3996 16.237 14 16.61V19.74ZM16 18.92V11C16.2652 11 16.5196 10.8946 16.7071 10.7071C16.8947 10.5196 17 10.2652 17 10C17 9.73478 16.8947 9.48043 16.7071 9.29289C16.5196 9.10536 16.2652 9 16 9H14C13.7348 9 13.4804 9.10536 13.2929 9.29289C13.1054 9.48043 13 9.73478 13 10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11V14.39C12.7059 13.9325 11.2941 13.9325 10 14.39V11C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8947 10.5196 11 10.2652 11 10C11 9.73478 10.8947 9.48043 10.7071 9.29289C10.5196 9.10536 10.2652 9 10 9H8.00002C7.7348 9 7.48045 9.10536 7.29291 9.29289C7.10537 9.48043 7.00002 9.73478 7.00002 10C7.00002 10.2652 7.10537 10.5196 7.29291 10.7071C7.48045 10.8946 7.7348 11 8.00002 11V18.92C6.47488 18.0395 5.28291 16.6803 4.60898 15.0533C3.93505 13.4262 3.81681 11.6223 4.27261 9.92124C4.72841 8.22018 5.73277 6.71704 7.12992 5.64497C8.52708 4.5729 10.2389 3.9918 12 3.9918C13.7611 3.9918 15.473 4.5729 16.8701 5.64497C18.2673 6.71704 19.2716 8.22018 19.7274 9.92124C20.1832 11.6223 20.065 13.4262 19.3911 15.0533C18.7171 16.6803 17.5252 18.0395 16 18.92Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon