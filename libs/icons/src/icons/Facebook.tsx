

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M24.001 12.074C24.001 5.40502 18.628 -0.000976562 12.001 -0.000976562C5.37105 0.000523438 -0.00195312 5.40502 -0.00195312 12.0755C-0.00195312 18.101 4.38705 23.096 10.123 24.002V15.5645H7.07805V12.0755H10.126V9.41302C10.126 6.38752 11.9185 4.71652 14.659 4.71652C15.973 4.71652 17.3455 4.95202 17.3455 4.95202V7.92202H15.832C14.3425 7.92202 13.8775 8.85352 13.8775 9.80902V12.074H17.2045L16.6735 15.563H13.876V24.0005C19.612 23.0945 24.001 18.0995 24.001 12.074Z" fill="black" />
    </IconBase>
  );
};

export default Icon
