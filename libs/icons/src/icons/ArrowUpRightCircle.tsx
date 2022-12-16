

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12ZM24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM8.781 16.2045C8.64037 16.3453 8.44955 16.4245 8.25053 16.4247C8.05151 16.4248 7.86058 16.3459 7.71975 16.2052C7.57892 16.0646 7.49972 15.8738 7.49958 15.6748C7.49944 15.4758 7.57837 15.2848 7.719 15.144L13.8645 9H9.7125C9.51359 9 9.32282 8.92098 9.18217 8.78033C9.04152 8.63968 8.9625 8.44891 8.9625 8.25C8.9625 8.05109 9.04152 7.86032 9.18217 7.71967C9.32282 7.57902 9.51359 7.5 9.7125 7.5H15.675C15.8739 7.5 16.0647 7.57902 16.2053 7.71967C16.346 7.86032 16.425 8.05109 16.425 8.25V14.2125C16.425 14.4114 16.346 14.6022 16.2053 14.7428C16.0647 14.8835 15.8739 14.9625 15.675 14.9625C15.4761 14.9625 15.2853 14.8835 15.1447 14.7428C15.004 14.6022 14.925 14.4114 14.925 14.2125V10.0605L8.781 16.2045Z" fill="black" />
    </IconBase>
  );
};

export default Icon