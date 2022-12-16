

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21.3 10.08C21.019 9.74266 20.6674 9.4711 20.27 9.28448C19.8726 9.09787 19.439 9.00076 19 9.00001H14.44L15 7.57001C15.2329 6.9439 15.3105 6.27062 15.2261 5.60793C15.1416 4.94525 14.8977 4.31294 14.5152 3.76524C14.1327 3.21755 13.623 2.77081 13.0299 2.46336C12.4369 2.1559 11.778 1.99691 11.11 2.00001C10.9176 2.00042 10.7295 2.05629 10.5681 2.16094C10.4067 2.26558 10.2789 2.41456 10.2 2.59001L7.35 9.00001H5C4.20435 9.00001 3.44129 9.31608 2.87868 9.87869C2.31607 10.4413 2 11.2044 2 12V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H17.73C18.4318 21.9998 19.1113 21.7535 19.6503 21.304C20.1893 20.8546 20.5537 20.2304 20.68 19.54L21.95 12.54C22.0286 12.1074 22.011 11.6628 21.8987 11.2377C21.7864 10.8126 21.582 10.4174 21.3 10.08ZM7 20H5C4.73478 20 4.48043 19.8947 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H7V20ZM20 12.18L18.73 19.18C18.6874 19.413 18.5635 19.6233 18.3804 19.7734C18.1973 19.9236 17.9668 20.0039 17.73 20H9V10.21L11.72 4.09001C12 4.17164 12.26 4.31042 12.4837 4.4976C12.7073 4.68477 12.8897 4.91628 13.0194 5.17751C13.1491 5.43873 13.2232 5.724 13.2371 6.01531C13.2509 6.30662 13.2043 6.59765 13.1 6.87001L12.57 8.30001C12.4571 8.60227 12.4189 8.92736 12.4589 9.24755C12.4988 9.56773 12.6156 9.8735 12.7993 10.1388C12.983 10.404 13.2282 10.6209 13.5139 10.7709C13.7996 10.9208 14.1173 10.9994 14.44 11H19C19.1469 10.9998 19.2921 11.0319 19.4252 11.0941C19.5582 11.1564 19.676 11.2471 19.77 11.36C19.8663 11.4713 19.9369 11.6026 19.9767 11.7443C20.0164 11.8861 20.0244 12.0348 20 12.18Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon