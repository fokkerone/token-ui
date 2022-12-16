

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.5 4.5C4.10218 4.5 3.72064 4.65804 3.43934 4.93934C3.15804 5.22064 3 5.60218 3 6V7.9395L0.4395 10.5C0.158176 10.7812 8.49561e-05 11.1627 0 11.5605L0 18C0 18.3978 0.158035 18.7794 0.43934 19.0607C0.720644 19.342 1.10218 19.5 1.5 19.5H22.5C22.8978 19.5 23.2794 19.342 23.5607 19.0607C23.842 18.7794 24 18.3978 24 18V11.5605C23.9999 11.1627 23.8418 10.7812 23.5605 10.5L21 7.9395V6C21 5.60218 20.842 5.22064 20.5607 4.93934C20.2794 4.65804 19.8978 4.5 19.5 4.5H4.5ZM4.5 6H19.5V7.9395C19.5001 8.33729 19.6582 8.71876 19.9395 9L22.5 11.5605V18H1.5V11.5605L4.0605 9C4.34182 8.71876 4.49992 8.33729 4.5 7.9395V6ZM5.25 12C5.05109 12 4.86032 12.079 4.71967 12.2197C4.57902 12.3603 4.5 12.5511 4.5 12.75V14.25C4.5 14.4489 4.57902 14.6397 4.71967 14.7803C4.86032 14.921 5.05109 15 5.25 15H18.75C18.9489 15 19.1397 14.921 19.2803 14.7803C19.421 14.6397 19.5 14.4489 19.5 14.25V12.75C19.5 12.5511 19.421 12.3603 19.2803 12.2197C19.1397 12.079 18.9489 12 18.75 12H5.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
