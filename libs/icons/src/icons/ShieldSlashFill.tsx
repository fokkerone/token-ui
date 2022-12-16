

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.63949 4.6395C0.941994 11.052 2.96699 15.8295 5.40899 19.023C6.47637 20.4314 7.74904 21.6717 9.18449 22.7025C9.76349 23.112 10.3005 23.4255 10.7565 23.64C11.1765 23.838 11.628 24 12 24C12.372 24 12.822 23.838 13.2435 23.64C13.7932 23.3728 14.3191 23.0592 14.8155 22.7025C15.7577 22.0306 16.6287 21.2641 17.415 20.415L1.63949 4.6395ZM19.962 16.962L4.69199 1.692C5.65974 1.39196 6.63237 1.10792 7.60949 0.84C9.23549 0.3975 10.965 0 12 0C13.035 0 14.7645 0.3975 16.392 0.84C18.057 1.29 19.7355 1.8225 20.7225 2.145C21.1352 2.28128 21.501 2.5312 21.778 2.86605C22.055 3.20091 22.232 3.60711 22.2885 4.038C23.013 9.477 21.7905 13.7745 19.962 16.962ZM20.469 21.531L0.968994 2.031L2.03099 0.969L21.531 20.469L20.4705 21.5295L20.469 21.531Z" fill="black" />
    </IconBase>
  );
};

export default Icon
