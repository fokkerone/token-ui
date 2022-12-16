

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 8C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7V3C21.9984 2.86932 21.9712 2.74022 21.92 2.62C21.8185 2.37565 21.6243 2.18147 21.38 2.08C21.2598 2.02876 21.1307 2.00158 21 2H17C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3C16 3.26522 16.1054 3.51957 16.2929 3.70711C16.4804 3.89464 16.7348 4 17 4H18.59L12 10.59L5.41 4H7C7.26522 4 7.51957 3.89464 7.70711 3.70711C7.89464 3.51957 8 3.26522 8 3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2H3C2.86932 2.00158 2.74022 2.02876 2.62 2.08C2.37565 2.18147 2.18147 2.37565 2.08 2.62C2.02876 2.74022 2.00158 2.86932 2 3V7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8C3.26522 8 3.51957 7.89464 3.70711 7.70711C3.89464 7.51957 4 7.26522 4 7V5.41L10.59 12L4 18.59V17C4 16.7348 3.89464 16.4804 3.70711 16.2929C3.51957 16.1054 3.26522 16 3 16C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17V21C2.00158 21.1307 2.02876 21.2598 2.08 21.38C2.18147 21.6243 2.37565 21.8185 2.62 21.92C2.74022 21.9712 2.86932 21.9984 3 22H7C7.26522 22 7.51957 21.8946 7.70711 21.7071C7.89464 21.5196 8 21.2652 8 21C8 20.7348 7.89464 20.4804 7.70711 20.2929C7.51957 20.1054 7.26522 20 7 20H5.41L12 13.41L18.59 20H17C16.7348 20 16.4804 20.1054 16.2929 20.2929C16.1054 20.4804 16 20.7348 16 21C16 21.2652 16.1054 21.5196 16.2929 21.7071C16.4804 21.8946 16.7348 22 17 22H21C21.1307 21.9984 21.2598 21.9712 21.38 21.92C21.6243 21.8185 21.8185 21.6243 21.92 21.38C21.9712 21.2598 21.9984 21.1307 22 21V17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16C20.7348 16 20.4804 16.1054 20.2929 16.2929C20.1054 16.4804 20 16.7348 20 17V18.59L13.41 12L20 5.41V7C20 7.26522 20.1054 7.51957 20.2929 7.70711C20.4804 7.89464 20.7348 8 21 8Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon