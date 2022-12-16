

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.455 2.025C4.59583 1.86035 4.77066 1.72817 4.96745 1.63754C5.16425 1.54691 5.37834 1.49999 5.595 1.5H18.405C18.6217 1.49999 18.8358 1.54691 19.0325 1.63754C19.2293 1.72817 19.4042 1.86035 19.545 2.025L23.4585 6.591C23.8079 6.99875 24 7.51802 24 8.055V8.4375C24.0001 9.17996 23.7682 9.9039 23.3367 10.5081C22.9053 11.1124 22.2958 11.5667 21.5935 11.8076C20.8912 12.0485 20.1312 12.064 19.4197 11.8519C18.7082 11.6398 18.0807 11.2107 17.625 10.6245C17.2922 11.0532 16.8657 11.4 16.3783 11.6384C15.8908 11.8768 15.3552 12.0005 14.8125 12C14.2698 12.0006 13.7342 11.877 13.2467 11.6385C12.7592 11.4001 12.3327 11.0532 12 10.6245C11.6673 11.0532 11.2408 11.4001 10.7533 11.6385C10.2658 11.877 9.73019 12.0006 9.1875 12C8.64481 12.0006 8.10919 11.877 7.62168 11.6385C7.13416 11.4001 6.70771 11.0532 6.375 10.6245C5.91929 11.2107 5.29182 11.6398 4.58031 11.8519C3.86879 12.064 3.10877 12.0485 2.40649 11.8076C1.7042 11.5667 1.09473 11.1124 0.663273 10.5081C0.231813 9.9039 -8.18979e-05 9.17996 2.16968e-08 8.4375V8.055C1.89113e-05 7.51802 0.192085 6.99875 0.5415 6.591L4.4565 2.0235L4.455 2.025ZM7.125 8.4375C7.125 8.98451 7.3423 9.50911 7.72909 9.89591C8.11589 10.2827 8.64049 10.5 9.1875 10.5C9.73451 10.5 10.2591 10.2827 10.6459 9.89591C11.0327 9.50911 11.25 8.98451 11.25 8.4375C11.25 8.23859 11.329 8.04782 11.4697 7.90717C11.6103 7.76652 11.8011 7.6875 12 7.6875C12.1989 7.6875 12.3897 7.76652 12.5303 7.90717C12.671 8.04782 12.75 8.23859 12.75 8.4375C12.75 8.98451 12.9673 9.50911 13.3541 9.89591C13.7409 10.2827 14.2655 10.5 14.8125 10.5C15.3595 10.5 15.8841 10.2827 16.2709 9.89591C16.6577 9.50911 16.875 8.98451 16.875 8.4375C16.875 8.23859 16.954 8.04782 17.0947 7.90717C17.2353 7.76652 17.4261 7.6875 17.625 7.6875C17.8239 7.6875 18.0147 7.76652 18.1553 7.90717C18.296 8.04782 18.375 8.23859 18.375 8.4375C18.375 8.98451 18.5923 9.50911 18.9791 9.89591C19.3659 10.2827 19.8905 10.5 20.4375 10.5C20.9845 10.5 21.5091 10.2827 21.8959 9.89591C22.2827 9.50911 22.5 8.98451 22.5 8.4375V8.055C22.5 7.87624 22.4362 7.70336 22.32 7.5675L18.405 3H5.595L1.68 7.5675C1.56382 7.70336 1.49999 7.87624 1.5 8.055V8.4375C1.5 8.98451 1.7173 9.50911 2.10409 9.89591C2.49089 10.2827 3.01549 10.5 3.5625 10.5C4.10951 10.5 4.63411 10.2827 5.02091 9.89591C5.4077 9.50911 5.625 8.98451 5.625 8.4375C5.625 8.23859 5.70402 8.04782 5.84467 7.90717C5.98532 7.76652 6.17609 7.6875 6.375 7.6875C6.57391 7.6875 6.76468 7.76652 6.90533 7.90717C7.04598 8.04782 7.125 8.23859 7.125 8.4375ZM2.25 12.75C2.44891 12.75 2.63968 12.829 2.78033 12.9697C2.92098 13.1103 3 13.3011 3 13.5V22.5H21V13.5C21 13.3011 21.079 13.1103 21.2197 12.9697C21.3603 12.829 21.5511 12.75 21.75 12.75C21.9489 12.75 22.1397 12.829 22.2803 12.9697C22.421 13.1103 22.5 13.3011 22.5 13.5V22.5H23.25C23.4489 22.5 23.6397 22.579 23.7803 22.7197C23.921 22.8603 24 23.0511 24 23.25C24 23.4489 23.921 23.6397 23.7803 23.7803C23.6397 23.921 23.4489 24 23.25 24H0.75C0.551088 24 0.360322 23.921 0.21967 23.7803C0.0790177 23.6397 2.16968e-08 23.4489 2.16968e-08 23.25C2.16968e-08 23.0511 0.0790177 22.8603 0.21967 22.7197C0.360322 22.579 0.551088 22.5 0.75 22.5H1.5V13.5C1.5 13.3011 1.57902 13.1103 1.71967 12.9697C1.86032 12.829 2.05109 12.75 2.25 12.75ZM5.25 13.5C5.44891 13.5 5.63968 13.579 5.78033 13.7197C5.92098 13.8603 6 14.0511 6 14.25V19.5H18V14.25C18 14.0511 18.079 13.8603 18.2197 13.7197C18.3603 13.579 18.5511 13.5 18.75 13.5C18.9489 13.5 19.1397 13.579 19.2803 13.7197C19.421 13.8603 19.5 14.0511 19.5 14.25V19.5C19.5 19.8978 19.342 20.2794 19.0607 20.5607C18.7794 20.842 18.3978 21 18 21H6C5.60218 21 5.22064 20.842 4.93934 20.5607C4.65804 20.2794 4.5 19.8978 4.5 19.5V14.25C4.5 14.0511 4.57902 13.8603 4.71967 13.7197C4.86032 13.579 5.05109 13.5 5.25 13.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
