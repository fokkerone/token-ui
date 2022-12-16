

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 1C12.4189 1 12.7935 1.26117 12.9383 1.65429L19.9383 20.6543C20.0836 21.0487 19.9668 21.4918 19.646 21.7633C19.3251 22.0349 18.8688 22.0768 18.5038 21.8682L12 18.1518L5.49613 21.8682C5.1312 22.0768 4.67483 22.0349 4.354 21.7633C4.03316 21.4918 3.91634 21.0487 4.06165 20.6543L11.0616 1.65429C11.2065 1.26117 11.581 1 12 1ZM6.88737 18.7697L11.5038 16.1318C11.8113 15.9561 12.1887 15.9561 12.4961 16.1318L17.1126 18.7697L12 4.89264L6.88737 18.7697Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon