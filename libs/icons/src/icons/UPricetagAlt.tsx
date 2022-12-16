

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.99999 6.00002C6.80221 6.00002 6.60887 6.05867 6.44442 6.16855C6.27997 6.27843 6.15179 6.43461 6.07611 6.61733C6.00042 6.80006 5.98062 7.00113 6.0192 7.19511C6.05779 7.38909 6.15303 7.56727 6.29288 7.70712C6.43273 7.84698 6.61091 7.94222 6.8049 7.9808C6.99888 8.01939 7.19994 7.99958 7.38267 7.9239C7.5654 7.84821 7.72157 7.72004 7.83146 7.55559C7.94134 7.39114 7.99999 7.1978 7.99999 7.00002C7.99999 6.7348 7.89463 6.48045 7.70709 6.29291C7.51956 6.10537 7.2652 6.00002 6.99999 6.00002ZM21.71 11.78L12.23 2.32002C12.1367 2.21948 12.0238 2.13919 11.8982 2.08414C11.7727 2.02909 11.6371 2.00046 11.5 2.00002H5.49999C5.36838 1.99926 5.23792 2.02448 5.11608 2.07425C4.99424 2.12401 4.88343 2.19734 4.78999 2.29002L2.28999 4.78002C2.1973 4.87346 2.12398 4.98427 2.07421 5.10611C2.02445 5.22795 1.99923 5.35841 1.99999 5.49002V11.49C2.00367 11.7548 2.10725 12.0084 2.28999 12.2L11.78 21.7C11.9716 21.8828 12.2252 21.9863 12.49 21.99C12.6216 21.9908 12.7521 21.9656 12.8739 21.9158C12.9957 21.866 13.1065 21.7927 13.2 21.7L21.71 13.19C21.8027 13.0966 21.876 12.9858 21.9258 12.8639C21.9755 12.7421 22.0007 12.6116 22 12.48C21.9938 12.2187 21.8904 11.9691 21.71 11.78ZM12.49 19.59L3.99999 11.09V5.90002L5.89999 4.00002H11.08L19.58 12.49L12.49 19.59Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
