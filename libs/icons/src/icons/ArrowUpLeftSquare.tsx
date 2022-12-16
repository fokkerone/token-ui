

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M22.5 3C22.5 2.60218 22.342 2.22064 22.0607 1.93934C21.7794 1.65804 21.3978 1.5 21 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V3ZM0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V3ZM15.144 16.2045C15.2132 16.2761 15.2959 16.3333 15.3874 16.3726C15.4789 16.4119 15.5774 16.4326 15.6769 16.4334C15.7765 16.4343 15.8753 16.4153 15.9675 16.3776C16.0596 16.3399 16.1434 16.2842 16.2138 16.2138C16.2842 16.1434 16.3399 16.0596 16.3776 15.9675C16.4153 15.8753 16.4343 15.7765 16.4334 15.6769C16.4326 15.5774 16.4119 15.4789 16.3726 15.3874C16.3333 15.2959 16.2761 15.2132 16.2045 15.144L10.0605 9H14.2125C14.4114 9 14.6022 8.92098 14.7428 8.78033C14.8835 8.63968 14.9625 8.44891 14.9625 8.25C14.9625 8.05109 14.8835 7.86032 14.7428 7.71967C14.6022 7.57902 14.4114 7.5 14.2125 7.5H8.25C8.05109 7.5 7.86032 7.57902 7.71967 7.71967C7.57902 7.86032 7.5 8.05109 7.5 8.25V14.2125C7.5 14.4114 7.57902 14.6022 7.71967 14.7428C7.86032 14.8835 8.05109 14.9625 8.25 14.9625C8.44891 14.9625 8.63968 14.8835 8.78033 14.7428C8.92098 14.6022 9 14.4114 9 14.2125V10.0605L15.144 16.2045Z" fill="black" />
    </IconBase>
  );
};

export default Icon