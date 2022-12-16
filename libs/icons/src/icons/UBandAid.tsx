

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M8.82 11.29C8.72627 11.383 8.65188 11.4936 8.60111 11.6154C8.55034 11.7373 8.5242 11.868 8.5242 12C8.5242 12.132 8.55034 12.2627 8.60111 12.3846C8.65188 12.5065 8.72627 12.6171 8.82 12.71C9.00736 12.8963 9.26081 13.0008 9.525 13.0008C9.78918 13.0008 10.0426 12.8963 10.23 12.71C10.3237 12.6171 10.3981 12.5065 10.4489 12.3846C10.4997 12.2627 10.5258 12.132 10.5258 12C10.5258 11.868 10.4997 11.7373 10.4489 11.6154C10.3981 11.4936 10.3237 11.383 10.23 11.29C10.0426 11.1038 9.78918 10.9992 9.525 10.9992C9.26081 10.9992 9.00736 11.1038 8.82 11.29ZM11.29 13.77C11.1037 13.9574 10.9992 14.2108 10.9992 14.475C10.9992 14.7392 11.1037 14.9927 11.29 15.18C11.383 15.2737 11.4936 15.3481 11.6154 15.3989C11.7373 15.4497 11.868 15.4758 12 15.4758C12.132 15.4758 12.2627 15.4497 12.3846 15.3989C12.5064 15.3481 12.617 15.2737 12.71 15.18C12.8962 14.9927 13.0008 14.7392 13.0008 14.475C13.0008 14.2108 12.8962 13.9574 12.71 13.77C12.617 13.6763 12.5064 13.6019 12.3846 13.5511C12.2627 13.5004 12.132 13.4742 12 13.4742C11.868 13.4742 11.7373 13.5004 11.6154 13.5511C11.4936 13.6019 11.383 13.6763 11.29 13.77ZM20.29 3.77002C19.2022 2.67324 17.7333 2.03827 16.1891 1.99729C14.6449 1.95631 13.1444 2.51248 12 3.55002C10.8608 2.5246 9.37246 1.974 7.84022 2.01119C6.30798 2.04838 4.84806 2.67054 3.76 3.75002C2.67902 4.83986 2.05685 6.30256 2.0215 7.83717C1.98616 9.37178 2.54033 10.8616 3.57 12C2.80017 12.8607 2.29504 13.9251 2.11521 15.0658C1.93538 16.2064 2.0885 17.3746 2.5562 18.4304C3.02389 19.4861 3.78629 20.3845 4.7519 21.0177C5.71752 21.6508 6.84533 21.9919 8 22C9.48022 22.0016 10.9073 21.4486 12 20.45C13.1397 21.4784 14.6302 22.0308 16.1648 21.9936C17.6995 21.9564 19.1615 21.3324 20.25 20.25C21.3296 19.1589 21.9499 17.6955 21.9834 16.1609C22.0169 14.6263 21.461 13.1372 20.43 12C21.461 10.8628 22.0169 9.37376 21.9834 7.83916C21.9499 6.30456 21.3296 4.84116 20.25 3.75002L20.29 3.77002ZM18.83 5.17002C19.5254 5.88541 19.9284 6.83486 19.9599 7.83206C19.9913 8.82927 19.649 9.80223 19 10.56L13.44 5.00002C14.2044 4.36575 15.1744 4.03293 16.1672 4.06424C17.16 4.09555 18.1071 4.48884 18.83 5.17002ZM5.17 18.83C4.47457 18.1146 4.07158 17.1652 4.04013 16.168C4.00868 15.1708 4.35103 14.1978 5 13.44L10.6 19.04C9.82711 19.678 8.84642 20.0093 7.84495 19.9705C6.84348 19.9318 5.89131 19.5258 5.17 18.83ZM18.83 18.83C18.0707 19.5562 17.0606 19.9615 16.01 19.9615C14.9594 19.9615 13.9493 19.5562 13.19 18.83L5.19 10.83C4.44499 10.0806 4.02683 9.06676 4.02683 8.01002C4.02683 6.95327 4.44499 5.93947 5.19 5.19002C5.93945 4.44501 6.95326 4.02685 8.01 4.02685C9.06674 4.02685 10.0805 4.44501 10.83 5.19002L18.83 13.19C19.575 13.9395 19.9932 14.9533 19.9932 16.01C19.9932 17.0668 19.575 18.0806 18.83 18.83ZM13.77 11.29C13.6763 11.383 13.6019 11.4936 13.5511 11.6154C13.5003 11.7373 13.4742 11.868 13.4742 12C13.4742 12.132 13.5003 12.2627 13.5511 12.3846C13.6019 12.5065 13.6763 12.6171 13.77 12.71C13.9574 12.8963 14.2108 13.0008 14.475 13.0008C14.7392 13.0008 14.9926 12.8963 15.18 12.71C15.2737 12.6171 15.3481 12.5065 15.3989 12.3846C15.4497 12.2627 15.4758 12.132 15.4758 12C15.4758 11.868 15.4497 11.7373 15.3989 11.6154C15.3481 11.4936 15.2737 11.383 15.18 11.29C14.9926 11.1038 14.7392 10.9992 14.475 10.9992C14.2108 10.9992 13.9574 11.1038 13.77 11.29ZM11.29 8.82002C11.1037 9.00738 10.9992 9.26083 10.9992 9.52502C10.9992 9.7892 11.1037 10.0427 11.29 10.23C11.383 10.3237 11.4936 10.3981 11.6154 10.4489C11.7373 10.4997 11.868 10.5258 12 10.5258C12.132 10.5258 12.2627 10.4997 12.3846 10.4489C12.5064 10.3981 12.617 10.3237 12.71 10.23C12.8962 10.0427 13.0008 9.7892 13.0008 9.52502C13.0008 9.26083 12.8962 9.00738 12.71 8.82002C12.617 8.72629 12.5064 8.65189 12.3846 8.60113C12.2627 8.55036 12.132 8.52422 12 8.52422C11.868 8.52422 11.7373 8.55036 11.6154 8.60113C11.4936 8.65189 11.383 8.72629 11.29 8.82002Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon