

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9.75 21.7499V16.4924C9.75 16.1249 10.125 15.7499 10.5 15.7499H13.5C13.875 15.7499 14.25 16.1249 14.25 16.4999V21.7499C14.25 21.9488 14.329 22.1396 14.4697 22.2802C14.6103 22.4209 14.8011 22.4999 15 22.4999H21C21.1989 22.4999 21.3897 22.4209 21.5303 22.2802C21.671 22.1396 21.75 21.9488 21.75 21.7499V11.2499C21.7502 11.1513 21.7309 11.0537 21.6933 10.9626C21.6558 10.8715 21.6006 10.7887 21.531 10.7189L19.5 8.68938V3.74988C19.5 3.55096 19.421 3.3602 19.2803 3.21955C19.1397 3.07889 18.9489 2.99988 18.75 2.99988H17.25C17.0511 2.99988 16.8603 3.07889 16.7197 3.21955C16.579 3.3602 16.5 3.55096 16.5 3.74988V5.68938L12.531 1.71888C12.4613 1.64903 12.3786 1.59362 12.2875 1.55581C12.1963 1.518 12.0987 1.49854 12 1.49854C11.9014 1.49854 11.8037 1.518 11.7126 1.55581C11.6214 1.59362 11.5387 1.64903 11.469 1.71888L2.469 10.7189C2.3994 10.7887 2.34423 10.8715 2.30665 10.9626C2.26908 11.0537 2.24983 11.1513 2.25 11.2499V21.7499C2.25 21.9488 2.32902 22.1396 2.46967 22.2802C2.61032 22.4209 2.80109 22.4999 3 22.4999H9C9.19891 22.4999 9.38968 22.4209 9.53033 22.2802C9.67098 22.1396 9.75 21.9488 9.75 21.7499Z" fill="black" />
    </IconBase>
  );
};

export default Icon
