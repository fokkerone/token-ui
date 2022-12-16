

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19.104 5.95502C19.2063 5.85057 19.3285 5.76759 19.4634 5.71095C19.5982 5.6543 19.743 5.62512 19.8892 5.62512C20.0355 5.62512 20.1803 5.6543 20.3151 5.71095C20.4499 5.76759 20.5721 5.85057 20.6745 5.95502C21.1035 6.38852 21.1095 7.08902 20.6895 7.53002L11.82 18.015C11.7193 18.1256 11.5971 18.2145 11.4608 18.2762C11.3246 18.3379 11.1772 18.3712 11.0277 18.374C10.8781 18.3768 10.7296 18.3491 10.5912 18.2925C10.4527 18.236 10.3273 18.1517 10.2225 18.045L4.82547 12.576C4.61733 12.3638 4.50073 12.0783 4.50073 11.781C4.50073 11.4837 4.61733 11.1983 4.82547 10.986C4.92784 10.8816 5.05002 10.7986 5.18485 10.7419C5.31969 10.6853 5.46447 10.6561 5.61072 10.6561C5.75697 10.6561 5.90175 10.6853 6.03659 10.7419C6.17142 10.7986 6.2936 10.8816 6.39597 10.986L10.974 15.6255L19.074 5.98802C19.0833 5.97643 19.0933 5.96541 19.104 5.95502Z" fill="black" />
    </IconBase>
  );
};

export default Icon
