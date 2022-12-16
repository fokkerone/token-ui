

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5.25 9.75C5.44891 9.75 5.63968 9.82902 5.78033 9.96967C5.92098 10.1103 6 10.3011 6 10.5V12C6 13.5913 6.63214 15.1174 7.75736 16.2426C8.88258 17.3679 10.4087 18 12 18C13.5913 18 15.1174 17.3679 16.2426 16.2426C17.3679 15.1174 18 13.5913 18 12V10.5C18 10.3011 18.079 10.1103 18.2197 9.96967C18.3603 9.82902 18.5511 9.75 18.75 9.75C18.9489 9.75 19.1397 9.82902 19.2803 9.96967C19.421 10.1103 19.5 10.3011 19.5 10.5V12C19.5 13.8593 18.8094 15.6523 17.5622 17.0312C16.3149 18.4101 14.6 19.2766 12.75 19.4625V22.5H17.25C17.4489 22.5 17.6397 22.579 17.7803 22.7197C17.921 22.8603 18 23.0511 18 23.25C18 23.4489 17.921 23.6397 17.7803 23.7803C17.6397 23.921 17.4489 24 17.25 24H6.75C6.55109 24 6.36032 23.921 6.21967 23.7803C6.07902 23.6397 6 23.4489 6 23.25C6 23.0511 6.07902 22.8603 6.21967 22.7197C6.36032 22.579 6.55109 22.5 6.75 22.5H11.25V19.4625C9.40003 19.2766 7.68506 18.4101 6.43782 17.0312C5.19058 15.6523 4.49998 13.8593 4.5 12V10.5C4.5 10.3011 4.57902 10.1103 4.71967 9.96967C4.86032 9.82902 5.05109 9.75 5.25 9.75Z" fill="black" /><path d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12V4.5C9 3.70435 9.31607 2.94129 9.87868 2.37868C10.4413 1.81607 11.2044 1.5 12 1.5C12.7956 1.5 13.5587 1.81607 14.1213 2.37868C14.6839 2.94129 15 3.70435 15 4.5V12ZM12 0C10.8065 0 9.66193 0.474106 8.81802 1.31802C7.97411 2.16193 7.5 3.30653 7.5 4.5V12C7.5 13.1935 7.97411 14.3381 8.81802 15.182C9.66193 16.0259 10.8065 16.5 12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12V4.5C16.5 3.30653 16.0259 2.16193 15.182 1.31802C14.3381 0.474106 13.1935 0 12 0V0Z" fill="black" />
    </IconBase>
  );
};

export default Icon