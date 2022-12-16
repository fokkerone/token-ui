

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 19.5C0 20.0967 0.237053 20.669 0.65901 21.091C1.08097 21.5129 1.65326 21.75 2.25 21.75H21.75C22.3467 21.75 22.919 21.5129 23.341 21.091C23.7629 20.669 24 20.0967 24 19.5V9C24 8.40326 23.7629 7.83097 23.341 7.40901C22.919 6.98705 22.3467 6.75 21.75 6.75H2.25C1.65326 6.75 1.08097 6.98705 0.65901 7.40901C0.237053 7.83097 0 8.40326 0 9L0 19.5ZM3 4.5C3 4.69891 3.07902 4.88968 3.21967 5.03033C3.36032 5.17098 3.55109 5.25 3.75 5.25H20.25C20.4489 5.25 20.6397 5.17098 20.7803 5.03033C20.921 4.88968 21 4.69891 21 4.5C21 4.30109 20.921 4.11032 20.7803 3.96967C20.6397 3.82902 20.4489 3.75 20.25 3.75H3.75C3.55109 3.75 3.36032 3.82902 3.21967 3.96967C3.07902 4.11032 3 4.30109 3 4.5ZM6 1.5C6 1.69891 6.07902 1.88968 6.21967 2.03033C6.36032 2.17098 6.55109 2.25 6.75 2.25H17.25C17.4489 2.25 17.6397 2.17098 17.7803 2.03033C17.921 1.88968 18 1.69891 18 1.5C18 1.30109 17.921 1.11032 17.7803 0.96967C17.6397 0.829018 17.4489 0.75 17.25 0.75H6.75C6.55109 0.75 6.36032 0.829018 6.21967 0.96967C6.07902 1.11032 6 1.30109 6 1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon