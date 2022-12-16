

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289L20.7071 14.2929C21.0976 14.6834 21.0976 15.3166 20.7071 15.7071L15.7071 20.7071C15.3166 21.0976 14.6834 21.0976 14.2929 20.7071C13.9024 20.3166 13.9024 19.6834 14.2929 19.2929L18.5858 15L14.2929 10.7071C13.9024 10.3166 13.9024 9.68342 14.2929 9.29289Z" fill="#250116" /><path d="M4 3C4.55228 3 5 3.44772 5 4V11C5 11.7956 5.31607 12.5587 5.87868 13.1213C6.44129 13.6839 7.20435 14 8 14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H8C6.67392 16 5.40215 15.4732 4.46447 14.5355C3.52678 13.5979 3 12.3261 3 11V4C3 3.44772 3.44772 3 4 3Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon