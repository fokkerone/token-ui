

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.84 11.63C17.2405 11.635 17.638 11.5597 18.009 11.4085C18.38 11.2574 18.7169 11.0335 19 10.75L21.83 7.92003C22.0162 7.73267 22.1208 7.47922 22.1208 7.21503C22.1208 6.95085 22.0162 6.6974 21.83 6.51003C21.737 6.41631 21.6264 6.34191 21.5046 6.29114C21.3827 6.24037 21.252 6.21424 21.12 6.21424C20.988 6.21424 20.8573 6.24037 20.7354 6.29114C20.6136 6.34191 20.5029 6.41631 20.41 6.51003L17.55 9.33003C17.457 9.42376 17.3464 9.49816 17.2246 9.54893C17.1027 9.59969 16.972 9.62583 16.84 9.62583C16.708 9.62583 16.5773 9.59969 16.4554 9.54893C16.3336 9.49816 16.2229 9.42376 16.13 9.33003L19.67 5.80003C19.7632 5.7068 19.8372 5.59611 19.8876 5.47428C19.9381 5.35246 19.9641 5.22189 19.9641 5.09003C19.9641 4.95817 19.9381 4.82761 19.8876 4.70579C19.8372 4.58396 19.7632 4.47327 19.67 4.38003C19.5767 4.2868 19.4661 4.21283 19.3442 4.16237C19.2224 4.11191 19.0918 4.08594 18.96 4.08594C18.8281 4.08594 18.6976 4.11191 18.5757 4.16237C18.4539 4.21283 18.3432 4.2868 18.25 4.38003L14.72 7.92003C14.5337 7.73267 14.4292 7.47922 14.4292 7.21503C14.4292 6.95085 14.5337 6.6974 14.72 6.51003L17.55 3.68003C17.6432 3.5868 17.7172 3.47611 17.7676 3.35428C17.8181 3.23246 17.8441 3.10189 17.8441 2.97003C17.8441 2.83817 17.8181 2.70761 17.7676 2.58578C17.7172 2.46396 17.6432 2.35327 17.55 2.26003C17.4567 2.1668 17.3461 2.09283 17.2242 2.04237C17.1024 1.99191 16.9718 1.96594 16.84 1.96594C16.7081 1.96594 16.5776 1.99191 16.4557 2.04237C16.3339 2.09283 16.2232 2.1668 16.13 2.26003L13.3 5.09003C12.7382 5.65254 12.4226 6.41503 12.4226 7.21003C12.4226 8.00504 12.7382 8.76753 13.3 9.33003L12 10.62L3.72999 2.32003L3.62999 2.26003C3.57887 2.21543 3.52162 2.17839 3.45999 2.15003L3.27999 2.08003L3.15999 2.00003H3.08999H2.88999C2.83037 1.9905 2.76961 1.9905 2.70999 2.00003C2.64945 2.02207 2.59224 2.05235 2.53999 2.09003L2.37999 2.19003H2.30999L2.24999 2.29003C2.20766 2.34283 2.17081 2.39979 2.13999 2.46003C2.1107 2.52101 2.08726 2.58463 2.06999 2.65003C2.06999 2.65003 2.06999 2.72003 2.06999 2.76003C1.82732 4.45144 1.98204 6.17613 2.52186 7.79735C3.06169 9.41856 3.97179 10.8917 5.17999 12.1L7.81999 14.73L2.40999 20.13C2.31626 20.223 2.24186 20.3336 2.1911 20.4555C2.14033 20.5773 2.11419 20.708 2.11419 20.84C2.11419 20.972 2.14033 21.1028 2.1911 21.2246C2.24186 21.3465 2.31626 21.4571 2.40999 21.55C2.50343 21.6427 2.61424 21.716 2.73608 21.7658C2.85792 21.8156 2.98838 21.8408 3.11999 21.84C3.25159 21.8408 3.38206 21.8156 3.50389 21.7658C3.62573 21.716 3.73655 21.6427 3.82999 21.55L9.89999 15.57L12.73 12.74L14.73 10.74C15.288 11.304 16.0466 11.624 16.84 11.63ZM9.18999 13.45L6.55999 10.81C5.11844 9.34877 4.21583 7.4413 3.99999 5.40003L10.61 12L9.18999 13.45ZM15.43 14.02C15.2417 13.8304 14.9858 13.7233 14.7185 13.7224C14.4513 13.7215 14.1946 13.8267 14.005 14.015C13.8154 14.2033 13.7083 14.4593 13.7074 14.7265C13.7064 14.9937 13.8117 15.2504 14 15.44L20.3 21.74C20.491 21.9138 20.7418 22.007 21 22C21.1316 22.0008 21.2621 21.9756 21.3839 21.9258C21.5057 21.876 21.6165 21.8027 21.71 21.71C21.8037 21.6171 21.8781 21.5065 21.9289 21.3846C21.9796 21.2628 22.0058 21.132 22.0058 21C22.0058 20.868 21.9796 20.7373 21.9289 20.6155C21.8781 20.4936 21.8037 20.383 21.71 20.29L15.43 14.02Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
