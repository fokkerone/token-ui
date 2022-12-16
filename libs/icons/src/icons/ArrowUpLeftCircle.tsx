

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12ZM24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM15.144 16.2045C15.2132 16.2761 15.2959 16.3333 15.3874 16.3726C15.4789 16.4119 15.5774 16.4326 15.6769 16.4334C15.7765 16.4343 15.8753 16.4153 15.9675 16.3776C16.0596 16.3399 16.1434 16.2842 16.2138 16.2138C16.2842 16.1434 16.3399 16.0596 16.3776 15.9675C16.4153 15.8753 16.4343 15.7765 16.4334 15.6769C16.4326 15.5774 16.4119 15.4789 16.3726 15.3874C16.3333 15.2959 16.2761 15.2132 16.2045 15.144L10.0605 9H14.2125C14.4114 9 14.6022 8.92098 14.7428 8.78033C14.8835 8.63968 14.9625 8.44891 14.9625 8.25C14.9625 8.05109 14.8835 7.86032 14.7428 7.71967C14.6022 7.57902 14.4114 7.5 14.2125 7.5H8.25C8.05109 7.5 7.86032 7.57902 7.71967 7.71967C7.57902 7.86032 7.5 8.05109 7.5 8.25V14.2125C7.5 14.4114 7.57902 14.6022 7.71967 14.7428C7.86032 14.8835 8.05109 14.9625 8.25 14.9625C8.44891 14.9625 8.63968 14.8835 8.78033 14.7428C8.92098 14.6022 9 14.4114 9 14.2125V10.0605L15.144 16.2045Z" fill="black" />
    </IconBase>
  );
};

export default Icon
