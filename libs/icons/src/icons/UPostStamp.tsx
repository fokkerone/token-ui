

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M22.5 5.5C22.7652 5.5 23.0196 5.39464 23.2071 5.20711C23.3946 5.01957 23.5 4.76522 23.5 4.5V1.5C23.5 1.23478 23.3946 0.98043 23.2071 0.792893C23.0196 0.605357 22.7652 0.5 22.5 0.5H19.5C19.2348 0.5 18.9804 0.605357 18.7929 0.792893C18.6054 0.98043 18.5 1.23478 18.5 1.5C18.5 1.63261 18.4473 1.75979 18.3536 1.85355C18.2598 1.94732 18.1326 2 18 2C17.8674 2 17.7402 1.94732 17.6464 1.85355C17.5527 1.75979 17.5 1.63261 17.5 1.5C17.5 1.23478 17.3946 0.98043 17.2071 0.792893C17.0196 0.605357 16.7652 0.5 16.5 0.5H13.5C13.2348 0.5 12.9804 0.605357 12.7929 0.792893C12.6054 0.98043 12.5 1.23478 12.5 1.5C12.5 1.63261 12.4473 1.75979 12.3536 1.85355C12.2598 1.94732 12.1326 2 12 2C11.8674 2 11.7402 1.94732 11.6464 1.85355C11.5527 1.75979 11.5 1.63261 11.5 1.5C11.5 1.23478 11.3946 0.98043 11.2071 0.792893C11.0196 0.605357 10.7652 0.5 10.5 0.5H7.5C7.23478 0.5 6.98043 0.605357 6.79289 0.792893C6.60536 0.98043 6.5 1.23478 6.5 1.5C6.5 1.63261 6.44732 1.75979 6.35355 1.85355C6.25979 1.94732 6.13261 2 6 2C5.86739 2 5.74021 1.94732 5.64645 1.85355C5.55268 1.75979 5.5 1.63261 5.5 1.5C5.5 1.23478 5.39464 0.98043 5.20711 0.792893C5.01957 0.605357 4.76522 0.5 4.5 0.5H1.5C1.23478 0.5 0.98043 0.605357 0.792893 0.792893C0.605357 0.98043 0.5 1.23478 0.5 1.5V4.5C0.5 4.76522 0.605357 5.01957 0.792893 5.20711C0.98043 5.39464 1.23478 5.5 1.5 5.5C1.63261 5.5 1.75979 5.55268 1.85355 5.64645C1.94732 5.74021 2 5.86739 2 6C2 6.13261 1.94732 6.25979 1.85355 6.35355C1.75979 6.44732 1.63261 6.5 1.5 6.5C1.23478 6.5 0.98043 6.60536 0.792893 6.79289C0.605357 6.98043 0.5 7.23478 0.5 7.5V10.5C0.5 10.7652 0.605357 11.0196 0.792893 11.2071C0.98043 11.3946 1.23478 11.5 1.5 11.5C1.63261 11.5 1.75979 11.5527 1.85355 11.6464C1.94732 11.7402 2 11.8674 2 12C2 12.1326 1.94732 12.2598 1.85355 12.3536C1.75979 12.4473 1.63261 12.5 1.5 12.5C1.23478 12.5 0.98043 12.6054 0.792893 12.7929C0.605357 12.9804 0.5 13.2348 0.5 13.5V16.5C0.5 16.7652 0.605357 17.0196 0.792893 17.2071C0.98043 17.3946 1.23478 17.5 1.5 17.5C1.63261 17.5 1.75979 17.5527 1.85355 17.6464C1.94732 17.7402 2 17.8674 2 18C2 18.1326 1.94732 18.2598 1.85355 18.3536C1.75979 18.4473 1.63261 18.5 1.5 18.5C1.23478 18.5 0.98043 18.6054 0.792893 18.7929C0.605357 18.9804 0.5 19.2348 0.5 19.5V22.5C0.5 22.7652 0.605357 23.0196 0.792893 23.2071C0.98043 23.3946 1.23478 23.5 1.5 23.5H4.5C4.76522 23.5 5.01957 23.3946 5.20711 23.2071C5.39464 23.0196 5.5 22.7652 5.5 22.5C5.5 22.3674 5.55268 22.2402 5.64645 22.1464C5.74021 22.0527 5.86739 22 6 22C6.13261 22 6.25979 22.0527 6.35355 22.1464C6.44732 22.2402 6.5 22.3674 6.5 22.5C6.5 22.7652 6.60536 23.0196 6.79289 23.2071C6.98043 23.3946 7.23478 23.5 7.5 23.5H10.5C10.7652 23.5 11.0196 23.3946 11.2071 23.2071C11.3946 23.0196 11.5 22.7652 11.5 22.5C11.5 22.3674 11.5527 22.2402 11.6464 22.1464C11.7402 22.0527 11.8674 22 12 22C12.1326 22 12.2598 22.0527 12.3536 22.1464C12.4473 22.2402 12.5 22.3674 12.5 22.5C12.5 22.7652 12.6054 23.0196 12.7929 23.2071C12.9804 23.3946 13.2348 23.5 13.5 23.5H16.5C16.7652 23.5 17.0196 23.3946 17.2071 23.2071C17.3946 23.0196 17.5 22.7652 17.5 22.5C17.5 22.3674 17.5527 22.2402 17.6464 22.1464C17.7402 22.0527 17.8674 22 18 22C18.1326 22 18.2598 22.0527 18.3536 22.1464C18.4473 22.2402 18.5 22.3674 18.5 22.5C18.5 22.7652 18.6054 23.0196 18.7929 23.2071C18.9804 23.3946 19.2348 23.5 19.5 23.5H22.5C22.7652 23.5 23.0196 23.3946 23.2071 23.2071C23.3946 23.0196 23.5 22.7652 23.5 22.5V19.5C23.5 19.2348 23.3946 18.9804 23.2071 18.7929C23.0196 18.6054 22.7652 18.5 22.5 18.5C22.3674 18.5 22.2402 18.4473 22.1464 18.3536C22.0527 18.2598 22 18.1326 22 18C22 17.8674 22.0527 17.7402 22.1464 17.6464C22.2402 17.5527 22.3674 17.5 22.5 17.5C22.7652 17.5 23.0196 17.3946 23.2071 17.2071C23.3946 17.0196 23.5 16.7652 23.5 16.5V13.5C23.5 13.2348 23.3946 12.9804 23.2071 12.7929C23.0196 12.6054 22.7652 12.5 22.5 12.5C22.3674 12.5 22.2402 12.4473 22.1464 12.3536C22.0527 12.2598 22 12.1326 22 12C22 11.8674 22.0527 11.7402 22.1464 11.6464C22.2402 11.5527 22.3674 11.5 22.5 11.5C22.7652 11.5 23.0196 11.3946 23.2071 11.2071C23.3946 11.0196 23.5 10.7652 23.5 10.5V7.5C23.5 7.23478 23.3946 6.98043 23.2071 6.79289C23.0196 6.60536 22.7652 6.5 22.5 6.5C22.3674 6.5 22.2402 6.44732 22.1464 6.35355C22.0527 6.25979 22 6.13261 22 6C22 5.86739 22.0527 5.74021 22.1464 5.64645C22.2402 5.55268 22.3674 5.5 22.5 5.5ZM21.5 3.71C21.0549 3.90493 20.6763 4.22534 20.4104 4.63204C20.1445 5.03874 20.0029 5.5141 20.0029 6C20.0029 6.4859 20.1445 6.96126 20.4104 7.36796C20.6763 7.77466 21.0549 8.09507 21.5 8.29V9.71C21.0549 9.90493 20.6763 10.2253 20.4104 10.632C20.1445 11.0387 20.0029 11.5141 20.0029 12C20.0029 12.4859 20.1445 12.9613 20.4104 13.368C20.6763 13.7747 21.0549 14.0951 21.5 14.29V15.71C21.0549 15.9049 20.6763 16.2253 20.4104 16.632C20.1445 17.0387 20.0029 17.5141 20.0029 18C20.0029 18.4859 20.1445 18.9613 20.4104 19.368C20.6763 19.7747 21.0549 20.0951 21.5 20.29V21.5H20.29C20.0951 21.0549 19.7747 20.6763 19.368 20.4104C18.9613 20.1445 18.4859 20.0029 18 20.0029C17.5141 20.0029 17.0387 20.1445 16.632 20.4104C16.2253 20.6763 15.9049 21.0549 15.71 21.5H14.29C14.0951 21.0549 13.7747 20.6763 13.368 20.4104C12.9613 20.1445 12.4859 20.0029 12 20.0029C11.5141 20.0029 11.0387 20.1445 10.632 20.4104C10.2253 20.6763 9.90493 21.0549 9.71 21.5H8.29C8.09507 21.0549 7.77466 20.6763 7.36796 20.4104C6.96126 20.1445 6.4859 20.0029 6 20.0029C5.5141 20.0029 5.03874 20.1445 4.63204 20.4104C4.22534 20.6763 3.90493 21.0549 3.71 21.5H2.5V20.29C2.94508 20.0951 3.32371 19.7747 3.58958 19.368C3.85546 18.9613 3.99705 18.4859 3.99705 18C3.99705 17.5141 3.85546 17.0387 3.58958 16.632C3.32371 16.2253 2.94508 15.9049 2.5 15.71V14.29C2.94508 14.0951 3.32371 13.7747 3.58958 13.368C3.85546 12.9613 3.99705 12.4859 3.99705 12C3.99705 11.5141 3.85546 11.0387 3.58958 10.632C3.32371 10.2253 2.94508 9.90493 2.5 9.71V8.29C2.94508 8.09507 3.32371 7.77466 3.58958 7.36796C3.85546 6.96126 3.99705 6.4859 3.99705 6C3.99705 5.5141 3.85546 5.03874 3.58958 4.63204C3.32371 4.22534 2.94508 3.90493 2.5 3.71V2.5H3.71C3.90493 2.94508 4.22534 3.32371 4.63204 3.58958C5.03874 3.85546 5.5141 3.99705 6 3.99705C6.4859 3.99705 6.96126 3.85546 7.36796 3.58958C7.77466 3.32371 8.09507 2.94508 8.29 2.5H9.71C9.90493 2.94508 10.2253 3.32371 10.632 3.58958C11.0387 3.85546 11.5141 3.99705 12 3.99705C12.4859 3.99705 12.9613 3.85546 13.368 3.58958C13.7747 3.32371 14.0951 2.94508 14.29 2.5H15.71C15.9049 2.94508 16.2253 3.32371 16.632 3.58958C17.0387 3.85546 17.5141 3.99705 18 3.99705C18.4859 3.99705 18.9613 3.85546 19.368 3.58958C19.7747 3.32371 20.0951 2.94508 20.29 2.5H21.5V3.71ZM12 5C10.1435 5 8.36301 5.7375 7.05025 7.05025C5.7375 8.36301 5 10.1435 5 12C5 13.8565 5.7375 15.637 7.05025 16.9497C8.36301 18.2625 10.1435 19 12 19C13.2294 19.0027 14.4374 18.6782 15.5 18.06C15.6195 17.9975 15.7251 17.9114 15.8105 17.807C15.8959 17.7027 15.9593 17.5821 15.9969 17.4525C16.0345 17.323 16.0454 17.1872 16.0292 17.0533C16.0129 16.9194 15.9697 16.7902 15.9022 16.6735C15.8348 16.5567 15.7443 16.4548 15.6364 16.3739C15.5285 16.293 15.4054 16.2347 15.2744 16.2026C15.1434 16.1705 15.0073 16.1653 14.8742 16.1872C14.7411 16.2091 14.6138 16.2576 14.5 16.33C13.5468 16.8803 12.4386 17.1008 11.3474 16.9571C10.2561 16.8134 9.24273 16.3137 8.46444 15.5354C7.68615 14.7571 7.18643 13.7437 7.04277 12.6525C6.89911 11.5612 7.11955 10.453 7.6699 9.49982C8.22025 8.54661 9.06976 7.80164 10.0867 7.38045C11.1036 6.95925 12.231 6.88537 13.2942 7.17027C14.3574 7.45516 15.2968 8.08291 15.9668 8.95615C16.6369 9.82939 17 10.8993 17 12V12.5C17 12.609 16.9785 12.7169 16.9368 12.8176C16.8951 12.9183 16.834 13.0098 16.7569 13.0869C16.6798 13.164 16.5883 13.2251 16.4876 13.2668C16.3869 13.3085 16.279 13.33 16.17 13.33C15.9489 13.33 15.7368 13.2429 15.5795 13.0875C15.4223 12.9321 15.3326 12.721 15.33 12.5V9.67C15.3248 9.46509 15.2568 9.26673 15.1351 9.10177C15.0134 8.93682 14.844 8.81324 14.6497 8.74776C14.4555 8.68229 14.2458 8.67809 14.0491 8.73573C13.8524 8.79336 13.6782 8.91005 13.55 9.07C13.0748 8.80952 12.5419 8.67202 12 8.67C11.1168 8.67 10.2698 9.02084 9.64533 9.64533C9.02084 10.2698 8.67 11.1168 8.67 12C8.67 12.8832 9.02084 13.7302 9.64533 14.3547C10.2698 14.9792 11.1168 15.33 12 15.33C12.7991 15.3301 13.5707 15.0385 14.17 14.51C14.5676 14.9005 15.0713 15.1655 15.6184 15.2718C16.1655 15.3781 16.7317 15.3211 17.2466 15.1079C17.7616 14.8946 18.2024 14.5346 18.5141 14.0727C18.8259 13.6108 18.9949 13.0673 19 12.51V12C19 10.1435 18.2625 8.36301 16.9497 7.05025C15.637 5.7375 13.8565 5 12 5ZM12 13.33C11.737 13.33 11.4798 13.252 11.2611 13.1059C11.0424 12.9597 10.8719 12.752 10.7712 12.509C10.6706 12.2659 10.6442 11.9985 10.6956 11.7405C10.7469 11.4825 10.8735 11.2456 11.0595 11.0595C11.2456 10.8735 11.4825 10.7469 11.7405 10.6956C11.9985 10.6442 12.2659 10.6706 12.509 10.7712C12.752 10.8719 12.9597 11.0424 13.1059 11.2611C13.252 11.4798 13.33 11.737 13.33 12C13.3313 12.175 13.2978 12.3486 13.2315 12.5105C13.1651 12.6725 13.0672 12.8197 12.9434 12.9434C12.8197 13.0672 12.6725 13.1651 12.5105 13.2315C12.3486 13.2978 12.175 13.3313 12 13.33Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon