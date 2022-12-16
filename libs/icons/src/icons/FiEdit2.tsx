

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19 3.17163C18.7599 3.17163 18.5221 3.21892 18.3003 3.31081C18.0784 3.4027 17.8769 3.53738 17.7071 3.70716L4.39488 17.0194L3.42521 20.5748L6.98067 19.6052L20.2929 6.29295C20.4627 6.12317 20.5974 5.9216 20.6892 5.69977C20.7811 5.47793 20.8284 5.24017 20.8284 5.00006C20.8284 4.75994 20.7811 4.52218 20.6892 4.30035C20.5974 4.07852 20.4627 3.87695 20.2929 3.70716C20.1231 3.53738 19.9215 3.4027 19.6997 3.31081C19.4779 3.21892 19.2401 3.17163 19 3.17163ZM17.5349 1.46305C17.9994 1.27066 18.4972 1.17163 19 1.17163C19.5027 1.17163 20.0006 1.27066 20.4651 1.46305C20.9296 1.65545 21.3516 1.93745 21.7071 2.29295C22.0626 2.64845 22.3446 3.07049 22.537 3.53498C22.7294 3.99947 22.8284 4.4973 22.8284 5.00006C22.8284 5.50281 22.7294 6.00064 22.537 6.46513C22.3446 6.92962 22.0626 7.35166 21.7071 7.70716L8.2071 21.2072C8.08404 21.3302 7.93101 21.419 7.76311 21.4648L2.26311 22.9648C1.9169 23.0592 1.54664 22.9609 1.29289 22.7072C1.03914 22.4534 0.940807 22.0832 1.03523 21.7369L2.53523 16.2369C2.58102 16.069 2.66983 15.916 2.79289 15.793L16.2929 2.29295C16.6484 1.93745 17.0704 1.65545 17.5349 1.46305Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon