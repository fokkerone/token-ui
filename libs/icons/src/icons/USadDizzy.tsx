

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9 11.71L9.29 11.41L9.58 11.71C9.67297 11.8037 9.78357 11.8781 9.90543 11.9289C10.0273 11.9797 10.158 12.0058 10.29 12.0058C10.422 12.0058 10.5527 11.9797 10.6746 11.9289C10.7964 11.8781 10.907 11.8037 11 11.71C11.0937 11.617 11.1681 11.5064 11.2189 11.3846C11.2697 11.2627 11.2958 11.132 11.2958 11C11.2958 10.868 11.2697 10.7373 11.2189 10.6154C11.1681 10.4936 11.0937 10.383 11 10.29L10.7 10L11 9.71C11.1883 9.51639 11.292 9.25591 11.2882 8.98586C11.2845 8.71581 11.1736 8.4583 10.98 8.27C10.7864 8.0817 10.5259 7.97802 10.2559 7.98177C9.98581 7.98552 9.72831 8.09639 9.54 8.29L9.25 8.59L9 8.29C8.8117 8.09639 8.5542 7.98552 8.28415 7.98177C8.01409 7.97802 7.75361 8.0817 7.56 8.27C7.3664 8.4583 7.25552 8.71581 7.25177 8.98586C7.24802 9.25591 7.3517 9.51639 7.54 9.71L7.84 10L7.54 10.29C7.44628 10.383 7.37188 10.4936 7.32111 10.6154C7.27034 10.7373 7.24421 10.868 7.24421 11C7.24421 11.132 7.27034 11.2627 7.32111 11.3846C7.37188 11.5064 7.44628 11.617 7.54 11.71C7.63297 11.8037 7.74357 11.8781 7.86543 11.9289C7.98729 11.9797 8.11799 12.0058 8.25 12.0058C8.38202 12.0058 8.51272 11.9797 8.63458 11.9289C8.75644 11.8781 8.86704 11.8037 8.96 11.71H9ZM8.4 15.33C8.19844 15.4993 8.07176 15.7412 8.04742 16.0033C8.02308 16.2654 8.10306 16.5265 8.27 16.73C8.35395 16.8313 8.45705 16.915 8.5734 16.9763C8.68975 17.0377 8.81706 17.0755 8.94803 17.0875C9.07901 17.0996 9.21108 17.0857 9.33669 17.0467C9.46229 17.0076 9.57896 16.9442 9.68 16.86C10.3485 16.321 11.1813 16.0271 12.04 16.0271C12.8987 16.0271 13.7315 16.321 14.4 16.86C14.5011 16.9442 14.6177 17.0076 14.7433 17.0467C14.8689 17.0857 15.001 17.0996 15.132 17.0875C15.263 17.0755 15.3903 17.0377 15.5066 16.9763C15.623 16.915 15.7261 16.8313 15.81 16.73C15.9769 16.5265 16.0569 16.2654 16.0326 16.0033C16.0083 15.7412 15.8816 15.4993 15.68 15.33C14.645 14.4904 13.3527 14.0323 12.02 14.0323C10.6873 14.0323 9.39505 14.4904 8.36 15.33H8.4ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM17 8.29C16.907 8.19627 16.7964 8.12188 16.6746 8.07111C16.5527 8.02034 16.422 7.9942 16.29 7.9942C16.158 7.9942 16.0273 8.02034 15.9054 8.07111C15.7836 8.12188 15.673 8.19627 15.58 8.29L15.29 8.59L15 8.29C14.8117 8.1017 14.5563 7.99591 14.29 7.99591C14.0237 7.99591 13.7683 8.1017 13.58 8.29C13.3917 8.4783 13.2859 8.7337 13.2859 9C13.2859 9.2663 13.3917 9.5217 13.58 9.71L13.88 10L13.58 10.29C13.4863 10.383 13.4119 10.4936 13.3611 10.6154C13.3103 10.7373 13.2842 10.868 13.2842 11C13.2842 11.132 13.3103 11.2627 13.3611 11.3846C13.4119 11.5064 13.4863 11.617 13.58 11.71C13.673 11.8037 13.7836 11.8781 13.9054 11.9289C14.0273 11.9797 14.158 12.0058 14.29 12.0058C14.422 12.0058 14.5527 11.9797 14.6746 11.9289C14.7964 11.8781 14.907 11.8037 15 11.71L15.29 11.41L15.58 11.71C15.673 11.8037 15.7836 11.8781 15.9054 11.9289C16.0273 11.9797 16.158 12.0058 16.29 12.0058C16.422 12.0058 16.5527 11.9797 16.6746 11.9289C16.7964 11.8781 16.907 11.8037 17 11.71C17.0937 11.617 17.1681 11.5064 17.2189 11.3846C17.2697 11.2627 17.2958 11.132 17.2958 11C17.2958 10.868 17.2697 10.7373 17.2189 10.6154C17.1681 10.4936 17.0937 10.383 17 10.29L16.7 10L17 9.71C17.0937 9.61704 17.1681 9.50644 17.2189 9.38458C17.2697 9.26272 17.2958 9.13201 17.2958 9C17.2958 8.86799 17.2697 8.73728 17.2189 8.61542C17.1681 8.49356 17.0937 8.38296 17 8.29Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
