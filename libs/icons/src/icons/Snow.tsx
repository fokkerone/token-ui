

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 24C11.8011 24 11.6103 23.921 11.4697 23.7803C11.329 23.6397 11.25 23.4489 11.25 23.25V21.3105L10.281 22.281C10.1402 22.4216 9.94922 22.5006 9.7502 22.5004C9.55118 22.5003 9.36036 22.4211 9.21973 22.2803C9.0791 22.1394 9.00017 21.9485 9.00031 21.7495C9.00045 21.5504 9.07965 21.3596 9.22048 21.219L11.25 19.1895V13.299L6.14998 16.2435L5.40598 19.0185C5.35426 19.2106 5.22833 19.3744 5.0559 19.4737C4.88346 19.573 4.67863 19.5997 4.48648 19.548C4.29433 19.4963 4.1306 19.3704 4.0313 19.1979C3.932 19.0255 3.90526 18.8206 3.95698 18.6285L4.31248 17.3055L2.63248 18.2745C2.46031 18.3724 2.25642 18.3982 2.06528 18.3463C1.87415 18.2944 1.7113 18.169 1.61228 17.9975C1.51325 17.826 1.48608 17.6223 1.5367 17.4308C1.58733 17.2393 1.71163 17.0757 1.88248 16.9755L3.56248 16.0065L2.23648 15.651C2.14134 15.6254 2.05217 15.5813 1.97407 15.5212C1.89597 15.4612 1.83047 15.3863 1.7813 15.3009C1.73213 15.2155 1.70026 15.1213 1.68751 15.0236C1.67476 14.9259 1.68137 14.8266 1.70698 14.7315C1.73259 14.6364 1.77669 14.5472 1.83675 14.4691C1.89682 14.391 1.97169 14.3255 2.05707 14.2763C2.14245 14.2271 2.23668 14.1953 2.33438 14.1825C2.43208 14.1698 2.53134 14.1764 2.62648 14.202L5.39848 14.9445L10.5 12L5.39998 9.0555L2.62498 9.798C2.43408 9.84558 2.23213 9.81624 2.06266 9.71631C1.89319 9.61638 1.76977 9.45387 1.71901 9.26379C1.66824 9.07371 1.69419 8.8713 1.79127 8.70018C1.88835 8.52906 2.04878 8.40294 2.23798 8.349L3.56248 7.9935L1.88248 7.0245C1.7965 6.97561 1.72103 6.9102 1.66043 6.83203C1.59983 6.75386 1.55529 6.66447 1.52937 6.56902C1.50346 6.47357 1.49668 6.37393 1.50943 6.27584C1.52218 6.17776 1.5542 6.08316 1.60366 5.9975C1.65312 5.91185 1.71903 5.83682 1.7976 5.77674C1.87617 5.71665 1.96585 5.67271 2.06147 5.64743C2.1571 5.62214 2.25678 5.61603 2.35478 5.62943C2.45277 5.64283 2.54715 5.67548 2.63248 5.7255L4.31248 6.6945L3.95698 5.37C3.92969 5.27427 3.92173 5.17406 3.93356 5.07522C3.9454 4.97638 3.97679 4.88088 4.02591 4.79429C4.07503 4.70771 4.1409 4.63177 4.21967 4.5709C4.29844 4.51004 4.38854 4.46546 4.48472 4.43977C4.58089 4.41409 4.68122 4.4078 4.77985 4.42129C4.87848 4.43478 4.97344 4.46776 5.05919 4.51832C5.14494 4.56889 5.21977 4.63602 5.27931 4.71579C5.33885 4.79557 5.38191 4.88641 5.40598 4.983L6.14848 7.7565L11.25 10.701V4.8105L9.22048 2.781C9.15075 2.71137 9.09542 2.62868 9.05764 2.53766C9.01986 2.44664 9.00038 2.34908 9.00031 2.25053C9.00024 2.15198 9.01959 2.05439 9.05723 1.96332C9.09488 1.87225 9.1501 1.78948 9.21973 1.71975C9.28937 1.65002 9.37205 1.59468 9.46307 1.55691C9.55409 1.51913 9.65166 1.49965 9.7502 1.49958C9.84875 1.49951 9.94634 1.51885 10.0374 1.5565C10.1285 1.59415 10.2113 1.64937 10.281 1.719L11.25 2.6895V0.75C11.25 0.551088 11.329 0.360322 11.4697 0.21967C11.6103 0.0790176 11.8011 0 12 0C12.1989 0 12.3897 0.0790176 12.5303 0.21967C12.671 0.360322 12.75 0.551088 12.75 0.75V2.6895L13.7205 1.719C13.8613 1.57837 14.0522 1.49944 14.2513 1.49958C14.4503 1.49972 14.6411 1.57892 14.7817 1.71975C14.9224 1.86058 15.0013 2.05151 15.0011 2.25053C15.001 2.44955 14.9218 2.64037 14.781 2.781L12.75 4.8105V10.701L17.85 7.7565L18.594 4.9815C18.6457 4.78935 18.7716 4.62562 18.9441 4.52632C19.1165 4.42701 19.3213 4.40028 19.5135 4.452C19.7056 4.50372 19.8694 4.62965 19.9687 4.80209C20.068 4.97453 20.0947 5.17935 20.043 5.3715L19.689 6.6945L21.369 5.7255C21.5411 5.62761 21.745 5.6018 21.9362 5.65369C22.1273 5.70558 22.2902 5.83096 22.3892 6.00248C22.4882 6.17399 22.5154 6.37772 22.4648 6.56919C22.4141 6.76066 22.2898 6.92434 22.119 7.0245L20.439 7.9935L21.7635 8.349C21.9556 8.40072 22.1194 8.52665 22.2187 8.69909C22.318 8.87153 22.3447 9.07635 22.293 9.2685C22.2413 9.46065 22.1153 9.62438 21.9429 9.72369C21.7705 9.82299 21.5656 9.84972 21.3735 9.798L18.6015 9.0555L13.5 12L18.6 14.9445L21.3735 14.202C21.5656 14.1505 21.7704 14.1774 21.9427 14.2768C22.115 14.3763 22.2407 14.5401 22.2922 14.7323C22.3437 14.9244 22.3168 15.1291 22.2174 15.3014C22.1179 15.4737 21.9541 15.5995 21.762 15.651L20.4375 16.0065L22.1175 16.9755C22.2883 17.0757 22.4126 17.2393 22.4633 17.4308C22.5139 17.6223 22.4867 17.826 22.3877 17.9975C22.2887 18.169 22.1258 18.2944 21.9347 18.3463C21.7435 18.3982 21.5396 18.3724 21.3675 18.2745L19.6875 17.3055L20.0415 18.63C20.0688 18.7257 20.0767 18.8259 20.0649 18.9248C20.0531 19.0236 20.0217 19.1191 19.9726 19.2057C19.9234 19.2923 19.8576 19.3682 19.7788 19.4291C19.7 19.49 19.6099 19.5345 19.5137 19.5602C19.4176 19.5859 19.3172 19.5922 19.2186 19.5787C19.12 19.5652 19.025 19.5322 18.9393 19.4817C18.8535 19.4311 18.7787 19.364 18.7192 19.2842C18.6596 19.2044 18.6166 19.1136 18.5925 19.017L17.85 16.2435L12.75 13.299V19.1895L14.7795 21.219C14.9203 21.3596 14.9995 21.5504 14.9996 21.7495C14.9998 21.9485 14.9209 22.1394 14.7802 22.2803C14.6396 22.4211 14.4488 22.5003 14.2498 22.5004C14.0507 22.5006 13.8598 22.4216 13.719 22.281L12.7485 21.3105V23.25C12.7485 23.4489 12.6695 23.6397 12.5288 23.7803C12.3882 23.921 12.1974 24 11.9985 24H12Z" fill="black" />
    </IconBase>
  );
};

export default Icon
