

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L15 0C15.7956 0 16.5587 0.316071 17.1213 0.87868C17.6839 1.44129 18 2.20435 18 3V6H21C21.7956 6 22.5587 6.31607 23.1213 6.87868C23.6839 7.44129 24 8.20435 24 9V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H9C8.20435 24 7.44129 23.6839 6.87868 23.1213C6.31607 22.5587 6 21.7956 6 21V18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.316071 16.5587 0 15.7956 0 15V3Z" fill="black" />
    </IconBase>
  );
};

export default Icon
