

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H6.75C6.98287 18 7.21254 18.0542 7.42082 18.1584C7.6291 18.2625 7.81028 18.4137 7.95 18.6L10.8 22.3995C10.9397 22.5858 11.1209 22.737 11.3292 22.8411C11.5375 22.9453 11.7671 22.9995 12 22.9995C12.2329 22.9995 12.4625 22.9453 12.6708 22.8411C12.8791 22.737 13.0603 22.5858 13.2 22.3995L16.05 18.6C16.1897 18.4137 16.3709 18.2625 16.5792 18.1584C16.7875 18.0542 17.0171 18 17.25 18H21C21.7956 18 22.5587 17.6839 23.1213 17.1213C23.6839 16.5587 24 15.7956 24 15V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0Z" fill="black" />
    </IconBase>
  );
};

export default Icon