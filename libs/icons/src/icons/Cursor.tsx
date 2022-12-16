

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21.123 3.27297C21.2302 3.38027 21.3024 3.51757 21.33 3.66673C21.3576 3.8159 21.3393 3.96992 21.2775 4.10847L12.792 23.2005C12.7327 23.334 12.6357 23.4473 12.5129 23.5265C12.3901 23.6056 12.2469 23.6472 12.1008 23.6461C11.9547 23.645 11.8121 23.6012 11.6906 23.5202C11.569 23.4392 11.4738 23.3244 11.4165 23.19L8.35501 16.041L1.20451 12.978C1.0706 12.9204 0.956373 12.825 0.875807 12.7035C0.795241 12.582 0.751825 12.4397 0.750871 12.2939C0.749916 12.1481 0.791463 12.0053 0.870431 11.8827C0.949399 11.7602 1.06236 11.6633 1.19551 11.604L20.2875 3.11847C20.4259 3.05704 20.5796 3.03893 20.7284 3.0665C20.8773 3.09408 21.0143 3.16606 21.1215 3.27297H21.123ZM3.37501 12.276L9.22051 14.781C9.39728 14.8572 9.53799 14.9984 9.61351 15.1755L12.1185 21.021L19.1145 5.27997L3.37501 12.276Z" fill="black" />
    </IconBase>
  );
};

export default Icon