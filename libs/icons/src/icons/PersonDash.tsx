

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9 12C10.1935 12 11.3381 11.5259 12.182 10.682C13.0259 9.83807 13.5 8.69347 13.5 7.5C13.5 6.30653 13.0259 5.16193 12.182 4.31802C11.3381 3.47411 10.1935 3 9 3C7.80653 3 6.66193 3.47411 5.81802 4.31802C4.97411 5.16193 4.5 6.30653 4.5 7.5C4.5 8.69347 4.97411 9.83807 5.81802 10.682C6.66193 11.5259 7.80653 12 9 12ZM12 7.5C12 8.29565 11.6839 9.05871 11.1213 9.62132C10.5587 10.1839 9.79565 10.5 9 10.5C8.20435 10.5 7.44129 10.1839 6.87868 9.62132C6.31607 9.05871 6 8.29565 6 7.5C6 6.70435 6.31607 5.94129 6.87868 5.37868C7.44129 4.81607 8.20435 4.5 9 4.5C9.79565 4.5 10.5587 4.81607 11.1213 5.37868C11.6839 5.94129 12 6.70435 12 7.5ZM18 19.5C18 21 16.5 21 16.5 21H1.5C1.5 21 0 21 0 19.5C0 18 1.5 13.5 9 13.5C16.5 13.5 18 18 18 19.5ZM16.5 19.494C16.4985 19.125 16.269 18.015 15.252 16.998C14.274 16.02 12.4335 15 9 15C5.565 15 3.726 16.02 2.748 16.998C1.731 18.015 1.503 19.125 1.5 19.494H16.5Z" fill="black" /><path d="M16.5 11.25C16.5 11.0511 16.579 10.8603 16.7197 10.7197C16.8603 10.579 17.0511 10.5 17.25 10.5H23.25C23.4489 10.5 23.6397 10.579 23.7803 10.7197C23.921 10.8603 24 11.0511 24 11.25C24 11.4489 23.921 11.6397 23.7803 11.7803C23.6397 11.921 23.4489 12 23.25 12H17.25C17.0511 12 16.8603 11.921 16.7197 11.7803C16.579 11.6397 16.5 11.4489 16.5 11.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon