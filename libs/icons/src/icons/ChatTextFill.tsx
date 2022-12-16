

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M24 12C24 17.799 18.627 22.5 12 22.5C10.8115 22.5016 9.62788 22.3473 8.4795 22.041C7.6035 22.485 5.592 23.337 2.208 23.892C1.908 23.94 1.68 23.628 1.7985 23.349C2.3295 22.095 2.8095 20.424 2.9535 18.9C1.116 17.055 0 14.64 0 12C0 6.201 5.373 1.5 12 1.5C18.627 1.5 24 6.201 24 12ZM6.75 7.5C6.55109 7.5 6.36032 7.57902 6.21967 7.71967C6.07902 7.86032 6 8.05109 6 8.25C6 8.44891 6.07902 8.63968 6.21967 8.78033C6.36032 8.92098 6.55109 9 6.75 9H17.25C17.4489 9 17.6397 8.92098 17.7803 8.78033C17.921 8.63968 18 8.44891 18 8.25C18 8.05109 17.921 7.86032 17.7803 7.71967C17.6397 7.57902 17.4489 7.5 17.25 7.5H6.75ZM6.75 11.25C6.55109 11.25 6.36032 11.329 6.21967 11.4697C6.07902 11.6103 6 11.8011 6 12C6 12.1989 6.07902 12.3897 6.21967 12.5303C6.36032 12.671 6.55109 12.75 6.75 12.75H17.25C17.4489 12.75 17.6397 12.671 17.7803 12.5303C17.921 12.3897 18 12.1989 18 12C18 11.8011 17.921 11.6103 17.7803 11.4697C17.6397 11.329 17.4489 11.25 17.25 11.25H6.75ZM6.75 15C6.55109 15 6.36032 15.079 6.21967 15.2197C6.07902 15.3603 6 15.5511 6 15.75C6 15.9489 6.07902 16.1397 6.21967 16.2803C6.36032 16.421 6.55109 16.5 6.75 16.5H12.75C12.9489 16.5 13.1397 16.421 13.2803 16.2803C13.421 16.1397 13.5 15.9489 13.5 15.75C13.5 15.5511 13.421 15.3603 13.2803 15.2197C13.1397 15.079 12.9489 15 12.75 15H6.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
