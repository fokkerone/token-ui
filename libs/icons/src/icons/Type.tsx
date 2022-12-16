

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3.366 19.6215L4.7805 15.417H9.99L11.406 19.6215H13.29L8.31 5.625H6.483L1.5 19.6215H3.366ZM7.416 7.737L9.51 13.971H5.265L7.365 7.737H7.416ZM21.135 18.2775H21.1875V19.6215H22.8795V12.1875C22.8795 9.9225 21.2085 8.67 18.9105 8.67C16.3065 8.67 15.0255 10.044 14.9115 11.931H16.5735C16.6755 10.854 17.466 10.146 18.849 10.146C20.3055 10.146 21.126 10.926 21.126 12.342V13.4385H18.285C15.8145 13.449 14.502 14.6385 14.502 16.5255C14.502 18.504 15.9375 19.7955 18.0195 19.7955C19.6095 19.7955 20.5935 19.1505 21.1365 18.279L21.135 18.2775ZM18.4905 18.33C17.3625 18.33 16.3065 17.7345 16.3065 16.464C16.3065 15.489 16.9425 14.7915 18.4185 14.7915H21.126V16.0425C21.126 17.3865 19.998 18.33 18.4905 18.33Z" fill="black" />
    </IconBase>
  );
};

export default Icon