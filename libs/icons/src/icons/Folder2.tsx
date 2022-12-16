

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.5 5.25C1.5 4.65326 1.73705 4.08097 2.15901 3.65901C2.58097 3.23705 3.15326 3 3.75 3H7.896C9.333 3 10.536 3.84 11.3625 4.776C11.9775 5.472 12.72 6 13.5 6H20.25C20.8467 6 21.419 6.23705 21.841 6.65901C22.2629 7.08097 22.5 7.65326 22.5 8.25V18.75C22.5 19.3467 22.2629 19.919 21.841 20.341C21.419 20.7629 20.8467 21 20.25 21H3.75C3.15326 21 2.58097 20.7629 2.15901 20.341C1.73705 19.919 1.5 19.3467 1.5 18.75V5.25ZM3.75 4.5C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25V9H21V8.25C21 8.05109 20.921 7.86032 20.7803 7.71967C20.6397 7.57902 20.4489 7.5 20.25 7.5H13.5C12.054 7.5 10.935 6.5565 10.239 5.769C9.561 5.001 8.73 4.5 7.896 4.5H3.75ZM21 10.5H3V18.75C3 18.9489 3.07902 19.1397 3.21967 19.2803C3.36032 19.421 3.55109 19.5 3.75 19.5H20.25C20.4489 19.5 20.6397 19.421 20.7803 19.2803C20.921 19.1397 21 18.9489 21 18.75V10.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon