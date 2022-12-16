

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 3C10.0204 3.00621 8.10822 3.7202 6.609 5.013C5.46 6.003 4.6275 7.293 4.413 8.5875C1.899 9.1425 0 11.3325 0 13.977C0 17.049 2.562 19.5 5.6715 19.5H19.0305C21.753 19.5 24 17.355 24 14.6595C24 12.2055 22.137 10.206 19.749 9.8685C19.3845 5.9985 16.035 3 12 3ZM9 11.25H15C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12C15.75 12.1989 15.671 12.3897 15.5303 12.5303C15.3897 12.671 15.1989 12.75 15 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
