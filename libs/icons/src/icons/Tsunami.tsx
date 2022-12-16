

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0.0539114 18.471C0.127942 18.2864 0.272238 18.1388 0.455074 18.0606C0.63791 17.9824 0.844317 17.98 1.02891 18.054L3.66441 19.1085C4.20076 19.323 4.79906 19.323 5.33541 19.1085L6.85641 18.4995C7.75047 18.1419 8.74785 18.1419 9.64191 18.4995L11.1644 19.1085C11.7008 19.323 12.2991 19.323 12.8354 19.1085L14.3564 18.4995C15.2505 18.1419 16.2479 18.1419 17.1419 18.4995L18.6644 19.1085C19.2008 19.323 19.7991 19.323 20.3354 19.1085L22.9709 18.054C23.0628 18.0149 23.1615 17.9946 23.2613 17.9942C23.3611 17.9938 23.46 18.0133 23.5521 18.0516C23.6443 18.0899 23.7279 18.1462 23.798 18.2172C23.8681 18.2882 23.9234 18.3725 23.9605 18.4651C23.9977 18.5578 24.0159 18.6569 24.0143 18.7567C24.0126 18.8565 23.9911 18.9549 23.9509 19.0463C23.9107 19.1376 23.8526 19.22 23.7802 19.2887C23.7077 19.3573 23.6223 19.4108 23.5289 19.446L20.8919 20.5005C19.9979 20.8581 19.0005 20.8581 18.1064 20.5005L16.5854 19.8915C16.0491 19.677 15.4508 19.677 14.9144 19.8915L13.3919 20.5005C12.4979 20.8581 11.5005 20.8581 10.6064 20.5005L9.08541 19.8915C8.54906 19.677 7.95076 19.677 7.41441 19.8915L5.89191 20.5005C4.99785 20.8581 4.00047 20.8581 3.10641 20.5005L0.470911 19.446C0.286349 19.372 0.138742 19.2277 0.060544 19.0448C-0.0176535 18.862 -0.0200392 18.6556 0.0539114 18.471ZM0.0539114 21.471C0.127942 21.2864 0.272238 21.1388 0.455074 21.0606C0.63791 20.9824 0.844317 20.98 1.02891 21.054L3.66441 22.1085C4.20076 22.323 4.79906 22.323 5.33541 22.1085L6.85641 21.4995C7.75047 21.1419 8.74785 21.1419 9.64191 21.4995L11.1644 22.1085C11.7008 22.323 12.2991 22.323 12.8354 22.1085L14.3564 21.4995C15.2505 21.1419 16.2479 21.1419 17.1419 21.4995L18.6644 22.1085C19.2008 22.323 19.7991 22.323 20.3354 22.1085L22.9709 21.054C23.0628 21.0149 23.1615 20.9946 23.2613 20.9942C23.3611 20.9938 23.46 21.0133 23.5521 21.0516C23.6443 21.0899 23.7279 21.1462 23.798 21.2172C23.8681 21.2882 23.9234 21.3725 23.9605 21.4651C23.9977 21.5578 24.0159 21.6569 24.0143 21.7567C24.0126 21.8565 23.9911 21.9549 23.9509 22.0463C23.9107 22.1376 23.8526 22.22 23.7802 22.2887C23.7077 22.3573 23.6223 22.4108 23.5289 22.446L20.8919 23.5005C19.9979 23.8581 19.0005 23.8581 18.1064 23.5005L16.5854 22.8915C16.0491 22.677 15.4508 22.677 14.9144 22.8915L13.3919 23.5005C12.4979 23.8581 11.5005 23.8581 10.6064 23.5005L9.08541 22.8915C8.54906 22.677 7.95076 22.677 7.41441 22.8915L5.89191 23.5005C4.99785 23.8581 4.00047 23.8581 3.10641 23.5005L0.470911 22.446C0.286349 22.372 0.138742 22.2277 0.060544 22.0448C-0.0176535 21.862 -0.0200392 21.6556 0.0539114 21.471ZM3.99291 12.12C3.30891 13.7145 2.50191 15.267 1.22991 16.326C1.07653 16.4477 0.881643 16.5046 0.686879 16.4845C0.492114 16.4645 0.312919 16.369 0.187573 16.2186C0.0622284 16.0682 0.000673303 15.8747 0.0160584 15.6795C0.0314436 15.4844 0.122549 15.3029 0.269911 15.174C1.24791 14.358 1.94091 13.098 2.61591 11.529C2.82591 11.037 3.03741 10.509 3.25641 9.963C3.70941 8.832 4.19241 7.6245 4.77141 6.501C5.64441 4.8 6.79191 3.1575 8.54991 1.9485C10.3154 0.735 12.6269 0 15.7499 0C17.9444 0 19.5164 0.6 20.5184 1.587C21.5234 2.577 21.8579 3.864 21.7469 5.04C21.6359 6.1965 21.0854 7.314 20.2169 7.9875C19.8216 8.30614 19.3474 8.512 18.8447 8.58329C18.3419 8.65459 17.8293 8.58866 17.3609 8.3925C16.3859 9.3555 16.0004 10.911 16.2959 12.3135C16.6139 13.8225 17.6759 15 19.4999 15H23.2499C23.4488 15 23.6396 15.079 23.7802 15.2197C23.9209 15.3603 23.9999 15.5511 23.9999 15.75C23.9999 15.9489 23.9209 16.1397 23.7802 16.2803C23.6396 16.421 23.4488 16.5 23.2499 16.5H19.4999C16.8239 16.5 15.2609 14.6775 14.8289 12.6225C14.4809 10.9725 14.8364 9.063 15.9659 7.6965L15.7499 7.59L14.5844 8.172C14.4803 8.22402 14.3655 8.2511 14.2492 8.2511C14.1328 8.2511 14.018 8.22402 13.9139 8.172L12.4139 7.422C12.2424 7.32949 12.1136 7.17384 12.0548 6.98801C11.996 6.80219 12.0119 6.60078 12.0991 6.42645C12.1862 6.25213 12.3378 6.11859 12.5218 6.0541C12.7057 5.98962 12.9075 5.99927 13.0844 6.081L14.2499 6.663L15.4139 6.081C15.518 6.02898 15.6328 6.0019 15.7492 6.0019C15.8655 6.0019 15.9803 6.02898 16.0844 6.081L17.5844 6.831C17.6018 6.83933 17.6188 6.84834 17.6354 6.858C18.2954 7.254 18.8504 7.1505 19.2974 6.804C19.7894 6.4215 20.1764 5.7105 20.2529 4.899C20.3279 4.1055 20.1029 3.285 19.4654 2.6565C18.8264 2.0265 17.6804 1.5015 15.7499 1.5015C12.8729 1.5015 10.8719 2.1735 9.40191 3.186C7.92441 4.2 6.91491 5.607 6.10491 7.185C5.55741 8.25 5.12241 9.3345 4.68741 10.425C4.46241 10.989 4.23591 11.5545 3.99291 12.12Z" fill="black" />
    </IconBase>
  );
};

export default Icon