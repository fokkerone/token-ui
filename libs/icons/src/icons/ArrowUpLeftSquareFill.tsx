

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0ZM15.144 16.2045L9 10.0605V14.2125C9 14.4114 8.92098 14.6022 8.78033 14.7428C8.63968 14.8835 8.44891 14.9625 8.25 14.9625C8.05109 14.9625 7.86032 14.8835 7.71967 14.7428C7.57902 14.6022 7.5 14.4114 7.5 14.2125V8.25C7.5 8.05109 7.57902 7.86032 7.71967 7.71967C7.86032 7.57902 8.05109 7.5 8.25 7.5H14.2125C14.4114 7.5 14.6022 7.57902 14.7428 7.71967C14.8835 7.86032 14.9625 8.05109 14.9625 8.25C14.9625 8.44891 14.8835 8.63968 14.7428 8.78033C14.6022 8.92098 14.4114 9 14.2125 9H10.0605L16.2045 15.144C16.2761 15.2132 16.3333 15.2959 16.3726 15.3874C16.4119 15.4789 16.4326 15.5774 16.4334 15.6769C16.4343 15.7765 16.4153 15.8753 16.3776 15.9675C16.3399 16.0596 16.2842 16.1434 16.2138 16.2138C16.1434 16.2842 16.0596 16.3399 15.9675 16.3776C15.8753 16.4153 15.7765 16.4343 15.6769 16.4334C15.5774 16.4326 15.4789 16.4119 15.3874 16.3726C15.2959 16.3333 15.2132 16.2761 15.144 16.2045Z" fill="black" />
    </IconBase>
  );
};

export default Icon
