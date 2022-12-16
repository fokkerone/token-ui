

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M18.0308 2.4429V2.44284L17.8763 2.4429L17.0308 2.44284L17.0306 2.44308L14.3874 2.44363L12.0132 6.39957L9.62958 2.44363L6.98364 2.44263L6.9834 2.44226H2.27167V2.44281L0.832275 2.44272L12.029 21.5578L23.1677 2.44306L18.0308 2.4429ZM12.025 17.593L4.32197 4.44229H7.14563L12.0312 12.8494L16.878 4.44229H19.6874L12.025 17.593Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
