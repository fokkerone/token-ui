

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H9C9.26522 22 9.51957 21.8946 9.70711 21.7071C9.89464 21.5196 10 21.2652 10 21V10H21C21.2652 10 21.5196 9.89464 21.7071 9.70711C21.8946 9.51957 22 9.26522 22 9V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM20 8H18V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7V8H14V7C14 6.73478 13.8946 6.48043 13.7071 6.29289C13.5196 6.10536 13.2652 6 13 6C12.7348 6 12.4804 6.10536 12.2929 6.29289C12.1054 6.48043 12 6.73478 12 7V8H10V7C10 6.73478 9.89464 6.48043 9.70711 6.29289C9.51957 6.10536 9.26522 6 9 6C8.73478 6 8.48043 6.10536 8.29289 6.29289C8.10536 6.48043 8 6.73478 8 7V8H7C6.73478 8 6.48043 8.10536 6.29289 8.29289C6.10536 8.48043 6 8.73478 6 9C6 9.26522 6.10536 9.51957 6.29289 9.70711C6.48043 9.89464 6.73478 10 7 10H8V12H7C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H8V16H7C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H8V20H4V4H20V8Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
