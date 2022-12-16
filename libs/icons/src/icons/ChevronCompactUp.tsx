

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.664 8.32947C11.7683 8.27721 11.8833 8.25 12 8.25C12.1167 8.25 12.2317 8.27721 12.336 8.32947L21.336 12.8295C21.4248 12.8731 21.5042 12.9339 21.5694 13.0084C21.6346 13.0829 21.6844 13.1695 21.716 13.2633C21.7476 13.3571 21.7603 13.4562 21.7534 13.555C21.7465 13.6537 21.7201 13.7501 21.6757 13.8386C21.6314 13.9271 21.57 14.0059 21.495 14.0706C21.42 14.1352 21.333 14.1844 21.239 14.2152C21.1449 14.2461 21.0457 14.258 20.947 14.2503C20.8483 14.2426 20.7522 14.2155 20.664 14.1705L12 9.83997L3.33601 14.1705C3.24786 14.2155 3.15168 14.2426 3.05299 14.2503C2.95431 14.258 2.85509 14.2461 2.76104 14.2152C2.66699 14.1844 2.57998 14.1352 2.50502 14.0706C2.43006 14.0059 2.36864 13.9271 2.32429 13.8386C2.27995 13.7501 2.25356 13.6537 2.24664 13.555C2.23973 13.4562 2.25243 13.3571 2.28401 13.2633C2.31559 13.1695 2.36543 13.0829 2.43064 13.0084C2.49586 12.9339 2.57517 12.8731 2.66401 12.8295L11.664 8.32947Z" fill="black" />
    </IconBase>
  );
};

export default Icon