

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6396 3.07902 20.4489 3 20.25 3H11.25C11.0511 3 10.8603 3.07902 10.7196 3.21967C10.579 3.36032 10.5 3.55109 10.5 3.75C10.5 3.94891 10.579 4.13968 10.7196 4.28033C10.8603 4.42098 11.0511 4.5 11.25 4.5H18.4395L3.21897 19.719C3.14924 19.7887 3.09392 19.8715 3.05619 19.9626C3.01845 20.0537 2.99902 20.1514 2.99902 20.25C2.99902 20.3486 3.01845 20.4463 3.05619 20.5374C3.09392 20.6285 3.14924 20.7113 3.21897 20.781C3.2887 20.8507 3.37149 20.906 3.4626 20.9438C3.5537 20.9815 3.65135 21.0009 3.74997 21.0009C3.84859 21.0009 3.94624 20.9815 4.03735 20.9438C4.12845 20.906 4.21124 20.8507 4.28097 20.781L19.5 5.5605V12.75C19.5 12.9489 19.579 13.1397 19.7196 13.2803C19.8603 13.421 20.0511 13.5 20.25 13.5C20.4489 13.5 20.6396 13.421 20.7803 13.2803C20.921 13.1397 21 12.9489 21 12.75V3.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon