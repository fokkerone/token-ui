

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.5 4.5C5.51088 4.5 3.60322 5.29018 2.1967 6.6967C0.790176 8.10322 0 10.0109 0 12C0 13.9891 0.790176 15.8968 2.1967 17.3033C3.60322 18.7098 5.51088 19.5 7.5 19.5H16.5C18.4891 19.5 20.3968 18.7098 21.8033 17.3033C23.2098 15.8968 24 13.9891 24 12C24 10.0109 23.2098 8.10322 21.8033 6.6967C20.3968 5.29018 18.4891 4.5 16.5 4.5H7.5ZM16.5 18C14.9087 18 13.3826 17.3679 12.2574 16.2426C11.1321 15.1174 10.5 13.5913 10.5 12C10.5 10.4087 11.1321 8.88258 12.2574 7.75736C13.3826 6.63214 14.9087 6 16.5 6C18.0913 6 19.6174 6.63214 20.7426 7.75736C21.8679 8.88258 22.5 10.4087 22.5 12C22.5 13.5913 21.8679 15.1174 20.7426 16.2426C19.6174 17.3679 18.0913 18 16.5 18Z" fill="black" />
    </IconBase>
  );
};

export default Icon
