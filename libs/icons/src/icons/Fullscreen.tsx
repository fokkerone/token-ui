

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M2.25 1.5C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V8.25C1.5 8.44891 1.42098 8.63968 1.28033 8.78033C1.13968 8.92098 0.948912 9 0.75 9C0.551088 9 0.360322 8.92098 0.21967 8.78033C0.0790176 8.63968 0 8.44891 0 8.25V2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0L8.25 0C8.44891 0 8.63968 0.0790176 8.78033 0.21967C8.92098 0.360322 9 0.551088 9 0.75C9 0.948912 8.92098 1.13968 8.78033 1.28033C8.63968 1.42098 8.44891 1.5 8.25 1.5H2.25ZM15 0.75C15 0.551088 15.079 0.360322 15.2197 0.21967C15.3603 0.0790176 15.5511 0 15.75 0L21.75 0C22.3467 0 22.919 0.237053 23.341 0.65901C23.7629 1.08097 24 1.65326 24 2.25V8.25C24 8.44891 23.921 8.63968 23.7803 8.78033C23.6397 8.92098 23.4489 9 23.25 9C23.0511 9 22.8603 8.92098 22.7197 8.78033C22.579 8.63968 22.5 8.44891 22.5 8.25V2.25C22.5 2.05109 22.421 1.86032 22.2803 1.71967C22.1397 1.57902 21.9489 1.5 21.75 1.5H15.75C15.5511 1.5 15.3603 1.42098 15.2197 1.28033C15.079 1.13968 15 0.948912 15 0.75ZM0.75 15C0.948912 15 1.13968 15.079 1.28033 15.2197C1.42098 15.3603 1.5 15.5511 1.5 15.75V21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5H8.25C8.44891 22.5 8.63968 22.579 8.78033 22.7197C8.92098 22.8603 9 23.0511 9 23.25C9 23.4489 8.92098 23.6397 8.78033 23.7803C8.63968 23.921 8.44891 24 8.25 24H2.25C1.65326 24 1.08097 23.7629 0.65901 23.341C0.237053 22.919 0 22.3467 0 21.75L0 15.75C0 15.5511 0.0790176 15.3603 0.21967 15.2197C0.360322 15.079 0.551088 15 0.75 15ZM23.25 15C23.4489 15 23.6397 15.079 23.7803 15.2197C23.921 15.3603 24 15.5511 24 15.75V21.75C24 22.3467 23.7629 22.919 23.341 23.341C22.919 23.7629 22.3467 24 21.75 24H15.75C15.5511 24 15.3603 23.921 15.2197 23.7803C15.079 23.6397 15 23.4489 15 23.25C15 23.0511 15.079 22.8603 15.2197 22.7197C15.3603 22.579 15.5511 22.5 15.75 22.5H21.75C21.9489 22.5 22.1397 22.421 22.2803 22.2803C22.421 22.1397 22.5 21.9489 22.5 21.75V15.75C22.5 15.5511 22.579 15.3603 22.7197 15.2197C22.8603 15.079 23.0511 15 23.25 15Z" fill="black" />
    </IconBase>
  );
};

export default Icon
