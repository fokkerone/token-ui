

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.33699 5.93267C6.72758 6.32313 6.72768 6.9563 6.33722 7.34688C5.21866 8.46581 4.457 9.89128 4.14853 11.4431C3.84006 12.9948 3.99864 14.6032 4.60421 16.0649C5.20979 17.5265 6.23517 18.7758 7.55071 19.6548C8.86625 20.5337 10.4129 21.0028 11.995 21.0028C13.5771 21.0028 15.1238 20.5337 16.4393 19.6548C17.7548 18.7758 18.7802 17.5265 19.3858 16.0649C19.9914 14.6032 20.1499 12.9948 19.8415 11.4431C19.533 9.89128 18.7713 8.46581 17.6528 7.34688C17.2623 6.9563 17.2624 6.32313 17.653 5.93267C18.0436 5.54221 18.6768 5.54231 19.0672 5.9329C20.4654 7.33156 21.4175 9.11339 21.8031 11.0531C22.1887 12.9928 21.9905 15.0033 21.2335 16.8304C20.4765 18.6575 19.1948 20.2191 17.5504 21.3177C15.9059 22.4164 13.9727 23.0028 11.995 23.0028C10.0173 23.0028 8.08406 22.4164 6.43964 21.3177C4.79522 20.2191 3.51349 18.6575 2.75652 16.8304C1.99954 15.0033 1.80132 12.9928 2.18691 11.0531C2.5725 9.11339 3.52458 7.33156 4.92278 5.9329C5.31324 5.54231 5.9464 5.54221 6.33699 5.93267Z" fill="#250116" /><path d="M12 1C12.5523 1 13 1.44772 13 2V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V2C11 1.44772 11.4477 1 12 1Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon