

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9.75 3C9.55109 3 9.36032 3.07902 9.21967 3.21967C9.07902 3.36032 9 3.55109 9 3.75C9 3.94891 9.07902 4.13968 9.21967 4.28033C9.36032 4.42098 9.55109 4.5 9.75 4.5H14.25C14.4489 4.5 14.6397 4.42098 14.7803 4.28033C14.921 4.13968 15 3.94891 15 3.75C15 3.55109 14.921 3.36032 14.7803 3.21967C14.6397 3.07902 14.4489 3 14.25 3H9.75ZM16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5C10.8065 16.5 9.66193 16.0259 8.81802 15.182C7.97411 14.3381 7.5 13.1935 7.5 12C7.5 10.8065 7.97411 9.66193 8.81802 8.81802C9.66193 7.97411 10.8065 7.5 12 7.5C13.1935 7.5 14.3381 7.97411 15.182 8.81802C16.0259 9.66193 16.5 10.8065 16.5 12Z" fill="black" /><path d="M6.75 0C5.75544 0 4.80161 0.395088 4.09835 1.09835C3.39509 1.80161 3 2.75544 3 3.75V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V3.75C21 2.75544 20.6049 1.80161 19.9016 1.09835C19.1984 0.395088 18.2446 0 17.25 0L6.75 0ZM4.5 3.75C4.5 3.15326 4.73705 2.58097 5.15901 2.15901C5.58097 1.73705 6.15326 1.5 6.75 1.5H17.25C17.8467 1.5 18.419 1.73705 18.841 2.15901C19.2629 2.58097 19.5 3.15326 19.5 3.75V19.9425C19.1402 19.6547 18.7498 19.4072 18.336 19.2045C17.088 18.5805 15.0945 18 12 18C8.9055 18 6.912 18.5805 5.664 19.2045C5.25018 19.4072 4.85984 19.6547 4.5 19.9425V3.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
