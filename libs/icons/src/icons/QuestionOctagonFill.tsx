

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M17.19 0.219C17.0494 0.0787966 16.859 4.21785e-05 16.6605 0L7.3395 0C7.14097 4.21785e-05 6.95056 0.0787966 6.81 0.219L0.219 6.81C0.0787966 6.95056 4.21785e-05 7.14097 0 7.3395L0 16.6605C4.21785e-05 16.859 0.0787966 17.0494 0.219 17.19L6.81 23.781C6.95056 23.9212 7.14097 24 7.3395 24H16.6605C16.859 24 17.0494 23.9212 17.19 23.781L23.781 17.19C23.9212 17.0494 24 16.859 24 16.6605V7.3395C24 7.14097 23.9212 6.95056 23.781 6.81L17.19 0.219ZM8.244 9.0495C8.19565 9.05016 8.14767 9.04094 8.103 9.02242C8.05834 9.00389 8.01792 8.97645 7.98422 8.94177C7.95052 8.90709 7.92425 8.8659 7.90702 8.82072C7.88979 8.77554 7.88196 8.72731 7.884 8.679C8.025 6.1365 10.1055 5.25 12.0075 5.25C14.1015 5.25 16.0155 6.345 16.0155 8.61C16.0155 10.23 15.063 11.001 14.1495 11.6955C13.044 12.534 12.6345 12.8475 12.6345 13.9245V14.082C12.6345 14.1815 12.595 14.2768 12.5247 14.3472C12.4543 14.4175 12.359 14.457 12.2595 14.457H11.0445C10.9461 14.457 10.8516 14.4183 10.7814 14.3493C10.7113 14.2803 10.6711 14.1864 10.6695 14.088L10.6635 13.7625C10.6065 12.372 11.406 11.5155 12.4155 10.782C13.3005 10.116 13.863 9.678 13.863 8.7255C13.863 7.488 12.921 6.9735 11.892 6.9735C10.6875 6.9735 10.0125 7.6905 9.879 8.6745C9.852 8.88 9.687 9.0495 9.48 9.0495H8.2425H8.244ZM11.7315 18.714C10.8555 18.714 10.218 18.123 10.218 17.3235C10.218 16.4955 10.8555 15.9135 11.733 15.9135C12.6465 15.9135 13.275 16.4955 13.275 17.3235C13.275 18.123 12.645 18.714 11.7315 18.714Z" fill="black" />
    </IconBase>
  );
};

export default Icon