

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 6.75C0 6.15326 0.237053 5.58097 0.65901 5.15901C1.08097 4.73705 1.65326 4.5 2.25 4.5H21.75C22.3467 4.5 22.919 4.73705 23.341 5.15901C23.7629 5.58097 24 6.15326 24 6.75V9C24 9.19891 23.921 9.38968 23.7803 9.53033C23.6397 9.67098 23.4489 9.75 23.25 9.75C22.6533 9.75 22.081 9.98705 21.659 10.409C21.2371 10.831 21 11.4033 21 12C21 12.5967 21.2371 13.169 21.659 13.591C22.081 14.0129 22.6533 14.25 23.25 14.25C23.4489 14.25 23.6397 14.329 23.7803 14.4697C23.921 14.6103 24 14.8011 24 15V17.25C24 17.8467 23.7629 18.419 23.341 18.841C22.919 19.2629 22.3467 19.5 21.75 19.5H2.25C1.65326 19.5 1.08097 19.2629 0.65901 18.841C0.237053 18.419 0 17.8467 0 17.25L0 15C0 14.8011 0.0790176 14.6103 0.21967 14.4697C0.360322 14.329 0.551088 14.25 0.75 14.25C1.34674 14.25 1.91903 14.0129 2.34099 13.591C2.76295 13.169 3 12.5967 3 12C3 11.4033 2.76295 10.831 2.34099 10.409C1.91903 9.98705 1.34674 9.75 0.75 9.75C0.551088 9.75 0.360322 9.67098 0.21967 9.53033C0.0790176 9.38968 0 9.19891 0 9V6.75ZM6 8.25C6 8.05109 6.07902 7.86032 6.21967 7.71967C6.36032 7.57902 6.55109 7.5 6.75 7.5H17.25C17.4489 7.5 17.6397 7.57902 17.7803 7.71967C17.921 7.86032 18 8.05109 18 8.25C18 8.44891 17.921 8.63968 17.7803 8.78033C17.6397 8.92098 17.4489 9 17.25 9H6.75C6.55109 9 6.36032 8.92098 6.21967 8.78033C6.07902 8.63968 6 8.44891 6 8.25ZM6 15.75C6 15.5511 6.07902 15.3603 6.21967 15.2197C6.36032 15.079 6.55109 15 6.75 15H17.25C17.4489 15 17.6397 15.079 17.7803 15.2197C17.921 15.3603 18 15.5511 18 15.75C18 15.9489 17.921 16.1397 17.7803 16.2803C17.6397 16.421 17.4489 16.5 17.25 16.5H6.75C6.55109 16.5 6.36032 16.421 6.21967 16.2803C6.07902 16.1397 6 15.9489 6 15.75ZM6 12C6 11.6022 6.15804 11.2206 6.43934 10.9393C6.72064 10.658 7.10218 10.5 7.5 10.5H16.5C16.8978 10.5 17.2794 10.658 17.5607 10.9393C17.842 11.2206 18 11.6022 18 12C18 12.3978 17.842 12.7794 17.5607 13.0607C17.2794 13.342 16.8978 13.5 16.5 13.5H7.5C7.10218 13.5 6.72064 13.342 6.43934 13.0607C6.15804 12.7794 6 12.3978 6 12Z" fill="black" />
    </IconBase>
  );
};

export default Icon
