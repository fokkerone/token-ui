

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790176 0.551088 0 0.75 0L23.25 0C23.4489 0 23.6397 0.0790176 23.7803 0.21967C23.921 0.360322 24 0.551088 24 0.75V5.25C24 5.44891 23.921 5.63968 23.7803 5.78033C23.6397 5.92098 23.4489 6 23.25 6H21V9H23.25C23.4489 9 23.6397 9.07902 23.7803 9.21967C23.921 9.36032 24 9.55109 24 9.75V14.25C24 14.4489 23.921 14.6397 23.7803 14.7803C23.6397 14.921 23.4489 15 23.25 15H21V18H23.25C23.4489 18 23.6397 18.079 23.7803 18.2197C23.921 18.3603 24 18.5511 24 18.75V23.25C24 23.4489 23.921 23.6397 23.7803 23.7803C23.6397 23.921 23.4489 24 23.25 24H0.75C0.551088 24 0.360322 23.921 0.21967 23.7803C0.0790176 23.6397 0 23.4489 0 23.25V18.75C0 18.5511 0.0790176 18.3603 0.21967 18.2197C0.360322 18.079 0.551088 18 0.75 18H3V15H0.75C0.551088 15 0.360322 14.921 0.21967 14.7803C0.0790176 14.6397 0 14.4489 0 14.25V9.75C0 9.55109 0.0790176 9.36032 0.21967 9.21967C0.360322 9.07902 0.551088 9 0.75 9H3V6H0.75C0.551088 6 0.360322 5.92098 0.21967 5.78033C0.0790176 5.63968 0 5.44891 0 5.25V0.75ZM4.5 6V9H11.25V6H4.5ZM12.75 6V9H19.5V6H12.75ZM4.5 15V18H11.25V15H4.5ZM12.75 15V18H19.5V15H12.75ZM1.5 1.5V4.5H6.75V1.5H1.5ZM8.25 1.5V4.5H15.75V1.5H8.25ZM17.25 1.5V4.5H22.5V1.5H17.25ZM1.5 10.5V13.5H6.75V10.5H1.5ZM8.25 10.5V13.5H15.75V10.5H8.25ZM17.25 10.5V13.5H22.5V10.5H17.25ZM1.5 19.5V22.5H6.75V19.5H1.5ZM8.25 19.5V22.5H15.75V19.5H8.25ZM17.25 19.5V22.5H22.5V19.5H17.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
