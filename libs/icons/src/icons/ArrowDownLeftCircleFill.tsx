

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12ZM15.144 7.7955C15.2132 7.72387 15.2959 7.66673 15.3874 7.62742C15.4789 7.58812 15.5774 7.56743 15.6769 7.56656C15.7765 7.5657 15.8753 7.58467 15.9675 7.62238C16.0596 7.66009 16.1434 7.71578 16.2138 7.7862C16.2842 7.85662 16.3399 7.94036 16.3776 8.03253C16.4153 8.12471 16.4343 8.22347 16.4334 8.32305C16.4326 8.42264 16.4119 8.52105 16.3726 8.61255C16.3333 8.70406 16.2761 8.78681 16.2045 8.856L10.0605 15H14.2125C14.4114 15 14.6022 15.079 14.7428 15.2197C14.8835 15.3603 14.9625 15.5511 14.9625 15.75C14.9625 15.9489 14.8835 16.1397 14.7428 16.2803C14.6022 16.421 14.4114 16.5 14.2125 16.5H8.25C8.05109 16.5 7.86032 16.421 7.71967 16.2803C7.57902 16.1397 7.5 15.9489 7.5 15.75V9.7875C7.5 9.58859 7.57902 9.39782 7.71967 9.25717C7.86032 9.11652 8.05109 9.0375 8.25 9.0375C8.44891 9.0375 8.63968 9.11652 8.78033 9.25717C8.92098 9.39782 9 9.58859 9 9.7875V13.9395L15.144 7.7955Z" fill="black" />
    </IconBase>
  );
};

export default Icon