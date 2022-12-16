

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0L18 0C18.7956 0 19.5587 0.316071 20.1213 0.87868C20.6839 1.44129 21 2.20435 21 3V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3ZM18 1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V3C19.5 2.60218 19.342 2.22064 19.0607 1.93934C18.7794 1.65804 18.3978 1.5 18 1.5Z" fill="black" /><path d="M9 7.5C9 7.10218 9.15804 6.72064 9.43934 6.43934C9.72064 6.15804 10.1022 6 10.5 6H12.282C13.376 6 14.4252 6.4346 15.1988 7.20818C15.9724 7.98177 16.407 9.03098 16.407 10.125C16.407 11.219 15.9724 12.2682 15.1988 13.0418C14.4252 13.8154 13.376 14.25 12.282 14.25H10.5V17.25C10.5 17.4489 10.421 17.6397 10.2803 17.7803C10.1397 17.921 9.94891 18 9.75 18C9.55109 18 9.36032 17.921 9.21967 17.7803C9.07902 17.6397 9 17.4489 9 17.25V7.5ZM10.5 12.75H12.282C12.9782 12.75 13.6459 12.4734 14.1382 11.9812C14.6304 11.4889 14.907 10.8212 14.907 10.125C14.907 9.42881 14.6304 8.76113 14.1382 8.26884C13.6459 7.77656 12.9782 7.5 12.282 7.5H10.5V12.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon