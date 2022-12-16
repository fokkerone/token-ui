

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0V0ZM17.25 11.25C17.4489 11.25 17.6397 11.329 17.7803 11.4697C17.921 11.6103 18 11.8011 18 12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H8.5605L11.781 15.969C11.8507 16.0387 11.906 16.1215 11.9438 16.2126C11.9815 16.3037 12.0009 16.4014 12.0009 16.5C12.0009 16.5986 11.9815 16.6963 11.9438 16.7874C11.906 16.8785 11.8507 16.9613 11.781 17.031C11.7113 17.1007 11.6285 17.156 11.5374 17.1938C11.4463 17.2315 11.3486 17.2509 11.25 17.2509C11.1514 17.2509 11.0537 17.2315 10.9626 17.1938C10.8715 17.156 10.7887 17.1007 10.719 17.031L6.219 12.531C6.14916 12.4613 6.09374 12.3786 6.05593 12.2874C6.01812 12.1963 5.99866 12.0987 5.99866 12C5.99866 11.9013 6.01812 11.8037 6.05593 11.7125C6.09374 11.6214 6.14916 11.5387 6.219 11.469L10.719 6.969C10.8598 6.82817 11.0508 6.74905 11.25 6.74905C11.4492 6.74905 11.6402 6.82817 11.781 6.969C11.9218 7.10983 12.0009 7.30084 12.0009 7.5C12.0009 7.69916 11.9218 7.89017 11.781 8.031L8.5605 11.25H17.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
