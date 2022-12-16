

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 18V6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H21C21.7956 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7956 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7956 21 21 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18ZM9.75 7.5C9.15326 7.5 8.58097 7.73705 8.15901 8.15901C7.73705 8.58097 7.5 9.15326 7.5 9.75V14.25C7.5 14.8467 7.73705 15.419 8.15901 15.841C8.58097 16.2629 9.15326 16.5 9.75 16.5H14.25C14.8467 16.5 15.419 16.2629 15.841 15.841C16.2629 15.419 16.5 14.8467 16.5 14.25V9.75C16.5 9.15326 16.2629 8.58097 15.841 8.15901C15.419 7.73705 14.8467 7.5 14.25 7.5H9.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
