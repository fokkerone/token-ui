

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.75 17.2499C12.75 17.4488 12.671 17.6396 12.5303 17.7802C12.3896 17.9209 12.1989 17.9999 12 17.9999C11.8011 17.9999 11.6103 17.9209 11.4696 17.7802C11.329 17.6396 11.25 17.4488 11.25 17.2499V11.5604L9.53097 13.2809C9.39014 13.4217 9.19913 13.5008 8.99997 13.5008C8.80081 13.5008 8.6098 13.4217 8.46897 13.2809C8.32814 13.14 8.24902 12.949 8.24902 12.7499C8.24902 12.5507 8.32814 12.3597 8.46897 12.2189L11.469 9.21888C11.5386 9.14903 11.6214 9.09362 11.7125 9.05581C11.8036 9.018 11.9013 8.99854 12 8.99854C12.0986 8.99854 12.1963 9.018 12.2874 9.05581C12.3785 9.09362 12.4613 9.14903 12.531 9.21888L15.531 12.2189C15.6718 12.3597 15.7509 12.5507 15.7509 12.7499C15.7509 12.949 15.6718 13.14 15.531 13.2809C15.3901 13.4217 15.1991 13.5008 15 13.5008C14.8008 13.5008 14.6098 13.4217 14.469 13.2809L12.75 11.5604V17.2499Z" fill="black" /><path d="M21 21V6.75L14.25 0H6C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21ZM14.25 4.5C14.25 5.09674 14.4871 5.66903 14.909 6.09099C15.331 6.51295 15.9033 6.75 16.5 6.75H19.5V21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5H6C5.60218 22.5 5.22064 22.342 4.93934 22.0607C4.65804 21.7794 4.5 21.3978 4.5 21V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5H14.25V4.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon