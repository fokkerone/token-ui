

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 14.25C21 15.0456 20.6839 15.8087 20.1213 16.3713C19.5587 16.9339 18.7956 17.25 18 17.25C17.2044 17.25 16.4413 16.9339 15.8787 16.3713C15.3161 15.8087 15 15.0456 15 14.25C15 13.4544 15.3161 12.6913 15.8787 12.1287C16.4413 11.5661 17.2044 11.25 18 11.25C18.7956 11.25 19.5587 11.5661 20.1213 12.1287C20.6839 12.6913 21 13.4544 21 14.25ZM12 22.8C12 24 13.2 24 13.2 24H22.8C22.8 24 24 24 24 22.8C24 21.6 22.8 18 18 18C13.2 18 12 21.6 12 22.8Z" fill="black" /><path d="M3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H10.8645C11.0475 20.511 11.307 19.998 11.6535 19.5H3C2.60218 19.5 2.22064 19.342 1.93934 19.0607C1.65804 18.7794 1.5 18.3978 1.5 18V6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H21C21.3978 4.5 21.7794 4.65804 22.0607 4.93934C22.342 5.22064 22.5 5.60218 22.5 6V17.715C23.0295 18.06 23.484 18.459 23.865 18.8895C23.9535 18.609 24 18.3105 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3Z" fill="black" />
    </IconBase>
  );
};

export default Icon
