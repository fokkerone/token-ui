

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M14.5095 8.89948V11.8065H16.059C17.049 11.8065 17.661 11.3325 17.661 10.3815C17.661 9.42147 17.028 8.89948 16.086 8.89948H14.511H14.5095Z" fill="black" /><path d="M0 6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H21C21.7956 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7956 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7956 21 21 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18V6ZM8.9055 16.5L11.8905 7.5015H9.915L7.9155 14.562H7.83L5.8125 7.5015H3.75L6.762 16.5H8.9055ZM12.75 7.5015V16.5H14.5095V13.1445H16.1055L17.6805 16.5H19.671L17.865 12.8745C18.6825 12.5595 19.5 11.6685 19.5 10.35C19.5 8.6295 18.3405 7.5 16.3425 7.5H12.75V7.5015Z" fill="black" />
    </IconBase>
  );
};

export default Icon
