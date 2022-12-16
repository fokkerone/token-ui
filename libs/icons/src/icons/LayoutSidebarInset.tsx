

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 3C21.3978 3 21.7794 3.15804 22.0607 3.43934C22.342 3.72064 22.5 4.10218 22.5 4.5V19.5C22.5 19.8978 22.342 20.2794 22.0607 20.5607C21.7794 20.842 21.3978 21 21 21H3C2.60218 21 2.22064 20.842 1.93934 20.5607C1.65804 20.2794 1.5 19.8978 1.5 19.5V4.5C1.5 4.10218 1.65804 3.72064 1.93934 3.43934C2.22064 3.15804 2.60218 3 3 3H21ZM3 1.5C2.20435 1.5 1.44129 1.81607 0.87868 2.37868C0.316071 2.94129 0 3.70435 0 4.5L0 19.5C0 20.2956 0.316071 21.0587 0.87868 21.6213C1.44129 22.1839 2.20435 22.5 3 22.5H21C21.7956 22.5 22.5587 22.1839 23.1213 21.6213C23.6839 21.0587 24 20.2956 24 19.5V4.5C24 3.70435 23.6839 2.94129 23.1213 2.37868C22.5587 1.81607 21.7956 1.5 21 1.5H3Z" fill="black" /><path d="M4.5 6C4.5 5.60218 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60218 4.5 6 4.5H9C9.39782 4.5 9.77936 4.65804 10.0607 4.93934C10.342 5.22064 10.5 5.60218 10.5 6V18C10.5 18.3978 10.342 18.7794 10.0607 19.0607C9.77936 19.342 9.39782 19.5 9 19.5H6C5.60218 19.5 5.22064 19.342 4.93934 19.0607C4.65804 18.7794 4.5 18.3978 4.5 18V6Z" fill="black" />
    </IconBase>
  );
};

export default Icon