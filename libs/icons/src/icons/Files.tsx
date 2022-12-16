

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19.5 0H9C8.20435 0 7.44129 0.316071 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H16.5C17.2956 24 18.0587 23.6839 18.6213 23.1213C19.1839 22.5587 19.5 21.7956 19.5 21C20.2956 21 21.0587 20.6839 21.6213 20.1213C22.1839 19.5587 22.5 18.7956 22.5 18V3C22.5 2.20435 22.1839 1.44129 21.6213 0.87868C21.0587 0.316071 20.2956 0 19.5 0V0ZM19.5 19.5V6C19.5 5.20435 19.1839 4.44129 18.6213 3.87868C18.0587 3.31607 17.2956 3 16.5 3H7.5C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5H19.5C19.8978 1.5 20.2794 1.65804 20.5607 1.93934C20.842 2.22064 21 2.60218 21 3V18C21 18.3978 20.842 18.7794 20.5607 19.0607C20.2794 19.342 19.8978 19.5 19.5 19.5ZM4.5 6C4.5 5.60218 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60218 4.5 6 4.5H16.5C16.8978 4.5 17.2794 4.65804 17.5607 4.93934C17.842 5.22064 18 5.60218 18 6V21C18 21.3978 17.842 21.7794 17.5607 22.0607C17.2794 22.342 16.8978 22.5 16.5 22.5H6C5.60218 22.5 5.22064 22.342 4.93934 22.0607C4.65804 21.7794 4.5 21.3978 4.5 21V6Z" fill="black" />
    </IconBase>
  );
};

export default Icon
