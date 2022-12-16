

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.533 2.34917C10.6814 2.09052 10.8955 1.87562 11.1536 1.72618C11.4117 1.57674 11.7047 1.49805 12.003 1.49805C12.3012 1.49805 12.5942 1.57674 12.8523 1.72618C13.1104 1.87562 13.3245 2.09052 13.473 2.34917L23.7585 19.8497C24.444 21.0167 23.6205 22.5002 22.2885 22.5002H1.71595C0.382454 22.5002 -0.439546 21.0152 0.245954 19.8497L10.533 2.34917Z" fill="black" />
    </IconBase>
  );
};

export default Icon
