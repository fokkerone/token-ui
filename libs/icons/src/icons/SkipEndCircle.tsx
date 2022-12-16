

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 22.5C9.21523 22.5 6.54451 21.3938 4.57538 19.4246C2.60625 17.4555 1.5 14.7848 1.5 12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5C14.7848 1.5 17.4555 2.60625 19.4246 4.57538C21.3938 6.54451 22.5 9.21523 22.5 12C22.5 14.7848 21.3938 17.4555 19.4246 19.4246C17.4555 21.3938 14.7848 22.5 12 22.5ZM12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24Z" fill="black" /><path d="M9.4065 7.58272C9.52918 7.51955 9.6669 7.49145 9.80452 7.50151C9.94214 7.51156 10.0743 7.55939 10.1865 7.63972L14.25 10.5422V8.25022C14.25 8.05131 14.329 7.86055 14.4697 7.71989C14.6103 7.57924 14.8011 7.50022 15 7.50022C15.1989 7.50022 15.3897 7.57924 15.5303 7.71989C15.671 7.86055 15.75 8.05131 15.75 8.25022V15.7502C15.75 15.9491 15.671 16.1399 15.5303 16.2806C15.3897 16.4212 15.1989 16.5002 15 16.5002C14.8011 16.5002 14.6103 16.4212 14.4697 16.2806C14.329 16.1399 14.25 15.9491 14.25 15.7502V13.4582L10.185 16.3607C10.0729 16.4406 9.9409 16.488 9.80358 16.4978C9.66627 16.5077 9.52889 16.4795 9.40651 16.4165C9.28413 16.3534 9.18147 16.2579 9.10976 16.1404C9.03806 16.0229 9.00009 15.8879 9 15.7502V8.25022C8.99986 8.11235 9.03772 7.9771 9.10943 7.85934C9.18115 7.74158 9.28393 7.64587 9.4065 7.58272Z" fill="black" />
    </IconBase>
  );
};

export default Icon
