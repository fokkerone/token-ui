

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.5 3C17.6935 3 18.8381 3.47411 19.682 4.31802C20.5259 5.16193 21 6.30653 21 7.5V16.5C21 17.6935 20.5259 18.8381 19.682 19.682C18.8381 20.5259 17.6935 21 16.5 21H7.5C6.30653 21 5.16193 20.5259 4.31802 19.682C3.47411 18.8381 3 17.6935 3 16.5V7.5C3 6.30653 3.47411 5.16193 4.31802 4.31802C5.16193 3.47411 6.30653 3 7.5 3H16.5ZM7.5 1.5C5.9087 1.5 4.38258 2.13214 3.25736 3.25736C2.13214 4.38258 1.5 5.9087 1.5 7.5V16.5C1.5 18.0913 2.13214 19.6174 3.25736 20.7426C4.38258 21.8679 5.9087 22.5 7.5 22.5H16.5C18.0913 22.5 19.6174 21.8679 20.7426 20.7426C21.8679 19.6174 22.5 18.0913 22.5 16.5V7.5C22.5 5.9087 21.8679 4.38258 20.7426 3.25736C19.6174 2.13214 18.0913 1.5 16.5 1.5H7.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
