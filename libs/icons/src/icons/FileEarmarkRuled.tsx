

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 21V6.75L14.25 0H6C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21ZM14.25 4.5C14.25 5.09674 14.4871 5.66903 14.909 6.09099C15.331 6.51295 15.9033 6.75 16.5 6.75H19.5V13.5H4.5V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5H14.25V4.5ZM4.5 18V15H7.5V18H4.5ZM4.5 19.5H7.5V22.5H6C5.60218 22.5 5.22064 22.342 4.93934 22.0607C4.65804 21.7794 4.5 21.3978 4.5 21V19.5ZM9 22.5V19.5H19.5V21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5H9ZM19.5 18H9V15H19.5V18Z" fill="black" />
    </IconBase>
  );
};

export default Icon