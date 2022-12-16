

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 6C6.3 6 2 8.15 2 11C2 13.45 5.19 15.38 9.71 15.88L9.29 16.29C9.19627 16.383 9.12188 16.4936 9.07111 16.6154C9.02034 16.7373 8.9942 16.868 8.9942 17C8.9942 17.132 9.02034 17.2627 9.07111 17.3846C9.12188 17.5064 9.19627 17.617 9.29 17.71C9.38296 17.8037 9.49356 17.8781 9.61542 17.9289C9.73728 17.9797 9.86799 18.0058 10 18.0058C10.132 18.0058 10.2627 17.9797 10.3846 17.9289C10.5064 17.8781 10.617 17.8037 10.71 17.71L12.71 15.71C12.801 15.6149 12.8724 15.5028 12.92 15.38C13.02 15.1365 13.02 14.8635 12.92 14.62C12.8724 14.4972 12.801 14.3851 12.71 14.29L10.71 12.29C10.5217 12.1017 10.2663 11.9959 10 11.9959C9.7337 11.9959 9.4783 12.1017 9.29 12.29C9.1017 12.4783 8.99591 12.7337 8.99591 13C8.99591 13.2663 9.1017 13.5217 9.29 13.71L9.41 13.82C6 13.34 4 12 4 11C4 9.78 7.12 8 12 8C16.88 8 20 9.78 20 11C20 11.83 18.55 13 15.79 13.6C15.6594 13.625 15.535 13.6759 15.4243 13.7495C15.3135 13.8232 15.2186 13.9182 15.145 14.0291C15.0715 14.1399 15.0207 14.2643 14.9958 14.3949C14.9709 14.5256 14.9724 14.6599 15 14.79C15.0273 14.9188 15.0798 15.041 15.1544 15.1495C15.2291 15.258 15.3244 15.3507 15.435 15.4222C15.5456 15.4938 15.6692 15.5428 15.7988 15.5664C15.9283 15.5901 16.0613 15.5879 16.19 15.56C19.84 14.76 22 13.06 22 11C22 8.15 17.7 6 12 6Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
