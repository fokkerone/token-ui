

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.6875 3.675C1.56616 3.47065 1.50144 3.23766 1.5 3C1.5 2.61 1.674 2.289 1.887 2.049C2.10844 1.81214 2.36867 1.61481 2.6565 1.4655C3.237 1.1505 4.026 0.888 4.9365 0.678C6.771 0.255 9.27 0 12 0C14.7315 0 17.229 0.255 19.0635 0.678C19.974 0.888 20.763 1.149 21.3435 1.4655C21.633 1.6245 21.9045 1.815 22.113 2.049C22.3245 2.289 22.5 2.61 22.5 3C22.5 4.5165 21.975 5.418 21.549 6.153C21.489 6.258 21.429 6.3585 21.375 6.4575C21.1503 6.83222 20.9915 7.24265 20.9055 7.671C20.8321 8.11307 20.8265 8.56375 20.889 9.0075C21.0454 8.98355 21.2055 9.00971 21.3461 9.08223C21.4868 9.15475 21.6009 9.26992 21.6722 9.41125C21.7434 9.55258 21.7682 9.71282 21.7428 9.86905C21.7174 10.0253 21.6433 10.1695 21.531 10.281C21.441 10.371 21.3315 10.47 21.2085 10.5735C21.5145 12.2475 21.3405 13.5585 20.7585 14.64C20.079 15.9 18.912 16.7145 17.7285 17.424C17.4225 17.6085 17.1105 17.7885 16.7985 17.97C14.6325 19.218 12.4065 20.5035 11.196 23.529C11.1542 23.6335 11.0894 23.7273 11.0064 23.8034C10.9234 23.8795 10.8243 23.9359 10.7166 23.9684C10.6088 24.001 10.4951 24.0089 10.3838 23.9915C10.2726 23.9741 10.1667 23.9319 10.074 23.868L10.0725 23.8665L10.0695 23.865L10.0635 23.8605L10.0485 23.8485C9.97253 23.7942 9.89896 23.7367 9.828 23.676C9.03909 23.0098 8.43085 22.1555 8.0595 21.192C7.82318 20.5707 7.69777 19.9127 7.689 19.248C7.56695 19.1109 7.49966 18.9336 7.5 18.75V18.723C7.50146 18.6833 7.50547 18.6437 7.512 18.6045C7.54566 18.3875 7.64393 18.1858 7.794 18.0255C7.929 17.292 8.202 16.5045 8.6535 15.6645C8.52279 15.5965 8.415 15.4915 8.34361 15.3626C8.27221 15.2337 8.24036 15.0866 8.25204 14.9397C8.26372 14.7928 8.31841 14.6526 8.40928 14.5366C8.50015 14.4207 8.62318 14.334 8.763 14.2875C9.06383 14.1859 9.37377 14.1136 9.6885 14.0715L9.9135 13.782C10.341 13.248 10.5195 12.8235 10.569 12.4905C10.6158 12.1692 10.5512 11.8415 10.386 11.562C10.0125 10.8795 9.1635 10.2075 7.9665 9.417C7.677 9.2265 7.3695 9.03 7.053 8.826L6.8745 8.712C6.2457 8.57753 5.62435 8.41031 5.013 8.211C4.90977 8.1767 4.81523 8.12036 4.73595 8.04587C4.65667 7.97139 4.59454 7.88056 4.55387 7.77966C4.5132 7.67877 4.49496 7.57024 4.50043 7.4616C4.50589 7.35296 4.53492 7.2468 4.5855 7.1505L4.2405 6.8805C3.1755 6.015 2.1945 4.98 1.6875 3.675ZM4.647 5.2515C4.8165 5.4075 4.9965 5.562 5.184 5.7135C5.892 6.285 6.669 6.7965 7.4565 7.3035C9.7665 7.779 12.9045 8.0535 15.6015 7.5135C15.6981 7.4941 15.7976 7.49392 15.8943 7.51296C15.991 7.53201 16.083 7.56992 16.165 7.62452C16.2471 7.67912 16.3176 7.74935 16.3725 7.83119C16.4274 7.91303 16.4656 8.00488 16.485 8.1015C16.5044 8.19812 16.5046 8.29762 16.4855 8.39431C16.4665 8.491 16.4286 8.58299 16.374 8.66503C16.3194 8.74707 16.2492 8.81755 16.1673 8.87245C16.0855 8.92735 15.9936 8.9656 15.897 8.985C14.073 9.351 12.0915 9.375 10.2585 9.2205C10.857 9.7095 11.3745 10.2435 11.703 10.842C12.0075 11.4015 12.156 12.027 12.0525 12.7125C11.9775 13.2075 11.7795 13.698 11.4675 14.19C11.58 14.2155 11.6895 14.2425 11.7975 14.2695L11.8065 14.2725C12.528 14.4525 13.101 14.592 14.0115 14.2875C14.2005 14.2244 14.4067 14.239 14.5849 14.3281C14.7632 14.4171 14.8987 14.5733 14.9618 14.7623C15.0248 14.9512 15.0102 15.1575 14.9212 15.3357C14.8321 15.5139 14.676 15.6494 14.487 15.7125C13.155 16.155 12.2295 15.924 11.4525 15.7305L11.4435 15.7275C11.1273 15.639 10.8041 15.5772 10.4775 15.543C9.9225 16.368 9.5805 17.118 9.3885 17.7885C9.6015 17.856 9.8325 17.9535 10.086 18.0795C10.1748 18.1232 10.2541 18.184 10.3194 18.2584C10.3846 18.3329 10.4344 18.4195 10.466 18.5133C10.4976 18.6071 10.5103 18.7063 10.5034 18.805C10.4964 18.9037 10.4701 19.0001 10.4257 19.0886C10.3814 19.1771 10.3199 19.2559 10.245 19.3206C10.17 19.3852 10.083 19.4344 9.98897 19.4652C9.89492 19.4961 9.7957 19.508 9.69701 19.5003C9.59833 19.4927 9.50214 19.4655 9.414 19.4205C9.34093 19.3836 9.26691 19.3485 9.192 19.3155C9.21 19.833 9.318 20.28 9.462 20.658C9.672 21.2115 9.975 21.657 10.254 21.987C11.742 19.1325 14.1285 17.766 16.0815 16.647C16.386 16.473 16.68 16.305 16.9575 16.137C18.12 15.441 18.9675 14.802 19.437 13.929C19.755 13.3395 19.932 12.579 19.827 11.5035C18.3473 12.3154 16.6878 12.7439 15 12.75C14.8011 12.75 14.6103 12.671 14.4697 12.5303C14.329 12.3897 14.25 12.1989 14.25 12C14.25 11.8011 14.329 11.6103 14.4697 11.4697C14.6103 11.329 14.8011 11.25 15 11.25C16.6005 11.2416 18.1673 10.7888 19.5255 9.942C19.5216 9.92711 19.5181 9.9121 19.515 9.897C19.3125 8.8875 19.305 8.0865 19.431 7.3995C19.557 6.7095 19.8105 6.1845 20.0625 5.73L20.259 5.385C20.3565 5.217 20.448 5.055 20.532 4.8945C20.097 5.055 19.602 5.1975 19.062 5.322C17.2305 5.745 14.733 6 12 6C9.2685 6 6.771 5.745 4.9365 5.322C4.839 5.2995 4.7415 5.277 4.647 5.2515ZM20.946 3C20.8478 2.91535 20.74 2.84237 20.625 2.7825C20.217 2.5605 19.5795 2.337 18.726 2.1405C17.031 1.749 14.6535 1.5 12 1.5C9.3465 1.5 6.969 1.749 5.274 2.1405C4.4205 2.3355 3.783 2.5605 3.375 2.7825C3.25996 2.84237 3.15225 2.91535 3.054 3C3.114 3.057 3.2175 3.1305 3.375 3.2175C3.783 3.4395 4.4205 3.663 5.274 3.8595C6.969 4.251 9.3465 4.5 12 4.5C14.6535 4.5 17.031 4.251 18.726 3.8595C19.5795 3.6645 20.217 3.4395 20.625 3.2175C20.74 3.15763 20.8478 3.08465 20.946 3Z" fill="black" />
    </IconBase>
  );
};

export default Icon