

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 0L14.5035 1.296L17.2905 1.719L18.5535 4.239L20.559 6.219L20.1 9L20.559 11.781L18.5535 13.761L17.2905 16.281L14.5035 16.704L12 18L9.49648 16.704L6.70948 16.281L5.44648 13.761L3.44098 11.781L3.89998 9L3.44098 6.219L5.44648 4.239L6.70948 1.719L9.49648 1.296L12 0Z" fill="black" /><path d="M6 17.691V24L12 22.5L18 24V17.691L14.973 18.15L12 19.689L9.027 18.15L6 17.691Z" fill="black" />
    </IconBase>
  );
};

export default Icon
