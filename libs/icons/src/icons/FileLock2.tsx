

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 7.5C12.3978 7.5 12.7794 7.65804 13.0607 7.93934C13.342 8.22064 13.5 8.60218 13.5 9V10.5H10.5V9C10.5 8.60218 10.658 8.22064 10.9393 7.93934C11.2206 7.65804 11.6022 7.5 12 7.5ZM15 10.614V9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9V10.614C8.19 10.863 7.5 11.5095 7.5 12.45V16.05C7.5 17.274 8.6715 18 9.75 18H14.25C15.3285 18 16.5 17.274 16.5 16.05V12.45C16.5 11.5095 15.81 10.863 15 10.614Z" fill="black" /><path d="M6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V3C21 2.20435 20.6839 1.44129 20.1213 0.87868C19.5587 0.316071 18.7956 0 18 0L6 0ZM6 1.5H18C18.3978 1.5 18.7794 1.65804 19.0607 1.93934C19.342 2.22064 19.5 2.60218 19.5 3V21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5H6C5.60218 22.5 5.22064 22.342 4.93934 22.0607C4.65804 21.7794 4.5 21.3978 4.5 21V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
