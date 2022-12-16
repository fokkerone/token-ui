

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.63949 4.6395C0.941994 11.052 2.96699 15.8295 5.40899 19.023C6.47637 20.4314 7.74904 21.6717 9.18449 22.7025C9.76349 23.112 10.3005 23.4255 10.7565 23.64C11.1765 23.838 11.628 24 12 24C12.372 24 12.822 23.838 13.2435 23.64C13.7932 23.3728 14.3191 23.0592 14.8155 22.7025C15.7577 22.0306 16.6287 21.2641 17.415 20.415L16.2975 19.2975C15.5821 20.0727 14.7889 20.7724 13.9305 21.3855C13.4115 21.7515 12.9525 22.0155 12.591 22.185C12.411 22.2705 12.264 22.3275 12.1515 22.362C12.1023 22.3793 12.0516 22.3918 12 22.3995C11.949 22.3912 11.8989 22.3787 11.85 22.362C11.6992 22.313 11.5518 22.2539 11.409 22.185C10.9407 21.9569 10.4926 21.6894 10.0695 21.3855C8.76511 20.4466 7.60877 19.3176 6.63899 18.036C4.57949 15.342 2.81849 11.391 3.08999 6.09L1.63949 4.6395ZM5.96999 2.97L4.69199 1.692C5.65903 1.39082 6.63118 1.10627 7.60799 0.8385C9.23549 0.399 10.965 0 12 0C13.035 0 14.7645 0.3975 16.392 0.84C18.057 1.29 19.7355 1.8225 20.7225 2.145C21.1352 2.28128 21.501 2.5312 21.778 2.86605C22.055 3.20091 22.232 3.60711 22.2885 4.038C23.013 9.477 21.7905 13.7745 19.962 16.962L18.807 15.807C20.37 12.9345 21.387 9.1035 20.742 4.254C20.7229 4.11978 20.6664 3.99367 20.5788 3.89017C20.4912 3.78668 20.3762 3.71002 20.247 3.669C19.272 3.3495 17.622 2.829 15.993 2.3865C14.328 1.935 12.7965 1.6005 12 1.6005C11.205 1.6005 9.67199 1.935 8.00699 2.3865C7.32576 2.57185 6.64719 2.76687 5.97149 2.9715L5.96999 2.97ZM20.469 21.531L0.968994 2.031L2.03099 0.969L21.531 20.469L20.4705 21.5295L20.469 21.531Z" fill="black" />
    </IconBase>
  );
};

export default Icon