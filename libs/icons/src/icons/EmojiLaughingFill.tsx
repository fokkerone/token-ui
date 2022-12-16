

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24ZM10.5 9.75C10.5 10.5015 10.254 10.344 9.8775 10.1025C9.63 9.9435 9.327 9.75 9 9.75C8.673 9.75 8.37 9.945 8.1225 10.1025C7.746 10.344 7.5 10.5 7.5 9.75C7.5 8.508 8.172 7.5 9 7.5C9.828 7.5 10.5 8.508 10.5 9.75ZM18.4965 14.25C18.6282 14.478 18.6975 14.7367 18.6975 15C18.6975 15.2633 18.6282 15.522 18.4965 15.75C17.8384 16.8905 16.8914 17.8376 15.751 18.4959C14.6105 19.1542 13.3168 19.5005 12 19.5C10.6834 19.5003 9.39004 19.1538 8.24988 18.4955C7.10971 17.8373 6.16301 16.8903 5.505 15.75C5.37341 15.5221 5.30411 15.2636 5.30404 15.0004C5.30397 14.7372 5.37314 14.4786 5.50461 14.2507C5.63609 14.0227 5.82522 13.8333 6.05304 13.7015C6.28085 13.5698 6.53933 13.5003 6.8025 13.5H17.1975C17.4608 13.5 17.7195 13.5693 17.9475 13.701C18.1755 13.8326 18.3649 14.022 18.4965 14.25ZM15.8775 10.1025C15.63 9.9435 15.327 9.75 15 9.75C14.673 9.75 14.37 9.945 14.1225 10.1025C13.746 10.344 13.5 10.5 13.5 9.75C13.5 8.508 14.172 7.5 15 7.5C15.828 7.5 16.5 8.508 16.5 9.75C16.5 10.5015 16.254 10.344 15.8775 10.1025Z" fill="black" />
    </IconBase>
  );
};

export default Icon