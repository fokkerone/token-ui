

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 0H1.5V22.5H24V24H0V0ZM22.2255 4.6695C22.3018 4.73191 22.365 4.80875 22.4116 4.89561C22.4581 4.98248 22.4871 5.07766 22.4969 5.17574C22.5066 5.27381 22.4969 5.37284 22.4684 5.46718C22.4398 5.56151 22.393 5.64929 22.3305 5.7255L15.5805 13.9755C15.5142 14.0565 15.4316 14.1227 15.3381 14.1698C15.2447 14.217 15.1424 14.244 15.0378 14.2493C14.9332 14.2545 14.8288 14.2378 14.731 14.2002C14.6333 14.1626 14.5446 14.105 14.4705 14.031L10.59 10.1505L5.106 17.691C4.98603 17.8435 4.81161 17.9437 4.61938 17.9703C4.42714 17.9969 4.23207 17.948 4.07516 17.8338C3.91824 17.7196 3.8117 17.549 3.77792 17.3579C3.74413 17.1668 3.78574 16.9701 3.894 16.809L9.894 8.559C9.95769 8.47127 10.0396 8.39839 10.1342 8.34538C10.2288 8.29237 10.3337 8.26049 10.4418 8.25194C10.5498 8.24338 10.6585 8.25836 10.7602 8.29583C10.8619 8.3333 10.9543 8.39238 11.031 8.469L14.9445 12.384L21.1695 4.7745C21.2319 4.69822 21.3087 4.635 21.3956 4.58844C21.4825 4.54187 21.5777 4.51289 21.6757 4.50314C21.7738 4.49338 21.8728 4.50306 21.9672 4.5316C22.0615 4.56015 22.1493 4.60701 22.2255 4.6695Z" fill="black" />
    </IconBase>
  );
};

export default Icon