

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M22.7071 1.29289C23.0976 1.68342 23.0976 2.31658 22.7071 2.70711L11.7071 13.7071C11.3166 14.0976 10.6834 14.0976 10.2929 13.7071C9.90237 13.3166 9.90237 12.6834 10.2929 12.2929L21.2929 1.29289C21.6834 0.902369 22.3166 0.902369 22.7071 1.29289Z" fill="#250116" /><path d="M22.7071 1.29292C22.9787 1.56456 23.0708 1.96779 22.9439 2.33038L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59386 9.91384C1.21918 9.74731 0.984115 9.36894 1.00083 8.95926C1.01754 8.54959 1.28265 8.19162 1.66965 8.05617L21.6696 1.05617C22.0322 0.929264 22.4355 1.02128 22.7071 1.29292ZM4.71107 9.11063L11.4061 12.0862C11.6324 12.1868 11.8133 12.3677 11.9138 12.5939L14.8894 19.289L20.37 3.63L4.71107 9.11063Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon
