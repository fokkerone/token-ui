

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M20.47 9C20.6678 9 20.8611 8.94135 21.0256 8.83147C21.19 8.72159 21.3182 8.56541 21.3939 8.38268C21.4696 8.19996 21.4894 7.99889 21.4508 7.80491C21.4122 7.61093 21.317 7.43274 21.1771 7.29289C21.0373 7.15304 20.8591 7.0578 20.6651 7.01921C20.4711 6.98063 20.27 7.00043 20.0873 7.07612C19.9046 7.15181 19.7484 7.27998 19.6385 7.44443C19.5287 7.60888 19.47 7.80222 19.47 8C19.47 8.26521 19.5754 8.51957 19.7629 8.7071C19.9504 8.89464 20.2048 9 20.47 9ZM17.47 9C17.6678 9 17.8611 8.94135 18.0256 8.83147C18.19 8.72159 18.3182 8.56541 18.3939 8.38268C18.4696 8.19996 18.4894 7.99889 18.4508 7.80491C18.4122 7.61093 18.317 7.43274 18.1771 7.29289C18.0373 7.15304 17.8591 7.0578 17.6651 7.01921C17.4711 6.98063 17.27 7.00043 17.0873 7.07612C16.9046 7.15181 16.7484 7.27998 16.6385 7.44443C16.5287 7.60888 16.47 7.80222 16.47 8C16.47 8.26521 16.5754 8.51957 16.7629 8.7071C16.9504 8.89464 17.2048 9 17.47 9ZM14.47 9C14.6678 9 14.8611 8.94135 15.0256 8.83147C15.19 8.72159 15.3182 8.56541 15.3939 8.38268C15.4696 8.19996 15.4894 7.99889 15.4508 7.80491C15.4122 7.61093 15.317 7.43274 15.1771 7.29289C15.0373 7.15304 14.8591 7.0578 14.6651 7.01921C14.4711 6.98063 14.27 7.00043 14.0873 7.07612C13.9046 7.15181 13.7484 7.27998 13.6385 7.44443C13.5287 7.60888 13.47 7.80222 13.47 8C13.47 8.13132 13.4959 8.26136 13.5461 8.38268C13.5964 8.50401 13.67 8.61425 13.7629 8.7071C13.8558 8.79996 13.966 8.87362 14.0873 8.92388C14.2086 8.97413 14.3387 9 14.47 9ZM18.91 13C18.69 13 18.46 12.93 18.24 12.88C17.7945 12.7818 17.3567 12.6515 16.93 12.49C16.4661 12.3212 15.9562 12.33 15.4983 12.5146C15.0405 12.6992 14.6671 13.0466 14.45 13.49L14.23 13.94C13.2545 13.3958 12.3565 12.7231 11.56 11.94C10.7807 11.1439 10.1084 10.2497 9.56 9.28L10 9C10.4434 8.78291 10.7908 8.40953 10.9754 7.95169C11.16 7.49385 11.1688 6.98391 11 6.52C10.8412 6.09242 10.7109 5.6548 10.61 5.21C10.56 4.98 10.52 4.76 10.49 4.53C10.3686 3.82562 9.99963 3.18774 9.44962 2.73124C8.89962 2.27473 8.2047 2.02961 7.49 2.04H4.49C4.06725 2.03944 3.64915 2.12825 3.26312 2.30058C2.87709 2.47292 2.53184 2.7249 2.25 3.04C1.96369 3.36249 1.75027 3.74293 1.6243 4.15537C1.49832 4.56781 1.46275 5.00256 1.52 5.43C2.04671 9.61704 3.95238 13.5096 6.9364 16.4936C9.92042 19.4776 13.813 21.3833 18 21.91C18.1298 21.9199 18.2602 21.9199 18.39 21.91C19.1856 21.91 19.9487 21.5939 20.5113 21.0313C21.0739 20.4687 21.39 19.7056 21.39 18.91V15.91C21.3796 15.2122 21.1263 14.5399 20.6736 14.0087C20.221 13.4776 19.5973 13.1209 18.91 13ZM19.4 19C19.4016 19.145 19.3717 19.2885 19.3124 19.4208C19.253 19.553 19.1656 19.6708 19.0562 19.7659C18.9469 19.861 18.8181 19.9313 18.6789 19.9717C18.5397 20.0121 18.3933 20.0218 18.25 20C14.5162 19.5128 11.0471 17.8081 8.38 15.15C5.715 12.4648 4.01324 8.97344 3.54 5.22C3.51828 5.07333 3.52944 4.92367 3.57268 4.78185C3.61591 4.64003 3.69015 4.5096 3.79 4.4C3.88259 4.29458 3.99633 4.20983 4.12382 4.15126C4.25131 4.09268 4.38971 4.06159 4.53 4.06H7.53C7.76255 4.05482 7.98963 4.13088 8.17215 4.27507C8.35467 4.41926 8.48121 4.62257 8.53 4.85C8.57 5.12333 8.62 5.39333 8.68 5.66C8.79552 6.18714 8.94926 6.70518 9.14 7.21L7.74 7.86C7.6203 7.91492 7.51262 7.99294 7.42316 8.08959C7.33369 8.18624 7.2642 8.29961 7.21867 8.42319C7.17314 8.54677 7.15247 8.67813 7.15785 8.80972C7.16323 8.94131 7.19454 9.07054 7.25 9.19C8.6892 12.2728 11.1672 14.7508 14.25 16.19C14.4935 16.29 14.7665 16.29 15.01 16.19C15.2582 16.0976 15.4595 15.9106 15.57 15.67L16.2 14.27C16.717 14.4549 17.2446 14.6085 17.78 14.73C18.04 14.79 18.32 14.84 18.59 14.88C18.8156 14.9308 19.0166 15.0582 19.1588 15.2405C19.301 15.4229 19.3757 15.6488 19.37 15.88L19.4 19Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
