

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.3951 9.882L9.96005 10.3125L9.83705 10.8825L10.5121 11.007C10.9531 11.112 11.0401 11.271 10.9441 11.7105L9.83705 16.9125C9.54605 18.258 9.99455 18.891 11.0491 18.891C11.8666 18.891 12.8161 18.513 13.2466 17.994L13.3786 17.37C13.0785 17.634 12.6406 17.739 12.3496 17.739C11.9371 17.739 11.7871 17.4495 11.8936 16.9395L13.3951 9.882ZM13.5001 6.75C13.5001 7.14782 13.342 7.52936 13.0607 7.81066C12.7794 8.09196 12.3979 8.25 12.0001 8.25C11.6022 8.25 11.2207 8.09196 10.9394 7.81066C10.6581 7.52936 10.5001 7.14782 10.5001 6.75C10.5001 6.35218 10.6581 5.97064 10.9394 5.68934C11.2207 5.40804 11.6022 5.25 12.0001 5.25C12.3979 5.25 12.7794 5.40804 13.0607 5.68934C13.342 5.97064 13.5001 6.35218 13.5001 6.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon