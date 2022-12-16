

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 1.5C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V21C22.5 21.3978 22.342 21.7794 22.0607 22.0607C21.7794 22.342 21.3978 22.5 21 22.5H3C2.60218 22.5 2.22064 22.342 1.93934 22.0607C1.65804 21.7794 1.5 21.3978 1.5 21V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H21ZM3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0Z" fill="black" /><path d="M13.3951 9.882L9.96005 10.3125L9.83705 10.8825L10.5121 11.007C10.9531 11.112 11.0401 11.271 10.9441 11.7105L9.83705 16.9125C9.54605 18.258 9.99455 18.891 11.0491 18.891C11.8666 18.891 12.8161 18.513 13.2466 17.994L13.3786 17.37C13.0785 17.634 12.6406 17.739 12.3496 17.739C11.9371 17.739 11.7871 17.4495 11.8936 16.9395L13.3951 9.882ZM13.5001 6.75C13.5001 7.14782 13.342 7.52936 13.0607 7.81066C12.7794 8.09196 12.3979 8.25 12.0001 8.25C11.6022 8.25 11.2207 8.09196 10.9394 7.81066C10.6581 7.52936 10.5001 7.14782 10.5001 6.75C10.5001 6.35218 10.6581 5.97064 10.9394 5.68934C11.2207 5.40804 11.6022 5.25 12.0001 5.25C12.3979 5.25 12.7794 5.40804 13.0607 5.68934C13.342 5.97064 13.5001 6.35218 13.5001 6.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
