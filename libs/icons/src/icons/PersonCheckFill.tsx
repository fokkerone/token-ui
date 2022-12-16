

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M23.781 7.71888C23.8508 7.78854 23.9062 7.87131 23.944 7.96242C23.9818 8.05354 24.0013 8.15122 24.0013 8.24988C24.0013 8.34853 23.9818 8.44621 23.944 8.53733C23.9062 8.62844 23.8508 8.71121 23.781 8.78088L19.281 13.2809C19.2113 13.3507 19.1285 13.4061 19.0374 13.4439C18.9463 13.4818 18.8486 13.5012 18.75 13.5012C18.6513 13.5012 18.5536 13.4818 18.4625 13.4439C18.3714 13.4061 18.2886 13.3507 18.219 13.2809L15.969 11.0309C15.8281 10.89 15.749 10.699 15.749 10.4999C15.749 10.3007 15.8281 10.1097 15.969 9.96888C16.1098 9.82805 16.3008 9.74893 16.5 9.74893C16.6991 9.74893 16.8901 9.82805 17.031 9.96888L18.75 11.6894L22.719 7.71888C22.7886 7.64903 22.8714 7.59362 22.9625 7.55581C23.0536 7.518 23.1513 7.49854 23.25 7.49854C23.3486 7.49854 23.4463 7.518 23.5374 7.55581C23.6285 7.59362 23.7113 7.64903 23.781 7.71888Z" fill="black" /><path d="M1.5 21C1.5 21 0 21 0 19.5C0 18 1.5 13.5 9 13.5C16.5 13.5 18 18 18 19.5C18 21 16.5 21 16.5 21H1.5ZM9 12C10.1935 12 11.3381 11.5259 12.182 10.682C13.0259 9.83807 13.5 8.69347 13.5 7.5C13.5 6.30653 13.0259 5.16193 12.182 4.31802C11.3381 3.47411 10.1935 3 9 3C7.80653 3 6.66193 3.47411 5.81802 4.31802C4.97411 5.16193 4.5 6.30653 4.5 7.5C4.5 8.69347 4.97411 9.83807 5.81802 10.682C6.66193 11.5259 7.80653 12 9 12Z" fill="black" />
    </IconBase>
  );
};

export default Icon