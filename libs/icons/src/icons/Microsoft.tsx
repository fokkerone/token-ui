

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.193 0H0V10.785H11.193V0ZM24 0H12.807V10.785H24V0ZM11.193 12.3165H0V24H11.193V12.3165ZM24 12.3165H12.807V24H24V12.3165Z" fill="black" />
    </IconBase>
  );
};

export default Icon
