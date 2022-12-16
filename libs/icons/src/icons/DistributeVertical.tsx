

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.5 2.25C1.5 2.44891 1.57902 2.63968 1.71967 2.78033C1.86032 2.92098 2.05109 3 2.25 3H21.75C21.9489 3 22.1397 2.92098 22.2803 2.78033C22.421 2.63968 22.5 2.44891 22.5 2.25C22.5 2.05109 22.421 1.86032 22.2803 1.71967C22.1397 1.57902 21.9489 1.5 21.75 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25ZM1.5 21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5H21.75C21.9489 22.5 22.1397 22.421 22.2803 22.2803C22.421 22.1397 22.5 21.9489 22.5 21.75C22.5 21.5511 22.421 21.3603 22.2803 21.2197C22.1397 21.079 21.9489 21 21.75 21H2.25C2.05109 21 1.86032 21.079 1.71967 21.2197C1.57902 21.3603 1.5 21.5511 1.5 21.75Z" fill="black" /><path d="M3 10.5C3 10.1022 3.15804 9.72064 3.43934 9.43934C3.72064 9.15804 4.10218 9 4.5 9H19.5C19.8978 9 20.2794 9.15804 20.5607 9.43934C20.842 9.72064 21 10.1022 21 10.5V13.5C21 13.8978 20.842 14.2794 20.5607 14.5607C20.2794 14.842 19.8978 15 19.5 15H4.5C4.10218 15 3.72064 14.842 3.43934 14.5607C3.15804 14.2794 3 13.8978 3 13.5V10.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon