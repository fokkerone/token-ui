

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 6C0 6 0 3 3 3H21C21 3 24 3 24 6V15C24 15 24 18 21 18H15C15 19.0005 15.1245 19.7505 15.375 20.25H16.5C16.6989 20.25 16.8897 20.329 17.0303 20.4697C17.171 20.6103 17.25 20.8011 17.25 21C17.25 21.1989 17.171 21.3897 17.0303 21.5303C16.8897 21.671 16.6989 21.75 16.5 21.75H7.5C7.30109 21.75 7.11032 21.671 6.96967 21.5303C6.82902 21.3897 6.75 21.1989 6.75 21C6.75 20.8011 6.82902 20.6103 6.96967 20.4697C7.11032 20.329 7.30109 20.25 7.5 20.25H8.625C8.8755 19.7505 9 19.0005 9 18H3C3 18 0 18 0 15V6ZM2.097 4.7175C1.93223 4.83221 1.80078 4.98851 1.716 5.1705C1.58814 5.43468 1.51468 5.72187 1.5 6.015V15C1.5 15.4875 1.617 15.753 1.7175 15.903C1.8225 16.0605 1.9725 16.185 2.1705 16.284C2.42331 16.4065 2.69726 16.4793 2.9775 16.4985L3.015 16.5H21C21.4875 16.5 21.753 16.383 21.903 16.2825C22.0678 16.1678 22.1992 16.0115 22.284 15.8295C22.4065 15.5767 22.4793 15.3027 22.4985 15.0225L22.5 14.985V6C22.5 5.5125 22.383 5.247 22.2825 5.097C22.1678 4.93218 22.0115 4.80072 21.8295 4.716C21.5653 4.58814 21.2781 4.51468 20.985 4.5H3C2.5125 4.5 2.247 4.617 2.097 4.7175Z" fill="black" />
    </IconBase>
  );
};

export default Icon
