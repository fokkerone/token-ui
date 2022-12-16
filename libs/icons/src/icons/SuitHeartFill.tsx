

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6 1.5C9.315 1.5 12 4.1325 12 7.38C12 4.1325 14.685 1.5 18 1.5C21.315 1.5 24 4.1325 24 7.38C24 12.2745 19.149 14.001 12.588 21.792C12.5158 21.8776 12.4257 21.9463 12.3242 21.9935C12.2226 22.0407 12.112 22.0651 12 22.0651C11.888 22.0651 11.7774 22.0407 11.6758 21.9935C11.5743 21.9463 11.4842 21.8776 11.412 21.792C4.851 14.001 0 12.2745 0 7.38C0 4.1325 2.685 1.5 6 1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
