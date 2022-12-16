

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 2C20.7348 2 20.4804 2.10536 20.2929 2.29289C20.1054 2.48043 20 2.73478 20 3V5H18V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3V4H8V3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V5H4V3C4 2.73478 3.89464 2.48043 3.70711 2.29289C3.51957 2.10536 3.26522 2 3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22C3.26522 22 3.51957 21.8946 3.70711 21.7071C3.89464 21.5196 4 21.2652 4 21V19H6V21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22C7.26522 22 7.51957 21.8946 7.70711 21.7071C7.89464 21.5196 8 21.2652 8 21V20H16V21C16 21.2652 16.1054 21.5196 16.2929 21.7071C16.4804 21.8946 16.7348 22 17 22C17.2652 22 17.5196 21.8946 17.7071 21.7071C17.8946 21.5196 18 21.2652 18 21V19H20V21C20 21.2652 20.1054 21.5196 20.2929 21.7071C20.4804 21.8946 20.7348 22 21 22C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM6 17H4V15H6V17ZM6 13H4V11H6V13ZM6 9H4V7H6V9ZM16 18H8V13H16V18ZM16 11H8V6H16V11ZM20 17H18V15H20V17ZM20 13H18V11H20V13ZM20 9H18V7H20V9Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon