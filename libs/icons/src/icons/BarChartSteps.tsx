

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0.75 0C0.948912 0 1.13968 0.0790176 1.28033 0.21967C1.42098 0.360322 1.5 0.551088 1.5 0.75V23.25C1.5 23.4489 1.42098 23.6397 1.28033 23.7803C1.13968 23.921 0.948912 24 0.75 24C0.551088 24 0.360322 23.921 0.21967 23.7803C0.0790176 23.6397 0 23.4489 0 23.25V0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790176 0.551088 0 0.75 0V0ZM3 2.25C3 2.05109 3.07902 1.86032 3.21967 1.71967C3.36032 1.57902 3.55109 1.5 3.75 1.5H9.75C9.94891 1.5 10.1397 1.57902 10.2803 1.71967C10.421 1.86032 10.5 2.05109 10.5 2.25V3.75C10.5 3.94891 10.421 4.13968 10.2803 4.28033C10.1397 4.42098 9.94891 4.5 9.75 4.5H3.75C3.55109 4.5 3.36032 4.42098 3.21967 4.28033C3.07902 4.13968 3 3.94891 3 3.75V2.25ZM6 8.25C6 8.05109 6.07902 7.86032 6.21967 7.71967C6.36032 7.57902 6.55109 7.5 6.75 7.5H17.25C17.4489 7.5 17.6397 7.57902 17.7803 7.71967C17.921 7.86032 18 8.05109 18 8.25V9.75C18 9.94891 17.921 10.1397 17.7803 10.2803C17.6397 10.421 17.4489 10.5 17.25 10.5H6.75C6.55109 10.5 6.36032 10.421 6.21967 10.2803C6.07902 10.1397 6 9.94891 6 9.75V8.25ZM9 14.25C9 14.0511 9.07902 13.8603 9.21967 13.7197C9.36032 13.579 9.55109 13.5 9.75 13.5H18.75C18.9489 13.5 19.1397 13.579 19.2803 13.7197C19.421 13.8603 19.5 14.0511 19.5 14.25V15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V14.25ZM12 20.25C12 20.0511 12.079 19.8603 12.2197 19.7197C12.3603 19.579 12.5511 19.5 12.75 19.5H23.25C23.4489 19.5 23.6397 19.579 23.7803 19.7197C23.921 19.8603 24 20.0511 24 20.25V21.75C24 21.9489 23.921 22.1397 23.7803 22.2803C23.6397 22.421 23.4489 22.5 23.25 22.5H12.75C12.5511 22.5 12.3603 22.421 12.2197 22.2803C12.079 22.1397 12 21.9489 12 21.75V20.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon