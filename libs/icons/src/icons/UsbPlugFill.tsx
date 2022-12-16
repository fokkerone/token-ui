

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9 0.75C9 0.551088 9.07902 0.360322 9.21967 0.21967C9.36032 0.0790176 9.55109 0 9.75 0L15.75 0C15.9489 0 16.1397 0.0790176 16.2803 0.21967C16.421 0.360322 16.5 0.551088 16.5 0.75V6.75H9V0.75ZM10.5 1.5H12V3H10.5V1.5ZM13.5 1.5H15V3H13.5V1.5ZM8.25 7.5C8.05109 7.5 7.86032 7.57902 7.71967 7.71967C7.57902 7.86032 7.5 8.05109 7.5 8.25V15.591C7.49987 16.1836 7.67524 16.763 8.004 17.256L9.249 19.1235C10.065 20.3475 10.5 21.7845 10.5 23.2545C10.5 23.667 10.833 24 11.2455 24H14.2545C14.4522 24 14.6418 23.9215 14.7816 23.7816C14.9215 23.6418 15 23.4522 15 23.2545C15 21.7845 15.435 20.3475 16.251 19.1235L17.496 17.256C17.8248 16.763 18.0001 16.1836 18 15.591V8.25C18 8.05109 17.921 7.86032 17.7803 7.71967C17.6397 7.57902 17.4489 7.5 17.25 7.5H8.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
