

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9.17869 1.40286C11.3625 0.884451 13.6375 0.884452 15.8213 1.40287C17.0782 0.607491 18.0473 0.236117 18.762 0.0774558C19.1553 -0.00985307 19.4702 -0.0323913 19.7105 -0.0257773C19.8304 -0.0224777 19.9305 -0.0119509 20.0114 0.000952538C20.0519 0.00739604 20.0873 0.0144054 20.1178 0.0213438C20.133 0.0248116 20.147 0.0282571 20.1598 0.0315989L20.178 0.0365214L20.1864 0.0389034L20.1904 0.0400711L20.1924 0.0406486C20.1934 0.0409354 20.1944 0.0412218 19.91 0.999938L20.1944 0.0412219C20.4794 0.125762 20.712 0.332736 20.8291 0.605989C21.3636 1.85304 21.4627 3.23739 21.1211 4.53856C22.0105 5.66882 22.4997 7.0699 22.5 8.51975V8.51994C22.5 11.4662 21.5987 13.4423 20.1011 14.7016C19.0947 15.5477 17.8926 16.0052 16.7073 16.2665C16.7227 16.3057 16.7375 16.3452 16.7518 16.3849C16.9573 16.9553 17.0417 17.5621 17 18.1667V21.9999C17 22.5522 16.5523 22.9999 16 22.9999C15.4477 22.9999 15 22.5522 15 21.9999V18.1299C15 18.1038 15.001 18.0776 15.0031 18.0515C15.0295 17.7162 14.9841 17.3791 14.8702 17.0626C14.7562 16.7461 14.5761 16.4575 14.342 16.216C14.0764 15.942 13.9899 15.5409 14.1189 15.1818C14.2479 14.8227 14.57 14.5684 14.9492 14.5261C16.463 14.3574 17.8279 13.9999 18.8139 13.1708C19.7512 12.3826 20.5 11.0337 20.5 8.52012M19.203 2.02826C19.2005 2.02881 19.198 2.02936 19.1955 2.02992C18.7077 2.1382 17.8443 2.4475 16.5568 3.31058C16.3163 3.47177 16.0178 3.52084 15.7384 3.44512C13.6177 2.87037 11.3823 2.87037 9.26158 3.44512C8.98217 3.52084 8.68365 3.47177 8.44319 3.31058C7.15564 2.4475 6.29225 2.1382 5.80452 2.02992C5.802 2.02936 5.7995 2.02881 5.79701 2.02826C5.60376 2.81662 5.64952 3.6503 5.93688 4.4203C6.07068 4.77884 5.98813 5.18231 5.72424 5.45948C4.93266 6.29091 4.49388 7.39664 4.49998 8.54462L4.50001 8.54994C4.49999 11.0405 5.24673 12.381 6.18607 13.1708C7.17557 14.0028 8.54444 14.3689 10.0632 14.5576C10.4395 14.6043 10.7569 14.8598 10.883 15.2173C11.0092 15.5748 10.9222 15.9729 10.6586 16.2454C10.4272 16.4844 10.2488 16.7696 10.1349 17.0822C10.021 17.3948 9.97419 17.7279 9.99753 18.0598C9.99917 18.0831 9.99999 18.1065 9.99999 18.1299V18.9775C10.0003 18.9928 10.0003 19.008 9.99999 19.0232V21.9999C9.99999 22.5522 9.55228 22.9999 8.99999 22.9999C8.44771 22.9999 7.99999 22.5522 7.99999 21.9999V20.2542C7.19382 20.3776 6.48439 20.3564 5.85023 20.208C4.88546 19.9822 4.19642 19.4856 3.66789 18.957C3.40924 18.6984 3.18642 18.4295 2.99387 18.1883C2.92845 18.1063 2.86867 18.0304 2.81217 17.9587C2.69174 17.8058 2.58628 17.6719 2.47312 17.539C2.14508 17.1539 1.94159 17.0161 1.75746 16.9701C1.22166 16.8361 0.895901 16.2932 1.02985 15.7574C1.1638 15.2216 1.70673 14.8958 2.24253 15.0298C3.0584 15.2338 3.60491 15.7834 3.99561 16.2421C4.13474 16.4054 4.27844 16.5878 4.41006 16.7549C4.46115 16.8197 4.51042 16.8823 4.55689 16.9405C4.73544 17.1642 4.90324 17.364 5.0821 17.5428C5.42857 17.8893 5.80202 18.1427 6.306 18.2606C6.70619 18.3543 7.24823 18.3763 7.99999 18.2232V18.1628C7.96297 17.5632 8.04998 16.9622 8.25572 16.3975C8.26976 16.359 8.28434 16.3207 8.29944 16.2826C7.11236 16.0119 5.907 15.5492 4.89891 14.7016C3.4037 13.4443 2.50053 11.4806 2.49999 8.55253M5.08999 0.999938C4.80563 0.0412218 4.8066 0.0409354 4.80757 0.0406486L4.80954 0.0400711L4.81356 0.0389034L4.82196 0.0365214L4.84017 0.0315989C4.85294 0.0282571 4.86694 0.0248116 4.88219 0.0213438C4.9127 0.0144054 4.94813 0.00739604 4.98854 0.000952538C5.06945 -0.0119509 5.16963 -0.0224777 5.28951 -0.0257773C5.52982 -0.0323913 5.84469 -0.00985307 6.23797 0.0774558C6.95265 0.236117 7.92181 0.607491 9.17869 1.40286M5.08999 0.999938L4.80563 0.0412219C4.52061 0.125762 4.28798 0.332736 4.17086 0.605989C3.63637 1.85303 3.5373 3.23738 3.87892 4.53854M19.203 2.02826C19.3962 2.81662 19.3505 3.6503 19.0631 4.4203C18.9293 4.77883 19.0119 5.18229 19.2757 5.45946C20.0614 6.28473 20.4997 7.38048 20.5 8.51994" fill="#250116" />
    </IconBase>
  );
};

export default Icon