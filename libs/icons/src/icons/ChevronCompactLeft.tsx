

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.8359 2.32948C14.0134 2.4186 14.1482 2.57444 14.2109 2.76284C14.2736 2.95123 14.2591 3.15681 14.1704 3.33448L9.83994 12L14.1719 20.664C14.217 20.7521 14.2441 20.8483 14.2518 20.947C14.2595 21.0457 14.2475 21.1449 14.2167 21.239C14.1858 21.333 14.1367 21.42 14.072 21.495C14.0074 21.5699 13.9285 21.6313 13.8401 21.6757C13.7516 21.72 13.6552 21.7464 13.5564 21.7533C13.4577 21.7603 13.3586 21.7476 13.2648 21.716C13.1709 21.6844 13.0843 21.6346 13.0099 21.5693C12.9354 21.5041 12.8746 21.4248 12.8309 21.336L8.33094 12.336C8.27868 12.2317 8.25146 12.1166 8.25146 12C8.25146 11.8833 8.27868 11.7683 8.33094 11.664L12.8309 2.66398C12.9201 2.48655 13.0759 2.3517 13.2643 2.28899C13.4527 2.22629 13.6583 2.24085 13.8359 2.32948Z" fill="black" />
    </IconBase>
  );
};

export default Icon