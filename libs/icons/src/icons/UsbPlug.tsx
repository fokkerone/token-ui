

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9 0.75C9 0.551088 9.07902 0.360322 9.21967 0.21967C9.36032 0.0790176 9.55109 0 9.75 0L15.75 0C15.9489 0 16.1397 0.0790176 16.2803 0.21967C16.421 0.360322 16.5 0.551088 16.5 0.75V6.75H9V0.75ZM10.5 1.5H12V3H10.5V1.5ZM13.5 1.5H15V3H13.5V1.5ZM9 7.5C8.60218 7.5 8.22064 7.65804 7.93934 7.93934C7.65804 8.22064 7.5 8.60218 7.5 9V15.591C7.5 16.332 7.719 17.055 8.13 17.6715L9.687 20.0085C10.218 20.8035 10.5 21.7365 10.5 22.692C10.5 23.4135 11.085 24 11.808 24H13.692C14.4135 24 15 23.415 15 22.692C15 21.7365 15.282 20.802 15.8115 20.0085L17.3715 17.6715C17.7818 17.0552 18.0005 16.3313 18 15.591V9C18 8.60218 17.842 8.22064 17.5607 7.93934C17.2794 7.65804 16.8978 7.5 16.5 7.5H9ZM9 9H16.5V15.591C16.5 16.0352 16.3684 16.4694 16.122 16.839L14.565 19.176C13.9068 20.1628 13.5389 21.3144 13.503 22.5H11.997C11.9616 21.3146 11.5941 20.1629 10.9365 19.176L9.3765 16.839C9.1306 16.4693 8.9996 16.035 9 15.591V9Z" fill="black" />
    </IconBase>
  );
};

export default Icon
