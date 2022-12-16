

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.76002 10.59C5.02523 10.6245 5.29328 10.5522 5.5052 10.389C5.71712 10.2258 5.85554 9.98519 5.89002 9.71998C5.92449 9.45476 5.8522 9.18671 5.68905 8.97479C5.52589 8.76288 5.28523 8.62445 5.02002 8.58998L3.26002 8.14998C3.1317 8.11064 2.99679 8.09753 2.8633 8.11144C2.72982 8.12535 2.6005 8.16598 2.48305 8.23092C2.3656 8.29586 2.26242 8.38378 2.17966 8.48943C2.09691 8.59509 2.03627 8.71632 2.00135 8.8459C1.96644 8.97549 1.95796 9.11078 1.97644 9.24371C1.99491 9.37664 2.03995 9.50449 2.10888 9.61965C2.17781 9.7348 2.26921 9.8349 2.37764 9.91399C2.48607 9.99307 2.60931 10.0495 2.74002 10.08L4.50002 10.55C4.58379 10.5779 4.67171 10.5915 4.76002 10.59ZM8.62002 4.99998C8.67862 5.21814 8.80936 5.41003 8.99094 5.5444C9.17252 5.67878 9.39425 5.74771 9.62002 5.73998C9.70613 5.7538 9.7939 5.7538 9.88002 5.73998C10.1338 5.66976 10.3497 5.50226 10.4808 5.27384C10.6118 5.04543 10.6475 4.77453 10.58 4.51998L10.11 2.75998C10.0796 2.62927 10.0231 2.50603 9.94403 2.3976C9.86494 2.28917 9.76484 2.19777 9.64969 2.12884C9.53453 2.05991 9.40668 2.01487 9.27375 1.9964C9.14082 1.97792 9.00553 1.9864 8.87595 2.02131C8.74636 2.05622 8.62513 2.11687 8.51947 2.19962C8.41382 2.28238 8.3259 2.38555 8.26096 2.503C8.19602 2.62045 8.15539 2.74977 8.14148 2.88326C8.12758 3.01674 8.14068 3.15166 8.18002 3.27998L8.62002 4.99998ZM13.45 15C13.3566 14.9016 13.2441 14.8233 13.1195 14.7698C12.9949 14.7163 12.8607 14.6887 12.725 14.6887C12.5894 14.6887 12.4552 14.7163 12.3305 14.7698C12.2059 14.8233 12.0934 14.9016 12 15L8.50002 18.56C8.0885 18.9548 7.5403 19.1752 6.97002 19.1752C6.39974 19.1752 5.85153 18.9548 5.44002 18.56C5.23744 18.36 5.0766 18.1218 4.96682 17.8591C4.85704 17.5965 4.80051 17.3146 4.80051 17.03C4.80051 16.7453 4.85704 16.4635 4.96682 16.2008C5.0766 15.9382 5.23744 15.7 5.44002 15.5L9.00002 12C9.1047 11.9103 9.18972 11.8 9.24974 11.6759C9.30977 11.5519 9.3435 11.4167 9.34882 11.279C9.35414 11.1413 9.33093 11.004 9.28065 10.8757C9.23038 10.7473 9.15412 10.6308 9.05667 10.5333C8.95921 10.4359 8.84267 10.3596 8.71434 10.3093C8.58602 10.2591 8.44868 10.2359 8.31096 10.2412C8.17324 10.2465 8.03811 10.2802 7.91405 10.3402C7.78998 10.4003 7.67966 10.4853 7.59002 10.59L4.00002 14.08C3.6113 14.4687 3.30296 14.9302 3.09259 15.438C2.88222 15.9459 2.77394 16.4903 2.77394 17.04C2.77394 17.5897 2.88222 18.134 3.09259 18.6419C3.30296 19.1498 3.6113 19.6113 4.00002 20C4.38873 20.3887 4.8502 20.697 5.35808 20.9074C5.86595 21.1178 6.41029 21.226 6.96002 21.226C7.50974 21.226 8.05408 21.1178 8.56196 20.9074C9.06984 20.697 9.5313 20.3887 9.92002 20L13.45 16.47C13.5515 16.3763 13.6325 16.2627 13.6879 16.1362C13.7433 16.0097 13.7719 15.8731 13.7719 15.735C13.7719 15.5969 13.7433 15.4603 13.6879 15.3338C13.6325 15.2073 13.5515 15.0936 13.45 15ZM5.18002 6.58998C5.36628 6.77472 5.61768 6.87887 5.88002 6.87998C6.01162 6.88074 6.14209 6.85551 6.26392 6.80575C6.38576 6.75598 6.49658 6.68266 6.59002 6.58998C6.77627 6.40261 6.88081 6.14916 6.88081 5.88498C6.88081 5.62079 6.77627 5.36734 6.59002 5.17998L5.30002 3.88998C5.10872 3.72615 4.86264 3.64054 4.61096 3.65026C4.35929 3.65999 4.12055 3.76432 3.94245 3.94241C3.76436 4.12051 3.66003 4.35925 3.65031 4.61092C3.64058 4.8626 3.72619 5.10867 3.89002 5.29998L5.18002 6.58998ZM21.26 13.92L19.5 13.45C19.3696 13.4049 19.2312 13.3873 19.0937 13.3983C18.9561 13.4093 18.8223 13.4486 18.7007 13.5138C18.5791 13.5791 18.4723 13.6687 18.387 13.7772C18.3018 13.8858 18.2399 14.0107 18.2053 14.1443C18.1707 14.2779 18.1641 14.4172 18.186 14.5535C18.2078 14.6897 18.2576 14.82 18.3323 14.936C18.4069 15.0521 18.5048 15.1515 18.6197 15.2279C18.7346 15.3043 18.8641 15.3561 19 15.38L20.76 15.85H21.02C21.2852 15.8845 21.5533 15.8122 21.7652 15.649C21.9771 15.4858 22.1155 15.2452 22.15 14.98C22.1845 14.7148 22.1122 14.4467 21.949 14.2348C21.7859 14.0229 21.5452 13.8845 21.28 13.85L21.26 13.92ZM15.38 19C15.3453 18.8732 15.2859 18.7545 15.2053 18.6507C15.1247 18.5469 15.0244 18.46 14.9101 18.395C14.7959 18.33 14.67 18.2881 14.5395 18.2718C14.4091 18.2555 14.2767 18.2651 14.15 18.3C13.8962 18.3702 13.6803 18.5377 13.5493 18.7661C13.4182 18.9945 13.3825 19.2654 13.45 19.52L13.92 21.28C13.9786 21.4981 14.1094 21.69 14.2909 21.8244C14.4725 21.9588 14.6943 22.0277 14.92 22.02C15.0064 22.0298 15.0936 22.0298 15.18 22.02C15.3077 21.9863 15.4274 21.9277 15.5324 21.8476C15.6373 21.7674 15.7253 21.6673 15.7913 21.5529C15.8573 21.4386 15.9 21.3123 15.917 21.1813C15.9339 21.0504 15.9247 20.9174 15.89 20.79L15.38 19ZM18.82 17.43C18.6287 17.2661 18.3826 17.1805 18.131 17.1903C17.8793 17.2 17.6405 17.3043 17.4625 17.4824C17.2844 17.6605 17.18 17.8992 17.1703 18.1509C17.1606 18.4026 17.2462 18.6487 17.41 18.84L18.7 20.13C18.8874 20.3162 19.1408 20.4208 19.405 20.4208C19.6692 20.4208 19.9227 20.3162 20.11 20.13C20.2963 19.9426 20.4008 19.6892 20.4008 19.425C20.4008 19.1608 20.2963 18.9073 20.11 18.72L18.82 17.43ZM21.2 6.99998C21.2156 6.16841 20.9815 5.35128 20.528 4.65408C20.0745 3.95687 19.4225 3.4116 18.656 3.08865C17.8896 2.76571 17.0439 2.67993 16.2282 2.84237C15.4125 3.00482 14.6643 3.40804 14.08 3.99998L10.55 7.55998C10.4555 7.65518 10.3806 7.76808 10.3297 7.89223C10.2788 8.01637 10.2528 8.14933 10.2532 8.28351C10.2537 8.41769 10.2806 8.55047 10.3324 8.67426C10.3842 8.79805 10.4598 8.91042 10.555 9.00498C10.6502 9.09953 10.7631 9.1744 10.8873 9.22532C11.0114 9.27624 11.1444 9.30221 11.2786 9.30174C11.4127 9.30128 11.5455 9.27439 11.6693 9.22261C11.7931 9.17084 11.9055 9.09518 12 8.99998L15.5 5.43998C15.9115 5.04517 16.4597 4.82472 17.03 4.82472C17.6003 4.82472 18.1485 5.04517 18.56 5.43998C18.7626 5.63997 18.9234 5.8782 19.0332 6.14084C19.143 6.40348 19.1995 6.68531 19.1995 6.96998C19.1995 7.25464 19.143 7.53647 19.0332 7.79911C18.9234 8.06176 18.7626 8.29998 18.56 8.49998L15 12C14.8138 12.1873 14.7092 12.4408 14.7092 12.705C14.7092 12.9692 14.8138 13.2226 15 13.41C15.1874 13.5962 15.4408 13.7008 15.705 13.7008C15.9692 13.7008 16.2227 13.5962 16.41 13.41L20 9.91998C20.7654 9.14032 21.196 8.09254 21.2 6.99998Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon