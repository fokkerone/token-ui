

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3.75 20.25C3.75 20.0511 3.82902 19.8603 3.96967 19.7197C4.11032 19.579 4.30109 19.5 4.5 19.5H19.5C19.6989 19.5 19.8897 19.579 20.0303 19.7197C20.171 19.8603 20.25 20.0511 20.25 20.25C20.25 20.4489 20.171 20.6397 20.0303 20.7803C19.8897 20.921 19.6989 21 19.5 21H4.5C4.30109 21 4.11032 20.921 3.96967 20.7803C3.82902 20.6397 3.75 20.4489 3.75 20.25ZM20.9865 4.5L21.0225 4.5015C21.3028 4.52058 21.5767 4.5934 21.8295 4.716C22.0115 4.80072 22.1678 4.93218 22.2825 5.097C22.383 5.247 22.5 5.5125 22.5 6V14.9865L22.4985 15.0225C22.4793 15.3027 22.4065 15.5767 22.284 15.8295C22.1992 16.0115 22.0678 16.1678 21.903 16.2825C21.753 16.383 21.4875 16.5 21 16.5H3.0135L2.9775 16.4985C2.69726 16.4793 2.42331 16.4065 2.1705 16.284C1.98851 16.1992 1.83221 16.0678 1.7175 15.903C1.617 15.753 1.5 15.4875 1.5 15V6.0135L1.5015 5.9775C1.52058 5.69723 1.5934 5.42325 1.716 5.1705C1.80078 4.98851 1.93223 4.83221 2.097 4.7175C2.247 4.617 2.5125 4.5 3 4.5H20.9865ZM21 3H3C0 3 0 6 0 6V15C0 18 3 18 3 18H21C24 18 24 15 24 15V6C24 3 21 3 21 3Z" fill="black" />
    </IconBase>
  );
};

export default Icon
