

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.9555 19.4999V5.50342H11.0685V11.4299H4.137V5.50492H2.25V19.4999H4.137V13.0919H11.067V19.4999H12.9555ZM20.949 19.4999V5.50342H19.083L15.75 7.97392V9.87142L18.99 7.52392H19.083V19.4999H20.949Z" fill="black" />
    </IconBase>
  );
};

export default Icon
