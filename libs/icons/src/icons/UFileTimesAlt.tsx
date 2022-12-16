

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M14 12H8C7.73478 12 7.48043 12.1054 7.29289 12.2929C7.10536 12.4804 7 12.7348 7 13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14H14C14.2652 14 14.5196 13.8946 14.7071 13.7071C14.8946 13.5196 15 13.2652 15 13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12ZM19.41 19L20.71 17.71C20.8983 17.5217 21.0041 17.2663 21.0041 17C21.0041 16.7337 20.8983 16.4783 20.71 16.29C20.5217 16.1017 20.2663 15.9959 20 15.9959C19.7337 15.9959 19.4783 16.1017 19.29 16.29L18 17.59L16.71 16.29C16.5217 16.1017 16.2663 15.9959 16 15.9959C15.7337 15.9959 15.4783 16.1017 15.29 16.29C15.1017 16.4783 14.9959 16.7337 14.9959 17C14.9959 17.2663 15.1017 17.5217 15.29 17.71L16.59 19L15.29 20.29C15.1963 20.383 15.1219 20.4936 15.0711 20.6154C15.0203 20.7373 14.9942 20.868 14.9942 21C14.9942 21.132 15.0203 21.2627 15.0711 21.3846C15.1219 21.5064 15.1963 21.617 15.29 21.71C15.383 21.8037 15.4936 21.8781 15.6154 21.9289C15.7373 21.9797 15.868 22.0058 16 22.0058C16.132 22.0058 16.2627 21.9797 16.3846 21.9289C16.5064 21.8781 16.617 21.8037 16.71 21.71L18 20.41L19.29 21.71C19.383 21.8037 19.4936 21.8781 19.6154 21.9289C19.7373 21.9797 19.868 22.0058 20 22.0058C20.132 22.0058 20.2627 21.9797 20.3846 21.9289C20.5064 21.8781 20.617 21.8037 20.71 21.71C20.8037 21.617 20.8781 21.5064 20.9289 21.3846C20.9797 21.2627 21.0058 21.132 21.0058 21C21.0058 20.868 20.9797 20.7373 20.9289 20.6154C20.8781 20.4936 20.8037 20.383 20.71 20.29L19.41 19ZM12 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H11V7C11 7.79565 11.3161 8.55871 11.8787 9.12132C12.4413 9.68393 13.2044 10 14 10H17V13C17 13.2652 17.1054 13.5196 17.2929 13.7071C17.4804 13.8946 17.7348 14 18 14C18.2652 14 18.5196 13.8946 18.7071 13.7071C18.8946 13.5196 19 13.2652 19 13V9C19 9 19 9 19 8.94C18.9896 8.84813 18.9695 8.75763 18.94 8.67V8.58C18.8919 8.47718 18.8278 8.38267 18.75 8.3L12.75 2.3C12.6673 2.22222 12.5728 2.15808 12.47 2.11C12.4369 2.10421 12.4031 2.10421 12.37 2.11C12.2728 2.058 12.1683 2.02092 12.06 2H6C5.20435 2 4.44129 2.31607 3.87868 2.87868C3.31607 3.44129 3 4.20435 3 5V19C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22H12C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21C13 20.7348 12.8946 20.4804 12.7071 20.2929C12.5196 20.1054 12.2652 20 12 20ZM13 5.41L15.59 8H14C13.7348 8 13.4804 7.89464 13.2929 7.70711C13.1054 7.51957 13 7.26522 13 7V5.41ZM8 8C7.73478 8 7.48043 8.10536 7.29289 8.29289C7.10536 8.48043 7 8.73478 7 9C7 9.26522 7.10536 9.51957 7.29289 9.70711C7.48043 9.89464 7.73478 10 8 10H9C9.26522 10 9.51957 9.89464 9.70711 9.70711C9.89464 9.51957 10 9.26522 10 9C10 8.73478 9.89464 8.48043 9.70711 8.29289C9.51957 8.10536 9.26522 8 9 8H8ZM12 16H8C7.73478 16 7.48043 16.1054 7.29289 16.2929C7.10536 16.4804 7 16.7348 7 17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18H12C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
