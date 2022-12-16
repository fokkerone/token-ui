

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M17.5 8.99897C16.6047 8.99859 15.7233 9.22003 14.9346 9.6435C14.8626 9.45393 14.7346 9.29074 14.5677 9.17561C14.4008 9.06049 14.2028 8.99888 14 8.99897H10C9.86866 8.9989 9.73859 9.02471 9.61723 9.07494C9.49587 9.12517 9.3856 9.19882 9.29273 9.2917C9.19985 9.38457 9.1262 9.49484 9.07597 9.6162C9.02574 9.73756 8.99993 9.86763 9 9.99897V21.999C8.99993 22.1303 9.02574 22.2604 9.07597 22.3817C9.12619 22.5031 9.19985 22.6134 9.29272 22.7062C9.3856 22.7991 9.49587 22.8728 9.61723 22.923C9.73859 22.9732 9.86866 22.999 10 22.999H14C14.1313 22.999 14.2614 22.9732 14.3828 22.923C14.5041 22.8728 14.6144 22.7991 14.7073 22.7062C14.8002 22.6134 14.8738 22.5031 14.924 22.3817C14.9743 22.2604 15.0001 22.1303 15 21.999V16.499C15 16.2338 15.1054 15.9794 15.2929 15.7919C15.4804 15.6043 15.7348 15.499 16 15.499C16.2652 15.499 16.5196 15.6043 16.7071 15.7919C16.8946 15.9794 17 16.2338 17 16.499V21.999C16.9999 22.1303 17.0257 22.2604 17.076 22.3817C17.1262 22.5031 17.1999 22.6134 17.2927 22.7062C17.3856 22.7991 17.4959 22.8728 17.6172 22.923C17.7386 22.9732 17.8687 22.999 18 22.999H22C22.1313 22.999 22.2614 22.9732 22.3828 22.923C22.5041 22.8728 22.6144 22.7991 22.7073 22.7062C22.8002 22.6134 22.8738 22.5031 22.924 22.3817C22.9743 22.2604 23.0001 22.1303 23 21.999V14.499C22.9982 13.0408 22.4181 11.6429 21.3871 10.6119C20.356 9.58083 18.9581 9.00078 17.5 8.99897ZM21 20.999H19V16.499C19 15.7033 18.6839 14.9403 18.1213 14.3777C17.5587 13.815 16.7957 13.499 16 13.499C15.2044 13.499 14.4413 13.815 13.8787 14.3777C13.3161 14.9403 13 15.7033 13 16.499V20.999H11V10.999H13V11.7021C13.0001 11.9093 13.0646 12.1114 13.1845 12.2804C13.3043 12.4494 13.4737 12.577 13.6692 12.6456C13.8647 12.7142 14.0767 12.7204 14.2759 12.6633C14.4751 12.6063 14.6517 12.4888 14.7813 12.3271C15.23 11.7571 15.8456 11.3415 16.542 11.1383C17.2384 10.9351 17.9809 10.9545 18.6657 11.1937C19.3506 11.4329 19.9437 11.88 20.3622 12.4725C20.7806 13.0651 21.0036 13.7735 21 14.499V20.999ZM7 8.99897H3C2.86866 8.9989 2.73859 9.02471 2.61723 9.07494C2.49587 9.12517 2.3856 9.19882 2.29273 9.2917C2.19985 9.38457 2.1262 9.49484 2.07597 9.6162C2.02574 9.73756 1.99993 9.86763 2 9.99897V21.999C1.99993 22.1303 2.02574 22.2604 2.07597 22.3817C2.12619 22.5031 2.19985 22.6134 2.29272 22.7062C2.3856 22.7991 2.49587 22.8728 2.61723 22.923C2.73859 22.9732 2.86866 22.999 3 22.999H7C7.13134 22.999 7.26142 22.9732 7.38277 22.923C7.50413 22.8728 7.6144 22.7991 7.70728 22.7062C7.80015 22.6134 7.87381 22.5031 7.92404 22.3817C7.97426 22.2604 8.00008 22.1303 8 21.999V9.99897C8.00008 9.86763 7.97426 9.73756 7.92403 9.6162C7.87381 9.49484 7.80015 9.38457 7.70728 9.2917C7.6144 9.19882 7.50413 9.12517 7.38277 9.07494C7.26141 9.02471 7.13134 8.9989 7 8.99897ZM6 20.999H4V10.999H6V20.999ZM5.01465 1.54197C4.57701 1.51577 4.13862 1.57887 3.72613 1.72741C3.31364 1.87596 2.93567 2.10686 2.61522 2.40606C2.29476 2.70527 2.03852 3.06653 1.86206 3.46787C1.6856 3.86921 1.59262 4.30226 1.58878 4.74066C1.58493 5.17907 1.6703 5.61367 1.83969 6.01805C2.00907 6.42243 2.25894 6.78813 2.5741 7.09291C2.88925 7.39769 3.26311 7.63518 3.67293 7.79095C4.08275 7.94671 4.51997 8.01748 4.958 7.99897H4.98632C5.42512 8.02503 5.86462 7.96135 6.27798 7.81182C6.69133 7.66229 7.06986 7.43004 7.39042 7.12928C7.71099 6.82851 7.96686 6.46554 8.14241 6.06255C8.31796 5.65955 8.40949 5.225 8.41142 4.78543C8.41335 4.34586 8.32563 3.91052 8.15362 3.506C7.98162 3.10148 7.72894 2.73628 7.41102 2.43272C7.09311 2.12915 6.71663 1.89359 6.30461 1.74044C5.89258 1.58729 5.45365 1.51976 5.01464 1.54197H5.01465ZM4.98633 5.99897H4.958C4.78507 6.01997 4.60964 6.00375 4.44349 5.9514C4.27734 5.89905 4.1243 5.81178 3.99464 5.69543C3.86498 5.57909 3.7617 5.43637 3.69172 5.27685C3.62173 5.11732 3.58667 4.94467 3.58887 4.77048C3.58887 4.02438 4.14844 3.54196 5.01465 3.54196C5.18935 3.51867 5.36701 3.53309 5.53567 3.58424C5.70432 3.6354 5.86006 3.7221 5.99239 3.83851C6.12471 3.95492 6.23056 4.09834 6.30279 4.2591C6.37502 4.41986 6.41197 4.59424 6.41113 4.77048C6.41113 5.51657 5.85156 5.99897 4.98633 5.99897Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon