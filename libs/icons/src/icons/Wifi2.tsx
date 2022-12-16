

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19.8435 12.4065C20.1675 12.0825 20.1345 11.5395 19.749 11.289C17.4426 9.79088 14.7503 8.99561 12 9.00002C9.14251 9.00002 6.48001 9.84002 4.25101 11.289C4.16184 11.3492 4.08728 11.4286 4.03283 11.5214C3.97837 11.6142 3.9454 11.718 3.93634 11.8252C3.92727 11.9324 3.94234 12.0402 3.98045 12.1408C4.01855 12.2414 4.07871 12.3322 4.15651 12.4065C4.28431 12.5313 4.45072 12.6089 4.62843 12.6266C4.80614 12.6443 4.98459 12.6011 5.13451 12.504C7.18354 11.1916 9.56671 10.496 12 10.5C14.4333 10.496 16.8165 11.1916 18.8655 12.504C19.173 12.702 19.5855 12.666 19.8435 12.4065ZM16.569 15.681C16.908 15.342 16.8465 14.7735 16.419 14.556C15.0503 13.8595 13.5358 13.4976 12 13.5C10.41 13.5 8.90701 13.881 7.58101 14.556C7.15351 14.7735 7.09201 15.342 7.43101 15.681L7.45351 15.7035C7.69351 15.9435 8.06551 15.9885 8.37001 15.8385C9.49985 15.2848 10.7418 14.9979 12 15C13.302 15 14.535 15.3015 15.63 15.84C15.9345 15.99 16.305 15.945 16.5465 15.7035L16.569 15.681ZM13.59 18.66C13.884 18.366 13.887 17.88 13.53 17.67C13.0672 17.3946 12.5386 17.2494 12 17.25C11.4615 17.2494 10.9328 17.3946 10.47 17.67C10.113 17.88 10.116 18.366 10.41 18.66L11.469 19.719C11.5387 19.7889 11.6214 19.8443 11.7126 19.8821C11.8037 19.9199 11.9014 19.9394 12 19.9394C12.0987 19.9394 12.1963 19.9199 12.2875 19.8821C12.3786 19.8443 12.4613 19.7889 12.531 19.719L13.5915 18.6585L13.59 18.66Z" fill="black" />
    </IconBase>
  );
};

export default Icon