

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.2105 7.5015C6.0315 9.447 4.8045 11.4 3.75 13.3755V14.832H8.1075V16.5H9.7755V14.832H10.875V13.395H9.7755V7.5015H7.2105ZM5.3655 13.3965V13.3485C6.19233 11.8156 7.07594 10.3141 8.0145 8.847H8.1075V13.395H5.3655V13.3965ZM20.112 7.5015H18.153L14.7525 11.5305H14.667V7.5H12.885V16.5H14.6655V13.6125L15.588 12.564L18.108 16.5H20.25L16.902 11.3775L20.112 7.5015Z" fill="black" /><path d="M21 4.5C21.3978 4.5 21.7794 4.65804 22.0607 4.93934C22.342 5.22064 22.5 5.60218 22.5 6V18C22.5 18.3978 22.342 18.7794 22.0607 19.0607C21.7794 19.342 21.3978 19.5 21 19.5H3C2.60218 19.5 2.22064 19.342 1.93934 19.0607C1.65804 18.7794 1.5 18.3978 1.5 18V6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H21ZM3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3Z" fill="black" />
    </IconBase>
  );
};

export default Icon