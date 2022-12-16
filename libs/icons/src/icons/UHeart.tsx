

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M20.16 5C19.1 3.93721 17.6948 3.28854 16.1984 3.17117C14.7019 3.0538 13.2128 3.47546 12 4.36C10.7277 3.41364 9.14402 2.98451 7.56795 3.15903C5.99188 3.33356 4.54047 4.09878 3.506 5.30058C2.47154 6.50239 1.93085 8.05152 1.99283 9.63601C2.05481 11.2205 2.71485 12.7227 3.84003 13.84L10.05 20.06C10.57 20.5718 11.2704 20.8586 12 20.8586C12.7296 20.8586 13.43 20.5718 13.95 20.06L20.16 13.84C21.3276 12.6653 21.983 11.0763 21.983 9.42C21.983 7.76372 21.3276 6.17473 20.16 5ZM18.75 12.46L12.54 18.67C12.4694 18.7414 12.3853 18.798 12.2926 18.8366C12.1999 18.8753 12.1005 18.8952 12 18.8952C11.8996 18.8952 11.8002 18.8753 11.7075 18.8366C11.6148 18.798 11.5307 18.7414 11.46 18.67L5.25003 12.43C4.46579 11.6283 4.02664 10.5515 4.02664 9.43C4.02664 8.30853 4.46579 7.23165 5.25003 6.43C6.04919 5.64099 7.127 5.19857 8.25003 5.19857C9.37306 5.19857 10.4509 5.64099 11.25 6.43C11.343 6.52373 11.4536 6.59812 11.5755 6.64889C11.6973 6.69966 11.828 6.7258 11.96 6.7258C12.092 6.7258 12.2227 6.69966 12.3446 6.64889C12.4665 6.59812 12.5771 6.52373 12.67 6.43C13.4692 5.64099 14.547 5.19857 15.67 5.19857C16.7931 5.19857 17.8709 5.64099 18.67 6.43C19.4651 7.22115 19.9186 8.29219 19.9336 9.41368C19.9485 10.5352 19.5237 11.6179 18.75 12.43V12.46Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon