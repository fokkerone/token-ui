

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11 7.00002V9.00002C11 9.26524 11.1054 9.51959 11.2929 9.70713C11.4804 9.89467 11.7348 10 12 10C12.2652 10 12.5196 9.89467 12.7071 9.70713C12.8946 9.51959 13 9.26524 13 9.00002V8.00002H15.78L14 16.8C13.971 16.9315 13.9688 17.0676 13.9936 17.2C14.0184 17.3323 14.0697 17.4583 14.1444 17.5704C14.2191 17.6825 14.3157 17.7783 14.4284 17.8521C14.541 17.926 14.6674 17.9763 14.8 18H15C15.234 18.0047 15.4621 17.9273 15.6449 17.7811C15.8276 17.6349 15.9533 17.4293 16 17.2L18 7.20002C18.0286 7.05476 18.0246 6.90495 17.9883 6.76141C17.952 6.61788 17.8843 6.4842 17.79 6.37002C17.6948 6.25268 17.5743 6.15842 17.4375 6.09434C17.3007 6.03025 17.1511 5.99801 17 6.00002H12C11.7348 6.00002 11.4804 6.10538 11.2929 6.29292C11.1054 6.48045 11 6.73481 11 7.00002ZM18 5.00002H19V6.00002C19 6.26524 19.1054 6.51959 19.2929 6.70713C19.4804 6.89467 19.7348 7.00002 20 7.00002C20.2652 7.00002 20.5196 6.89467 20.7071 6.70713C20.8946 6.51959 21 6.26524 21 6.00002V5.00002H22C22.2652 5.00002 22.5196 4.89467 22.7071 4.70713C22.8946 4.51959 23 4.26524 23 4.00002C23 3.73481 22.8946 3.48045 22.7071 3.29292C22.5196 3.10538 22.2652 3.00002 22 3.00002H21V2.00002C21 1.73481 20.8946 1.48045 20.7071 1.29292C20.5196 1.10538 20.2652 1.00002 20 1.00002C19.7348 1.00002 19.4804 1.10538 19.2929 1.29292C19.1054 1.48045 19 1.73481 19 2.00002V3.00002H18C17.7348 3.00002 17.4804 3.10538 17.2929 3.29292C17.1054 3.48045 17 3.73481 17 4.00002C17 4.26524 17.1054 4.51959 17.2929 4.70713C17.4804 4.89467 17.7348 5.00002 18 5.00002ZM7 7.00002V17C7 17.2652 7.10536 17.5196 7.2929 17.7071C7.48043 17.8947 7.73479 18 8 18C8.26522 18 8.51958 17.8947 8.70711 17.7071C8.89465 17.5196 9 17.2652 9 17V7.00002C9 6.73481 8.89465 6.48045 8.70711 6.29292C8.51958 6.10538 8.26522 6.00002 8 6.00002C7.73479 6.00002 7.48043 6.10538 7.2929 6.29292C7.10536 6.48045 7 6.73481 7 7.00002ZM21.6 9.00002C21.4713 9.02626 21.349 9.0776 21.2402 9.15111C21.1313 9.22462 21.038 9.31886 20.9656 9.42843C20.8931 9.53801 20.843 9.66079 20.818 9.78975C20.793 9.91871 20.7937 10.0513 20.82 10.18C21.2104 12.0762 20.979 14.0478 20.1601 15.8021C19.3412 17.5563 17.9785 18.9997 16.2741 19.9181C14.5698 20.8364 12.6148 21.1807 10.6993 20.8999C8.78381 20.619 7.00992 19.728 5.64097 18.3591C4.27202 16.9901 3.38099 15.2162 3.10014 13.3007C2.81929 11.3852 3.16359 9.4302 4.08194 7.72589C5.00028 6.02158 6.44372 4.65882 8.19798 3.83991C9.95224 3.021 11.9238 2.78958 13.82 3.18002C14.0852 3.23307 14.3606 3.17858 14.5857 3.02855C14.8107 2.87852 14.967 2.64524 15.02 2.38002C15.073 2.11481 15.0186 1.83938 14.8685 1.61434C14.7185 1.38929 14.4852 1.23307 14.22 1.18002C13.4882 1.04367 12.7442 0.983353 12 1.00002C9.82441 1.00002 7.69767 1.64516 5.88873 2.85386C4.07979 4.06255 2.66989 5.78052 1.83733 7.7905C1.00477 9.80049 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3024 23 14.1756 23 12C23.0021 11.2611 22.9284 10.5239 22.78 9.80002C22.7561 9.66952 22.7064 9.54508 22.6338 9.43397C22.5613 9.32286 22.4674 9.22729 22.3576 9.15283C22.2478 9.07838 22.1242 9.02652 21.9942 9.00028C21.8641 8.97405 21.7301 8.97396 21.6 9.00002Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
