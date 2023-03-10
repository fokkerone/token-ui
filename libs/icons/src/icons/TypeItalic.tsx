

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.9865 17.5109L14.295 6.68239C14.4795 5.78989 14.664 5.61739 16.3155 5.47189L16.4805 4.69189H10.8165L10.6515 5.47189C12.2415 5.61589 12.3435 5.78989 12.159 6.68239L9.85502 17.5109C9.67052 18.4034 9.48602 18.5759 7.83602 18.7199L7.67102 19.4999H13.332L13.497 18.7199C11.907 18.5774 11.8035 18.4034 11.988 17.5109H11.9865Z" fill="black" />
    </IconBase>
  );
};

export default Icon
