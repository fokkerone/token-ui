

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.5 8.25C10.1022 8.25 9.72064 8.40804 9.43934 8.68934C9.15804 8.97064 9 9.35218 9 9.75V19.5C9 19.6989 9.07902 19.8897 9.21967 20.0303C9.36032 20.171 9.55109 20.25 9.75 20.25C9.94891 20.25 10.1397 20.171 10.2803 20.0303C10.421 19.8897 10.5 19.6989 10.5 19.5V16.5H12.282C13.376 16.5 14.4252 16.0654 15.1988 15.2918C15.9724 14.5182 16.407 13.469 16.407 12.375C16.407 11.281 15.9724 10.2318 15.1988 9.45818C14.4252 8.6846 13.376 8.25 12.282 8.25H10.5ZM12.282 15H10.5V9.75H12.282C12.6267 9.75 12.9681 9.8179 13.2865 9.94982C13.605 10.0817 13.8944 10.2751 14.1382 10.5188C14.3819 10.7626 14.5753 11.052 14.7072 11.3705C14.8391 11.6889 14.907 12.0303 14.907 12.375C14.907 12.7197 14.8391 13.0611 14.7072 13.3795C14.5753 13.698 14.3819 13.9874 14.1382 14.2312C13.8944 14.4749 13.605 14.6683 13.2865 14.8002C12.9681 14.9321 12.6267 15 12.282 15Z" fill="black" /><path d="M21 6.75V21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0L14.25 0L21 6.75ZM16.5 6.75C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V21C4.5 21.3978 4.65804 21.7794 4.93934 22.0607C5.22064 22.342 5.60218 22.5 6 22.5H18C18.3978 22.5 18.7794 22.342 19.0607 22.0607C19.342 21.7794 19.5 21.3978 19.5 21V6.75H16.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
