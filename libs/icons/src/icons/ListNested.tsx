

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.75 17.25C6.75 17.0511 6.82902 16.8603 6.96967 16.7197C7.11032 16.579 7.30109 16.5 7.5 16.5H22.5C22.6989 16.5 22.8897 16.579 23.0303 16.7197C23.171 16.8603 23.25 17.0511 23.25 17.25C23.25 17.4489 23.171 17.6397 23.0303 17.7803C22.8897 17.921 22.6989 18 22.5 18H7.5C7.30109 18 7.11032 17.921 6.96967 17.7803C6.82902 17.6397 6.75 17.4489 6.75 17.25ZM3.75 11.25C3.75 11.0511 3.82902 10.8603 3.96967 10.7197C4.11032 10.579 4.30109 10.5 4.5 10.5H19.5C19.6989 10.5 19.8897 10.579 20.0303 10.7197C20.171 10.8603 20.25 11.0511 20.25 11.25C20.25 11.4489 20.171 11.6397 20.0303 11.7803C19.8897 11.921 19.6989 12 19.5 12H4.5C4.30109 12 4.11032 11.921 3.96967 11.7803C3.82902 11.6397 3.75 11.4489 3.75 11.25ZM0.75 5.25C0.75 5.05109 0.829018 4.86032 0.96967 4.71967C1.11032 4.57902 1.30109 4.5 1.5 4.5H16.5C16.6989 4.5 16.8897 4.57902 17.0303 4.71967C17.171 4.86032 17.25 5.05109 17.25 5.25C17.25 5.44891 17.171 5.63968 17.0303 5.78033C16.8897 5.92098 16.6989 6 16.5 6H1.5C1.30109 6 1.11032 5.92098 0.96967 5.78033C0.829018 5.63968 0.75 5.44891 0.75 5.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon