

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21.75 0.75C21.75 0.551088 21.671 0.360322 21.5303 0.21967C21.3897 0.0790176 21.1989 0 21 0C20.8011 0 20.6103 0.0790176 20.4697 0.21967C20.329 0.360322 20.25 0.551088 20.25 0.75V3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5L0 7.5H24V4.5C24 4.10218 23.842 3.72064 23.5607 3.43934C23.2794 3.15804 22.8978 3 22.5 3H21.75V0.75ZM24 9H0V21C0 21.3978 0.158035 21.7794 0.43934 22.0607C0.720644 22.342 1.10218 22.5 1.5 22.5H22.5C22.8978 22.5 23.2794 22.342 23.5607 22.0607C23.842 21.7794 24 21.3978 24 21V9ZM3.75 6C3.94891 6 4.13968 5.92098 4.28033 5.78033C4.42098 5.63968 4.5 5.44891 4.5 5.25C4.5 5.05109 4.42098 4.86032 4.28033 4.71967C4.13968 4.57902 3.94891 4.5 3.75 4.5C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6ZM6.75 6C6.94891 6 7.13968 5.92098 7.28033 5.78033C7.42098 5.63968 7.5 5.44891 7.5 5.25C7.5 5.05109 7.42098 4.86032 7.28033 4.71967C7.13968 4.57902 6.94891 4.5 6.75 4.5C6.55109 4.5 6.36032 4.57902 6.21967 4.71967C6.07902 4.86032 6 5.05109 6 5.25C6 5.44891 6.07902 5.63968 6.21967 5.78033C6.36032 5.92098 6.55109 6 6.75 6ZM18 5.25C18 5.44891 17.921 5.63968 17.7803 5.78033C17.6397 5.92098 17.4489 6 17.25 6C17.0511 6 16.8603 5.92098 16.7197 5.78033C16.579 5.63968 16.5 5.44891 16.5 5.25C16.5 5.05109 16.579 4.86032 16.7197 4.71967C16.8603 4.57902 17.0511 4.5 17.25 4.5C17.4489 4.5 17.6397 4.57902 17.7803 4.71967C17.921 4.86032 18 5.05109 18 5.25ZM20.25 6C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5C20.0511 4.5 19.8603 4.57902 19.7197 4.71967C19.579 4.86032 19.5 5.05109 19.5 5.25C19.5 5.44891 19.579 5.63968 19.7197 5.78033C19.8603 5.92098 20.0511 6 20.25 6ZM9.75 4.5C9.55109 4.5 9.36032 4.57902 9.21967 4.71967C9.07902 4.86032 9 5.05109 9 5.25C9 5.44891 9.07902 5.63968 9.21967 5.78033C9.36032 5.92098 9.55109 6 9.75 6H14.25C14.4489 6 14.6397 5.92098 14.7803 5.78033C14.921 5.63968 15 5.44891 15 5.25C15 5.05109 14.921 4.86032 14.7803 4.71967C14.6397 4.57902 14.4489 4.5 14.25 4.5H9.75ZM6.75 18C7.34674 18 7.91903 17.7629 8.34099 17.341C8.76295 16.919 9 16.3467 9 15.75C9 15.1533 8.76295 14.581 8.34099 14.159C7.91903 13.7371 7.34674 13.5 6.75 13.5C6.15326 13.5 5.58097 13.7371 5.15901 14.159C4.73705 14.581 4.5 15.1533 4.5 15.75C4.5 16.3467 4.73705 16.919 5.15901 17.341C5.58097 17.7629 6.15326 18 6.75 18ZM6.75 19.5C7.74456 19.5 8.69839 19.1049 9.40165 18.4016C10.1049 17.6984 10.5 16.7446 10.5 15.75C10.5 14.7554 10.1049 13.8016 9.40165 13.0983C8.69839 12.3951 7.74456 12 6.75 12C5.75544 12 4.80161 12.3951 4.09835 13.0983C3.39509 13.8016 3 14.7554 3 15.75C3 16.7446 3.39509 17.6984 4.09835 18.4016C4.80161 19.1049 5.75544 19.5 6.75 19.5ZM17.25 18C17.8467 18 18.419 17.7629 18.841 17.341C19.2629 16.919 19.5 16.3467 19.5 15.75C19.5 15.1533 19.2629 14.581 18.841 14.159C18.419 13.7371 17.8467 13.5 17.25 13.5C16.6533 13.5 16.081 13.7371 15.659 14.159C15.2371 14.581 15 15.1533 15 15.75C15 16.3467 15.2371 16.919 15.659 17.341C16.081 17.7629 16.6533 18 17.25 18ZM17.25 19.5C18.2446 19.5 19.1984 19.1049 19.9016 18.4016C20.6049 17.6984 21 16.7446 21 15.75C21 14.7554 20.6049 13.8016 19.9016 13.0983C19.1984 12.3951 18.2446 12 17.25 12C16.2554 12 15.3016 12.3951 14.5983 13.0983C13.8951 13.8016 13.5 14.7554 13.5 15.75C13.5 16.7446 13.8951 17.6984 14.5983 18.4016C15.3016 19.1049 16.2554 19.5 17.25 19.5ZM17.25 16.5C17.4489 16.5 17.6397 16.421 17.7803 16.2803C17.921 16.1397 18 15.9489 18 15.75C18 15.5511 17.921 15.3603 17.7803 15.2197C17.6397 15.079 17.4489 15 17.25 15C17.0511 15 16.8603 15.079 16.7197 15.2197C16.579 15.3603 16.5 15.5511 16.5 15.75C16.5 15.9489 16.579 16.1397 16.7197 16.2803C16.8603 16.421 17.0511 16.5 17.25 16.5ZM7.5 15.75C7.5 15.9489 7.42098 16.1397 7.28033 16.2803C7.13968 16.421 6.94891 16.5 6.75 16.5C6.55109 16.5 6.36032 16.421 6.21967 16.2803C6.07902 16.1397 6 15.9489 6 15.75C6 15.5511 6.07902 15.3603 6.21967 15.2197C6.36032 15.079 6.55109 15 6.75 15C6.94891 15 7.13968 15.079 7.28033 15.2197C7.42098 15.3603 7.5 15.5511 7.5 15.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
