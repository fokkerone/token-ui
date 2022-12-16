

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 0H1.5V22.5H24V24H0V0ZM22.2255 17.8305C22.3018 17.7681 22.365 17.6913 22.4116 17.6044C22.4581 17.5175 22.4871 17.4223 22.4969 17.3243C22.5066 17.2262 22.4969 17.1272 22.4684 17.0328C22.4398 16.9385 22.393 16.8507 22.3305 16.7745L15.5805 8.5245C15.5142 8.44352 15.4316 8.37733 15.3381 8.33018C15.2447 8.28303 15.1424 8.25598 15.0378 8.25075C14.9332 8.24552 14.8288 8.26224 14.731 8.29983C14.6333 8.33742 14.5446 8.39504 14.4705 8.469L10.59 12.3495L5.106 4.809C4.98603 4.65645 4.81161 4.55635 4.61938 4.52972C4.42714 4.50309 4.23207 4.55201 4.07516 4.6662C3.91824 4.78039 3.8117 4.95096 3.77792 5.14207C3.74413 5.33317 3.78574 5.52993 3.894 5.691L9.894 13.941C9.95769 14.0287 10.0396 14.1016 10.1342 14.1546C10.2288 14.2076 10.3337 14.2395 10.4418 14.2481C10.5498 14.2566 10.6585 14.2416 10.7602 14.2042C10.8619 14.1667 10.9543 14.1076 11.031 14.031L14.9445 10.116L21.1695 17.7255C21.2319 17.8018 21.3087 17.865 21.3956 17.9116C21.4825 17.9581 21.5777 17.9871 21.6757 17.9969C21.7738 18.0066 21.8728 17.9969 21.9672 17.9684C22.0615 17.9398 22.1493 17.893 22.2255 17.8305Z" fill="black" />
    </IconBase>
  );
};

export default Icon
