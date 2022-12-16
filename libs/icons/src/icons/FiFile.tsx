

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3.87868 1.87868C4.44129 1.31607 5.20435 1 6 1H13C13.2652 1 13.5196 1.10536 13.7071 1.29289L20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V4C3 3.20435 3.31607 2.44129 3.87868 1.87868ZM6 3C5.73478 3 5.48043 3.10536 5.29289 3.29289C5.10536 3.48043 5 3.73478 5 4V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V9.41421L12.5858 3H6Z" fill="#250116" /><path d="M13 1C13.5523 1 14 1.44772 14 2V8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H13C12.4477 10 12 9.55228 12 9V2C12 1.44772 12.4477 1 13 1Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
