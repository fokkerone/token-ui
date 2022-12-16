

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.89 18.06C12.6407 17.97 12.3658 17.9826 12.1258 18.0951C11.8858 18.2076 11.7003 18.4108 11.61 18.66L10.88 20.66C10.7899 20.9093 10.8025 21.1842 10.9151 21.4242C11.0276 21.6642 11.2308 21.8498 11.48 21.94C11.589 21.9796 11.704 21.9999 11.82 22C12.0255 21.9999 12.226 21.9365 12.3942 21.8184C12.5624 21.7003 12.6901 21.5333 12.76 21.34L13.49 19.34C13.5801 19.0907 13.5675 18.8158 13.4549 18.5758C13.3424 18.3358 13.1392 18.1503 12.89 18.06ZM8.89 18.06C8.64069 17.97 8.36582 17.9826 8.12581 18.0951C7.88579 18.2076 7.70026 18.4108 7.61 18.66L6.88 20.66C6.78994 20.9093 6.80255 21.1842 6.91505 21.4242C7.02756 21.6642 7.23076 21.8498 7.48 21.94C7.589 21.9796 7.70405 21.9999 7.82 22C8.02551 21.9999 8.22601 21.9365 8.39421 21.8184C8.5624 21.7003 8.69013 21.5333 8.76 21.34L9.49 19.34C9.58006 19.0907 9.56746 18.8158 9.45495 18.5758C9.34244 18.3358 9.13924 18.1503 8.89 18.06ZM8.89 11.06C8.64069 10.97 8.36582 10.9826 8.12581 11.0951C7.88579 11.2076 7.70026 11.4108 7.61 11.66L6.51 14.66C6.45542 14.811 6.43798 14.9729 6.45918 15.132C6.48037 15.2912 6.53957 15.4429 6.63177 15.5743C6.72397 15.7057 6.84645 15.813 6.98887 15.8871C7.13129 15.9612 7.28946 15.9999 7.45 16C7.65551 15.9999 7.85601 15.9365 8.02421 15.8184C8.1924 15.7003 8.32013 15.5333 8.39 15.34L9.49 12.34C9.58006 12.0907 9.56746 11.8158 9.45495 11.5758C9.34244 11.3358 9.13924 11.1503 8.89 11.06ZM12.89 11.06C12.6407 10.97 12.3658 10.9826 12.1258 11.0951C11.8858 11.2076 11.7003 11.4108 11.61 11.66L10.51 14.66C10.4554 14.811 10.438 14.9729 10.4592 15.132C10.4804 15.2912 10.5396 15.4429 10.6318 15.5743C10.724 15.7057 10.8465 15.813 10.9889 15.8871C11.1313 15.9612 11.2895 15.9999 11.45 16C11.6555 15.9999 11.856 15.9365 12.0242 15.8184C12.1924 15.7003 12.3201 15.5333 12.39 15.34L13.49 12.34C13.5801 12.0907 13.5675 11.8158 13.4549 11.5758C13.3424 11.3358 13.1392 11.1503 12.89 11.06ZM18.42 6.22002C17.809 4.81602 16.7545 3.65109 15.4181 2.90374C14.0817 2.15639 12.5371 1.86785 11.021 2.08233C9.50488 2.2968 8.10093 3.00247 7.02426 4.09119C5.94759 5.17991 5.25759 6.59163 5.06 8.11002C4.18742 8.32098 3.41116 8.81934 2.85613 9.52493C2.3011 10.2305 1.99955 11.1023 2 12C1.99822 12.5664 2.11675 13.1268 2.34775 13.644C2.57876 14.1611 2.91697 14.6233 3.34 15C3.43736 15.0935 3.55264 15.1664 3.6789 15.2141C3.80516 15.2619 3.93978 15.2836 4.07465 15.2779C4.20953 15.2723 4.34186 15.2394 4.46367 15.1812C4.58548 15.123 4.69426 15.0408 4.78344 14.9394C4.87262 14.8381 4.94035 14.7198 4.98257 14.5915C5.02478 14.4633 5.0406 14.3279 5.02907 14.1934C5.01753 14.0589 4.97889 13.9281 4.91546 13.8089C4.85203 13.6898 4.76513 13.5847 4.66 13.5C4.4503 13.3108 4.28307 13.0793 4.16931 12.8207C4.05555 12.5622 3.99785 12.2825 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.26522 10 6.51957 9.89466 6.70711 9.70712C6.89464 9.51959 7 9.26523 7 9.00002C7.00256 7.81729 7.42429 6.67377 8.19027 5.7726C8.95625 4.87143 10.0169 4.27097 11.1838 4.07789C12.3506 3.88481 13.5481 4.11162 14.5636 4.71803C15.579 5.32443 16.3466 6.27116 16.73 7.39002C16.7872 7.56186 16.8899 7.71495 17.0273 7.83295C17.1647 7.95095 17.3315 8.02943 17.51 8.06002C18.2042 8.17976 18.8341 8.53995 19.2893 9.07748C19.7446 9.61502 19.9962 10.2956 20 11C20.0153 11.7363 19.7509 12.451 19.26 13C19.1003 13.1988 19.0227 13.4511 19.0428 13.7053C19.063 13.9595 19.1795 14.1963 19.3685 14.3675C19.5575 14.5386 19.8048 14.6311 20.0597 14.626C20.3146 14.6209 20.558 14.5186 20.74 14.34C21.2908 13.7106 21.6749 12.953 21.8571 12.1367C22.0394 11.3204 22.0139 10.4714 21.7831 9.66745C21.5522 8.86352 21.1234 8.13034 20.5359 7.53505C19.9483 6.93975 19.2208 6.50136 18.42 6.26002V6.22002ZM16.89 18.06C16.6407 17.97 16.3658 17.9826 16.1258 18.0951C15.8858 18.2076 15.7003 18.4108 15.61 18.66L14.88 20.66C14.7899 20.9093 14.8025 21.1842 14.9151 21.4242C15.0276 21.6642 15.2308 21.8498 15.48 21.94C15.589 21.9796 15.704 21.9999 15.82 22C16.0255 21.9999 16.226 21.9365 16.3942 21.8184C16.5624 21.7003 16.6901 21.5333 16.76 21.34L17.49 19.34C17.5801 19.0907 17.5675 18.8158 17.4549 18.5758C17.3424 18.3358 17.1392 18.1503 16.89 18.06ZM16.89 11.06C16.6407 10.97 16.3658 10.9826 16.1258 11.0951C15.8858 11.2076 15.7003 11.4108 15.61 11.66L14.51 14.66C14.4554 14.811 14.438 14.9729 14.4592 15.132C14.4804 15.2912 14.5396 15.4429 14.6318 15.5743C14.724 15.7057 14.8465 15.813 14.9889 15.8871C15.1313 15.9612 15.2895 15.9999 15.45 16C15.6555 15.9999 15.856 15.9365 16.0242 15.8184C16.1924 15.7003 16.3201 15.5333 16.39 15.34L17.49 12.34C17.5801 12.0907 17.5675 11.8158 17.4549 11.5758C17.3424 11.3358 17.1392 11.1503 16.89 11.06Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
