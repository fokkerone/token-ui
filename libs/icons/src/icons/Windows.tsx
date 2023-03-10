

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9.8325 2.0625L0 3.3555V11.5305H9.8325V2.0625ZM0 20.6925L9.8325 22.092V12.4695H0V20.6925ZM10.917 12.5925L10.956 22.1595L24 24V12.5925H10.917ZM24 0L10.995 1.866V11.487H24V0Z" fill="black" />
    </IconBase>
  );
};

export default Icon
