

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M20.781 3.21888C20.8508 3.28854 20.9062 3.37131 20.944 3.46243C20.9818 3.55354 21.0013 3.65122 21.0013 3.74988C21.0013 3.84853 20.9818 3.94621 20.944 4.03733C20.9062 4.12844 20.8508 4.21121 20.781 4.28088L4.28097 20.7809C4.14014 20.9217 3.94913 21.0008 3.74997 21.0008C3.55081 21.0008 3.3598 20.9217 3.21897 20.7809C3.07814 20.64 2.99902 20.449 2.99902 20.2499C2.99902 20.0507 3.07814 19.8597 3.21897 19.7189L19.719 3.21888C19.7886 3.14903 19.8714 3.09362 19.9625 3.05581C20.0536 3.018 20.1513 2.99854 20.25 2.99854C20.3486 2.99854 20.4463 3.018 20.5374 3.05581C20.6285 3.09362 20.7113 3.14903 20.781 3.21888Z" fill="black" />
    </IconBase>
  );
};

export default Icon