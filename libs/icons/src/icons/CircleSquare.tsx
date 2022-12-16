

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948211 13.6761 0 11.3869 0 9H0Z" fill="black" /><path d="M19.395 7.5H21.75C21.9489 7.5 22.1397 7.57902 22.2803 7.71967C22.421 7.86032 22.5 8.05109 22.5 8.25V21.75C22.5 21.9489 22.421 22.1397 22.2803 22.2803C22.1397 22.421 21.9489 22.5 21.75 22.5H8.25C8.05109 22.5 7.86032 22.421 7.71967 22.2803C7.57902 22.1397 7.5 21.9489 7.5 21.75V19.395C6.99257 19.322 6.49121 19.2117 6 19.065V21.75C6 22.3467 6.23705 22.919 6.65901 23.341C7.08097 23.7629 7.65326 24 8.25 24H21.75C22.3467 24 22.919 23.7629 23.341 23.341C23.7629 22.919 24 22.3467 24 21.75V8.25C24 7.65326 23.7629 7.08097 23.341 6.65901C22.919 6.23705 22.3467 6 21.75 6H19.065C19.2105 6.486 19.32 6.987 19.395 7.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
