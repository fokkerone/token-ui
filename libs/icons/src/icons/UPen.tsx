

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M22 7.24002C22.0007 7.10841 21.9755 6.97795 21.9258 6.85611C21.876 6.73427 21.8027 6.62346 21.71 6.53002L17.47 2.29002C17.3765 2.19734 17.2657 2.12401 17.1439 2.07425C17.0221 2.02448 16.8916 1.99926 16.76 2.00002C16.6284 1.99926 16.4979 2.02448 16.3761 2.07425C16.2542 2.12401 16.1434 2.19734 16.05 2.29002L13.22 5.12002L2.28999 16.05C2.1973 16.1435 2.12398 16.2543 2.07421 16.3761C2.02445 16.4979 1.99923 16.6284 1.99999 16.76V21C1.99999 21.2652 2.10534 21.5196 2.29288 21.7071C2.48042 21.8947 2.73477 22 2.99999 22H7.23999C7.37991 22.0076 7.51988 21.9857 7.65081 21.9358C7.78173 21.8858 7.9007 21.8089 7.99999 21.71L18.87 10.78L21.71 8.00002C21.8013 7.9031 21.8756 7.79155 21.93 7.67002C21.9396 7.59031 21.9396 7.50973 21.93 7.43002C21.9347 7.38347 21.9347 7.33657 21.93 7.29002L22 7.24002ZM6.82999 20H3.99999V17.17L13.93 7.24002L16.76 10.07L6.82999 20ZM18.17 8.66002L15.34 5.83002L16.76 4.42002L19.58 7.24002L18.17 8.66002Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
