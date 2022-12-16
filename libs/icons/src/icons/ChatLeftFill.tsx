

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 22.1895C3.15223e-05 22.3379 0.0440889 22.483 0.126596 22.6063C0.209103 22.7297 0.32635 22.8258 0.463499 22.8825C0.600648 22.9392 0.751531 22.9539 0.897054 22.9248C1.04258 22.8957 1.1762 22.8241 1.281 22.719L5.5605 18.4395C5.84174 18.1582 6.22321 18.0001 6.621 18H21C21.7956 18 22.5587 17.6839 23.1213 17.1213C23.6839 16.5587 24 15.7957 24 15V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0Z" fill="black" />
    </IconBase>
  );
};

export default Icon