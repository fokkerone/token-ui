

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.668 7.66799C4.55194 7.96502 4.4665 8.27312 4.413 8.58749C1.899 9.14249 0 11.3325 0 13.977C0 17.049 2.562 19.5 5.6715 19.5H16.5L4.668 7.66799ZM21.726 18.726L7.4055 4.40549C8.76411 3.49252 10.3631 3.00336 12 2.99999C16.035 2.99999 19.3845 5.99999 19.749 9.86849C22.137 10.206 24 12.2055 24 14.6595C23.9974 15.4746 23.7873 16.2757 23.3895 16.9872C22.9916 17.6986 22.4191 18.297 21.726 18.726ZM20.469 21.531L2.469 3.53099L3.531 2.46899L21.531 20.469L20.4705 21.5295L20.469 21.531Z" fill="black" />
    </IconBase>
  );
};

export default Icon