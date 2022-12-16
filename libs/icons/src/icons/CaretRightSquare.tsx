

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 1.5C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V21C22.5 21.3978 22.342 21.7794 22.0607 22.0607C21.7794 22.342 21.3978 22.5 21 22.5H3C2.60218 22.5 2.22064 22.342 1.93934 22.0607C1.65804 21.7794 1.5 21.3978 1.5 21V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H21ZM3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0Z" fill="black" /><path d="M8.6925 18.684C8.56068 18.6247 8.44879 18.5286 8.37029 18.4073C8.29178 18.2859 8.25001 18.1445 8.25 18V5.99996C8.24996 5.85539 8.29171 5.71388 8.37021 5.59249C8.44872 5.47109 8.56064 5.37497 8.6925 5.31569C8.82436 5.25642 8.97054 5.23652 9.11345 5.25839C9.25636 5.28026 9.3899 5.34296 9.498 5.43896L16.248 11.439C16.3273 11.5093 16.3908 11.5957 16.4343 11.6924C16.4777 11.7891 16.5002 11.8939 16.5002 12C16.5002 12.106 16.4777 12.2108 16.4343 12.3075C16.3908 12.4042 16.3273 12.4906 16.248 12.561L9.498 18.561C9.38987 18.6569 9.25632 18.7196 9.11341 18.7414C8.9705 18.7632 8.82434 18.7433 8.6925 18.684Z" fill="black" />
    </IconBase>
  );
};

export default Icon
