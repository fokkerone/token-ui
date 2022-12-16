

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.01 12C16.01 11.4477 16.4577 11 17.01 11H22.96C23.5123 11 23.96 11.4477 23.96 12C23.96 12.5523 23.5123 13 22.96 13H17.01C16.4577 13 16.01 12.5523 16.01 12Z" fill="#250116" /><path d="M0.0500031 12C0.0500031 11.4477 0.497718 11 1.05 11H7C7.55229 11 8 11.4477 8 12C8 12.5523 7.55229 13 7 13H1.05C0.497718 13 0.0500031 12.5523 0.0500031 12Z" fill="#250116" /><path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon