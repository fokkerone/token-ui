

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19 9C19 7.93913 18.5786 6.92172 17.8284 6.17157C17.0783 5.42143 16.0609 5 15 5V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V5H11V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V5H6C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6C5 6.26522 5.10536 6.51957 5.29289 6.70711C5.48043 6.89464 5.73478 7 6 7H7V17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H9V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V19H13V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22C14.2652 22 14.5196 21.8946 14.7071 21.7071C14.8946 21.5196 15 21.2652 15 21V19C15.8103 18.9948 16.5999 18.7436 17.2643 18.2797C17.9287 17.8159 18.4365 17.1611 18.7205 16.4022C19.0046 15.6433 19.0514 14.8161 18.8549 14.03C18.6584 13.2438 18.2277 12.5359 17.62 12C18.0503 11.627 18.396 11.1664 18.634 10.6491C18.872 10.1317 18.9968 9.56947 19 9ZM15 17H9V13H15C15.5304 13 16.0391 13.2107 16.4142 13.5858C16.7893 13.9609 17 14.4696 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17ZM15 11H9V7H15C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9C17 9.53043 16.7893 10.0391 16.4142 10.4142C16.0391 10.7893 15.5304 11 15 11Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
