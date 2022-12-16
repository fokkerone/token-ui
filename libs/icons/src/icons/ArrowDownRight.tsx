

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21 20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H11.25C11.0511 21 10.8603 20.921 10.7196 20.7803C10.579 20.6397 10.5 20.4489 10.5 20.25C10.5 20.0511 10.579 19.8603 10.7196 19.7197C10.8603 19.579 11.0511 19.5 11.25 19.5H18.4395L3.21897 4.281C3.14924 4.21127 3.09392 4.12849 3.05619 4.03738C3.01845 3.94627 2.99902 3.84862 2.99902 3.75C2.99902 3.65139 3.01845 3.55374 3.05619 3.46263C3.09392 3.37152 3.14924 3.28873 3.21897 3.219C3.2887 3.14927 3.37149 3.09396 3.4626 3.05622C3.5537 3.01848 3.65136 2.99905 3.74997 2.99905C3.84859 2.99905 3.94624 3.01848 4.03735 3.05622C4.12846 3.09396 4.21124 3.14927 4.28097 3.219L19.5 18.4395V11.25C19.5 11.0511 19.579 10.8603 19.7196 10.7197C19.8603 10.579 20.0511 10.5 20.25 10.5C20.4489 10.5 20.6397 10.579 20.7803 10.7197C20.921 10.8603 21 11.0511 21 11.25V20.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon