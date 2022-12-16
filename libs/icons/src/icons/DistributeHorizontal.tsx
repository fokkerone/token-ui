

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21.75 1.5C21.5511 1.5 21.3603 1.57902 21.2197 1.71967C21.079 1.86032 21 2.05109 21 2.25V21.75C21 21.9489 21.079 22.1397 21.2197 22.2803C21.3603 22.421 21.5511 22.5 21.75 22.5C21.9489 22.5 22.1397 22.421 22.2803 22.2803C22.421 22.1397 22.5 21.9489 22.5 21.75V2.25C22.5 2.05109 22.421 1.86032 22.2803 1.71967C22.1397 1.57902 21.9489 1.5 21.75 1.5ZM2.25 1.5C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5C2.44891 22.5 2.63968 22.421 2.78033 22.2803C2.92098 22.1397 3 21.9489 3 21.75V2.25C3 2.05109 2.92098 1.86032 2.78033 1.71967C2.63968 1.57902 2.44891 1.5 2.25 1.5Z" fill="black" /><path d="M9 19.5C9 19.8978 9.15804 20.2794 9.43934 20.5607C9.72064 20.842 10.1022 21 10.5 21H13.5C13.8978 21 14.2794 20.842 14.5607 20.5607C14.842 20.2794 15 19.8978 15 19.5V4.5C15 4.10218 14.842 3.72064 14.5607 3.43934C14.2794 3.15804 13.8978 3 13.5 3H10.5C10.1022 3 9.72064 3.15804 9.43934 3.43934C9.15804 3.72064 9 4.10218 9 4.5V19.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon