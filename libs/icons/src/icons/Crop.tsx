

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M5.25 0.75C5.44891 0.75 5.63968 0.829018 5.78033 0.96967C5.92098 1.11032 6 1.30109 6 1.5V21H25.5C25.6989 21 25.8897 21.079 26.0303 21.2197C26.171 21.3603 26.25 21.5511 26.25 21.75C26.25 21.9489 26.171 22.1397 26.0303 22.2803C25.8897 22.421 25.6989 22.5 25.5 22.5H22.5V25.5C22.5 25.6989 22.421 25.8897 22.2803 26.0303C22.1397 26.171 21.9489 26.25 21.75 26.25C21.5511 26.25 21.3603 26.171 21.2197 26.0303C21.079 25.8897 21 25.6989 21 25.5V22.5H5.25C5.05109 22.5 4.86032 22.421 4.71967 22.2803C4.57902 22.1397 4.5 21.9489 4.5 21.75V6H1.5C1.30109 6 1.11032 5.92098 0.96967 5.78033C0.829018 5.63968 0.75 5.44891 0.75 5.25C0.75 5.05109 0.829018 4.86032 0.96967 4.71967C1.11032 4.57902 1.30109 4.5 1.5 4.5H4.5V1.5C4.5 1.30109 4.57902 1.11032 4.71967 0.96967C4.86032 0.829018 5.05109 0.75 5.25 0.75ZM9 5.25C9 5.05109 9.07902 4.86032 9.21967 4.71967C9.36032 4.57902 9.55109 4.5 9.75 4.5H21.75C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25V17.25C22.5 17.4489 22.421 17.6397 22.2803 17.7803C22.1397 17.921 21.9489 18 21.75 18C21.5511 18 21.3603 17.921 21.2197 17.7803C21.079 17.6397 21 17.4489 21 17.25V6H9.75C9.55109 6 9.36032 5.92098 9.21967 5.78033C9.07902 5.63968 9 5.44891 9 5.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon