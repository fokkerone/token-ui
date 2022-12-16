

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5.46898 17.781C5.53864 17.8508 5.62141 17.9062 5.71252 17.944C5.80364 17.9818 5.90132 18.0013 5.99998 18.0013C6.09863 18.0013 6.19631 17.9818 6.28743 17.944C6.37854 17.9062 6.46131 17.8508 6.53098 17.781L12 12.3105L17.469 17.781C17.6098 17.9218 17.8008 18.0009 18 18.0009C18.1991 18.0009 18.3901 17.9218 18.531 17.781C18.6718 17.6401 18.7509 17.4491 18.7509 17.25C18.7509 17.0508 18.6718 16.8598 18.531 16.719L12.531 10.719C12.4613 10.6491 12.3785 10.5937 12.2874 10.5559C12.1963 10.5181 12.0986 10.4986 12 10.4986C11.9013 10.4986 11.8036 10.5181 11.7125 10.5559C11.6214 10.5937 11.5386 10.6491 11.469 10.719L5.46898 16.719C5.39913 16.7886 5.34372 16.8714 5.30591 16.9625C5.2681 17.0536 5.24863 17.1513 5.24863 17.25C5.24863 17.3486 5.2681 17.4463 5.30591 17.5374C5.34372 17.6285 5.39913 17.7113 5.46898 17.781ZM3.59998 7.79995C3.59998 8.12995 3.86998 8.39995 4.19998 8.39995H19.8C19.9591 8.39995 20.1117 8.33674 20.2242 8.22422C20.3368 8.11169 20.4 7.95908 20.4 7.79995C20.4 7.64082 20.3368 7.48821 20.2242 7.37569C20.1117 7.26316 19.9591 7.19995 19.8 7.19995H4.19998C4.04085 7.19995 3.88823 7.26316 3.77571 7.37569C3.66319 7.48821 3.59998 7.64082 3.59998 7.79995Z" fill="black" />
    </IconBase>
  );
};

export default Icon
