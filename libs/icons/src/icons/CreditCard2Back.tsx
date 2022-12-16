

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.5 8.25C16.5 8.05109 16.579 7.86032 16.7197 7.71967C16.8603 7.57902 17.0511 7.5 17.25 7.5H20.25C20.4489 7.5 20.6397 7.57902 20.7803 7.71967C20.921 7.86032 21 8.05109 21 8.25V9.75C21 9.94891 20.921 10.1397 20.7803 10.2803C20.6397 10.421 20.4489 10.5 20.25 10.5H17.25C17.0511 10.5 16.8603 10.421 16.7197 10.2803C16.579 10.1397 16.5 9.94891 16.5 9.75V8.25Z" fill="black" /><path d="M3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3ZM22.5 6V13.5H1.5V6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H21C21.3978 4.5 21.7794 4.65804 22.0607 4.93934C22.342 5.22064 22.5 5.60218 22.5 6ZM21 19.5H3C2.60218 19.5 2.22064 19.342 1.93934 19.0607C1.65804 18.7794 1.5 18.3978 1.5 18V16.5H22.5V18C22.5 18.3978 22.342 18.7794 22.0607 19.0607C21.7794 19.342 21.3978 19.5 21 19.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
