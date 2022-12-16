

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M22.5 3C22.5 2.60218 22.342 2.22064 22.0607 1.93934C21.7794 1.65804 21.3978 1.5 21 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V3ZM0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V3ZM8.781 7.719C8.64017 7.57817 8.44916 7.49905 8.25 7.49905C8.05084 7.49905 7.85983 7.57817 7.719 7.719C7.57817 7.85983 7.49905 8.05084 7.49905 8.25C7.49905 8.44916 7.57817 8.64017 7.719 8.781L13.8645 14.925H9.7125C9.51359 14.925 9.32282 15.004 9.18217 15.1447C9.04152 15.2853 8.9625 15.4761 8.9625 15.675C8.9625 15.8739 9.04152 16.0647 9.18217 16.2053C9.32282 16.346 9.51359 16.425 9.7125 16.425H15.675C15.8739 16.425 16.0647 16.346 16.2053 16.2053C16.346 16.0647 16.425 15.8739 16.425 15.675V9.7125C16.425 9.51359 16.346 9.32282 16.2053 9.18217C16.0647 9.04152 15.8739 8.9625 15.675 8.9625C15.4761 8.9625 15.2853 9.04152 15.1447 9.18217C15.004 9.32282 14.925 9.51359 14.925 9.7125V13.8645L8.781 7.719Z" fill="black" />
    </IconBase>
  );
};

export default Icon
