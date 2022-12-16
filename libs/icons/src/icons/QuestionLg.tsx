

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.71252 8.187C6.28652 8.187 5.94152 7.8315 6.00752 7.4115C6.42002 4.86 8.36402 3 11.7375 3C15.1125 3 17.388 5.04 17.388 7.8225C17.388 9.8385 16.3905 11.2545 14.703 12.282C13.053 13.2705 12.582 13.959 12.582 15.297V15.342C12.582 15.5409 12.503 15.7317 12.3623 15.8723C12.2217 16.013 12.0309 16.092 11.832 16.092H10.677C10.4794 16.092 10.2898 16.014 10.1493 15.875C10.0089 15.736 9.92899 15.5471 9.92702 15.3495L9.92252 15.0495C9.85802 13.218 10.638 12.048 12.39 10.9815C13.935 10.0335 14.4855 9.279 14.4855 7.9395C14.4855 6.471 13.3485 5.3925 11.5965 5.3925C10.083 5.3925 9.03152 6.186 8.68952 7.4955C8.59052 7.8765 8.27252 8.187 7.87952 8.187H6.71402H6.71252ZM11.244 21C12.177 21 12.8865 20.289 12.8865 19.365C12.8865 18.438 12.177 17.727 11.244 17.727C10.335 17.727 9.61352 18.438 9.61352 19.3635C9.61352 20.289 10.335 21 11.244 21Z" fill="black" />
    </IconBase>
  );
};

export default Icon
