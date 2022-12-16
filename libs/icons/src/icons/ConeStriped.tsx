

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M14.955 7.32009L16.3845 13.0366C15.2385 13.3171 13.71 13.5001 12 13.5001C10.29 13.5001 8.76303 13.3171 7.61553 13.0366L9.04502 7.32009C9.95253 7.43559 10.95 7.50009 12 7.50009C13.05 7.50009 14.0475 7.43559 14.955 7.32009ZM14.5875 5.85309L13.455 1.32009C13.077 -0.194912 10.923 -0.194912 10.545 1.32009L9.41252 5.85009C10.2 5.94759 11.073 6.00009 12 6.00009C12.927 6.00009 13.8 5.94609 14.5875 5.85309ZM21.1815 18.7726C21.3394 18.8117 21.4802 18.901 21.5829 19.0271C21.6856 19.1532 21.7445 19.3092 21.7507 19.4717C21.757 19.6342 21.7103 19.7943 21.6176 19.9279C21.525 20.0616 21.3914 20.1615 21.237 20.2126L12.237 23.2126C12.0832 23.2638 11.9169 23.2638 11.763 23.2126L2.76303 20.2126C2.60866 20.1615 2.47509 20.0616 2.38244 19.9279C2.28979 19.7943 2.24307 19.6342 2.24934 19.4717C2.2556 19.3092 2.3145 19.1532 2.41716 19.0271C2.51982 18.901 2.66069 18.8117 2.81853 18.7726L6.40503 17.8756L7.25253 14.4901C8.54553 14.8081 10.1985 14.9986 12 14.9986C13.8015 14.9986 15.4545 14.8081 16.7475 14.4901L17.595 17.8756L21.1815 18.7726Z" fill="black" />
    </IconBase>
  );
};

export default Icon