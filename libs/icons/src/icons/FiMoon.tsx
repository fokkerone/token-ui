

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.0812 2.50904C12.2747 2.85242 12.2485 3.27745 12.0142 3.59442C11.16 4.75008 10.7489 6.17395 10.8558 7.60706C10.9627 9.04018 11.5804 10.3873 12.5965 11.4035C13.6127 12.4197 14.9599 13.0374 16.393 13.1443C17.8261 13.2511 19.25 12.8401 20.4056 11.9859L21 12.79L21.9958 12.882C21.821 14.7734 21.1112 16.5758 19.9494 18.0785C18.7876 19.5811 17.2219 20.7218 15.4355 21.3671C13.649 22.0124 11.7158 22.1355 9.86189 21.7221C8.00802 21.3088 6.31022 20.376 4.96714 19.0329C3.62407 17.6898 2.69127 15.992 2.2779 14.1381C1.86453 12.2843 1.98769 10.351 2.63296 8.56459C3.27823 6.77816 4.41893 5.21244 5.92157 4.05065C7.42422 2.88886 9.22667 2.17904 11.118 2.00426C11.5105 1.96799 11.8877 2.16566 12.0812 2.50904ZM19.561 14.6836C18.5078 15.0646 17.3782 15.2233 16.2442 15.1387C14.3334 14.9962 12.5372 14.1726 11.1823 12.8177C9.82742 11.4628 9.00382 9.66661 8.86132 7.7558C8.77676 6.62183 8.9354 5.4922 9.31641 4.43908C8.5388 4.72043 7.80562 5.12204 7.1449 5.63289C5.94278 6.56232 5.03023 7.81489 4.51401 9.24404C3.99779 10.6732 3.89927 12.2198 4.22996 13.7029C4.56066 15.186 5.30689 16.5442 6.38136 17.6187C7.45582 18.6931 8.81406 19.4394 10.2972 19.7701C11.7803 20.1008 13.3269 20.0022 14.756 19.486C16.1851 18.9698 17.4377 18.0573 18.3672 16.8551C18.878 16.1944 19.2796 15.4612 19.561 14.6836Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon