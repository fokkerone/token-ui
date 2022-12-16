

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 22.5C18.627 22.5 24 17.799 24 12C24 6.201 18.627 1.5 12 1.5C5.373 1.5 0 6.201 0 12C0 14.64 1.1145 17.055 2.955 18.9C2.8095 20.424 2.3295 22.095 1.7985 23.349C1.68 23.628 1.9095 23.94 2.208 23.892C5.592 23.337 7.6035 22.485 8.478 22.041C9.62687 22.3474 10.811 22.5017 12 22.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
