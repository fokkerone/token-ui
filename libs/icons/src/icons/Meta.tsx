

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.3255 7.8645C13.7175 5.982 15.2565 4.5 17.2245 4.5C20.94 4.5 24 9.2295 24.0015 14.8605C24.0015 18.2955 22.5225 20.448 19.866 20.448C17.5515 20.448 16.2735 19.149 13.98 15.312L12.9795 13.6275L12.8025 13.332C12.5416 12.891 12.2766 12.4525 12.0075 12.0165L10.2405 15.1365C7.731 19.524 6.318 20.448 4.356 20.448C1.629 20.448 0 18.3255 0 14.9595C0 9.582 2.9925 4.5 6.897 4.5C7.3755 4.5 7.8345 4.5585 8.283 4.683C8.748 4.812 9.1995 5.013 9.6525 5.2935C10.518 5.832 11.3835 6.666 12.3255 7.8645ZM14.5995 11.2005C14.2215 10.5855 13.8585 10.02 13.509 9.501L13.5 9.489C14.7675 7.5315 15.8145 6.558 17.058 6.558C19.6425 6.558 21.711 10.3635 21.711 15.0375C21.711 16.8195 21.126 17.853 19.9185 17.853C18.759 17.853 18.2055 17.088 16.0035 13.548L14.598 11.2005H14.5995ZM7.269 7.134C8.3565 7.284 9.3465 8.085 10.779 10.1355C9.95245 11.4012 9.13493 12.6727 8.3265 13.95C6.291 17.139 5.5875 17.8545 4.455 17.8545C3.2895 17.8545 2.595 16.8315 2.595 15.0045C2.595 11.1015 4.542 7.1085 6.864 7.1085C7.0005 7.1085 7.1355 7.1175 7.269 7.1355V7.134Z" fill="black" />
    </IconBase>
  );
};

export default Icon
