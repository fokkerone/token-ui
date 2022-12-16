

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.9395 0H6C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V7.0605C20.9999 6.66271 20.8418 6.28124 20.5605 6L15 0.4395C14.7188 0.158176 14.3373 8.49561e-05 13.9395 0V0ZM14.25 5.25V2.25L18.75 6.75H15.75C15.3522 6.75 14.9706 6.59196 14.6893 6.31066C14.408 6.02936 14.25 5.64782 14.25 5.25ZM6.75 13.5C6.55109 13.5 6.36032 13.421 6.21967 13.2803C6.07902 13.1397 6 12.9489 6 12.75C6 12.5511 6.07902 12.3603 6.21967 12.2197C6.36032 12.079 6.55109 12 6.75 12H17.25C17.4489 12 17.6397 12.079 17.7803 12.2197C17.921 12.3603 18 12.5511 18 12.75C18 12.9489 17.921 13.1397 17.7803 13.2803C17.6397 13.421 17.4489 13.5 17.25 13.5H6.75ZM6 15.75C6 15.5511 6.07902 15.3603 6.21967 15.2197C6.36032 15.079 6.55109 15 6.75 15H17.25C17.4489 15 17.6397 15.079 17.7803 15.2197C17.921 15.3603 18 15.5511 18 15.75C18 15.9489 17.921 16.1397 17.7803 16.2803C17.6397 16.421 17.4489 16.5 17.25 16.5H6.75C6.55109 16.5 6.36032 16.421 6.21967 16.2803C6.07902 16.1397 6 15.9489 6 15.75ZM6.75 19.5C6.55109 19.5 6.36032 19.421 6.21967 19.2803C6.07902 19.1397 6 18.9489 6 18.75C6 18.5511 6.07902 18.3603 6.21967 18.2197C6.36032 18.079 6.55109 18 6.75 18H12.75C12.9489 18 13.1397 18.079 13.2803 18.2197C13.421 18.3603 13.5 18.5511 13.5 18.75C13.5 18.9489 13.421 19.1397 13.2803 19.2803C13.1397 19.421 12.9489 19.5 12.75 19.5H6.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
