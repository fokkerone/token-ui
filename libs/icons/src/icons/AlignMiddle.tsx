

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9 19.5C9 19.8978 9.15804 20.2794 9.43934 20.5607C9.72064 20.842 10.1022 21 10.5 21H13.5C13.8978 21 14.2794 20.842 14.5607 20.5607C14.842 20.2794 15 19.8978 15 19.5V4.5C15 4.10218 14.842 3.72064 14.5607 3.43934C14.2794 3.15804 13.8978 3 13.5 3H10.5C10.1022 3 9.72064 3.15804 9.43934 3.43934C9.15804 3.72064 9 4.10218 9 4.5V19.5ZM1.5 12C1.5 12.1989 1.57902 12.3897 1.71967 12.5303C1.86032 12.671 2.05109 12.75 2.25 12.75H9V11.25H2.25C2.05109 11.25 1.86032 11.329 1.71967 11.4697C1.57902 11.6103 1.5 11.8011 1.5 12ZM22.5 12C22.5 12.1989 22.421 12.3897 22.2803 12.5303C22.1397 12.671 21.9489 12.75 21.75 12.75H15V11.25H21.75C21.9489 11.25 22.1397 11.329 22.2803 11.4697C22.421 11.6103 22.5 11.8011 22.5 12Z" fill="black" />
    </IconBase>
  );
};

export default Icon