

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.5745 0.6525C12.7045 -0.2175 11.2945 -0.2175 10.4245 0.6525L0.653477 10.425C-0.216523 11.295 -0.216523 12.7035 0.653477 13.572L10.4275 23.346C11.2975 24.216 12.706 24.216 13.5745 23.346L23.3485 13.572C24.2185 12.702 24.2185 11.2935 23.3485 10.425L13.5745 0.6525ZM11.9995 1.4835C12.19 1.4835 12.379 1.557 12.5245 1.701L22.2985 11.475C22.4377 11.6142 22.5159 11.8031 22.5159 12C22.5159 12.1969 22.4377 12.3858 22.2985 12.525L12.5245 22.299C12.4556 22.3681 12.3738 22.4229 12.2837 22.4602C12.1936 22.4975 12.097 22.5167 11.9995 22.5165V1.4835Z" fill="black" />
    </IconBase>
  );
};

export default Icon