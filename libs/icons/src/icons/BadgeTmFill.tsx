

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3ZM7.9425 8.9925V16.5H6.156V8.9925H3.606V7.5H10.5V8.991H7.9425V8.9925ZM13.038 10.515V16.5H11.4495V7.5015H13.263L15.828 13.3425H15.8865L18.4515 7.5015H20.25V16.5H18.642V10.515H18.5565L16.4265 15.3735H15.267L13.125 10.512H13.038V10.515Z" fill="black" />
    </IconBase>
  );
};

export default Icon
