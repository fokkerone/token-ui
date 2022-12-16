

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M2.25 3C1.65326 3 1.08097 3.23705 0.65901 3.65901C0.237053 4.08097 0 4.65326 0 5.25L0 18.75C0 19.3467 0.237053 19.919 0.65901 20.341C1.08097 20.7629 1.65326 21 2.25 21H21.75C22.3467 21 22.919 20.7629 23.341 20.341C23.7629 19.919 24 19.3467 24 18.75V5.25C24 4.65326 23.7629 4.08097 23.341 3.65901C22.919 3.23705 22.3467 3 21.75 3H2.25ZM12.75 12H20.25C20.4489 12 20.6397 12.079 20.7803 12.2197C20.921 12.3603 21 12.5511 21 12.75V17.25C21 17.4489 20.921 17.6397 20.7803 17.7803C20.6397 17.921 20.4489 18 20.25 18H12.75C12.5511 18 12.3603 17.921 12.2197 17.7803C12.079 17.6397 12 17.4489 12 17.25V12.75C12 12.5511 12.079 12.3603 12.2197 12.2197C12.3603 12.079 12.5511 12 12.75 12Z" fill="black" />
    </IconBase>
  );
};

export default Icon
