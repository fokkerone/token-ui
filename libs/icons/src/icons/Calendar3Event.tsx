

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0V0ZM1.5 5.7855C1.5 5.076 2.172 4.5 3 4.5H21C21.828 4.5 22.5 5.076 22.5 5.7855V21.2145C22.5 21.924 21.828 22.5 21 22.5H3C2.172 22.5 1.5 21.924 1.5 21.2145V5.7855Z" fill="black" /><path d="M18 10.5C18.3978 10.5 18.7794 10.342 19.0607 10.0607C19.342 9.77936 19.5 9.39782 19.5 9C19.5 8.60218 19.342 8.22064 19.0607 7.93934C18.7794 7.65804 18.3978 7.5 18 7.5C17.6022 7.5 17.2206 7.65804 16.9393 7.93934C16.658 8.22064 16.5 8.60218 16.5 9C16.5 9.39782 16.658 9.77936 16.9393 10.0607C17.2206 10.342 17.6022 10.5 18 10.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon