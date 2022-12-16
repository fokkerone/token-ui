

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18.015C0.00396529 18.808 0.321786 19.5673 0.883965 20.1266C1.44615 20.686 2.20694 21 3 21H11.25C11.4489 21 11.6397 20.921 11.7803 20.7803C11.921 20.6397 12 20.4489 12 20.25C12 20.0511 11.921 19.8603 11.7803 19.7197C11.6397 19.579 11.4489 19.5 11.25 19.5H3C2.66982 19.5 2.34884 19.3911 2.08686 19.1902C1.82487 18.9892 1.63652 18.7074 1.551 18.3885L10.011 13.182L11.6145 14.142L12 14.3745L12.3855 14.1435L14.3805 12.9465L22.5 8.0745V12.75C22.5 12.9489 22.579 13.1397 22.7197 13.2803C22.8603 13.421 23.0511 13.5 23.25 13.5C23.4489 13.5 23.6397 13.421 23.7803 13.2803C23.921 13.1397 24 12.9489 24 12.75V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3ZM8.562 12.312L1.5 16.6575V8.0745L8.562 12.312ZM10.392 11.661L1.5 6.3255V6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H21C21.3978 4.5 21.7794 4.65804 22.0607 4.93934C22.342 5.22064 22.5 5.60218 22.5 6V6.3255L13.608 11.661L12 12.6255L10.392 11.661ZM24 18.75C24 20.1424 23.4469 21.4777 22.4623 22.4623C21.4777 23.4469 20.1424 24 18.75 24C17.3576 24 16.0223 23.4469 15.0377 22.4623C14.0531 21.4777 13.5 20.1424 13.5 18.75C13.5 17.3576 14.0531 16.0223 15.0377 15.0377C16.0223 14.0531 17.3576 13.5 18.75 13.5C20.1424 13.5 21.4777 14.0531 22.4623 15.0377C23.4469 16.0223 24 17.3576 24 18.75ZM18.75 15.75C18.9489 15.75 19.1397 15.829 19.2803 15.9697C19.421 16.1103 19.5 16.3011 19.5 16.5V18H21C21.1989 18 21.3897 18.079 21.5303 18.2197C21.671 18.3603 21.75 18.5511 21.75 18.75C21.75 18.9489 21.671 19.1397 21.5303 19.2803C21.3897 19.421 21.1989 19.5 21 19.5H19.5V21C19.5 21.1989 19.421 21.3897 19.2803 21.5303C19.1397 21.671 18.9489 21.75 18.75 21.75C18.5511 21.75 18.3603 21.671 18.2197 21.5303C18.079 21.3897 18 21.1989 18 21V19.5H16.5C16.3011 19.5 16.1103 19.421 15.9697 19.2803C15.829 19.1397 15.75 18.9489 15.75 18.75C15.75 18.5511 15.829 18.3603 15.9697 18.2197C16.1103 18.079 16.3011 18 16.5 18H18V16.5C18 16.3011 18.079 16.1103 18.2197 15.9697C18.3603 15.829 18.5511 15.75 18.75 15.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
