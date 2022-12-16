

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM8.031 6.969C7.89017 6.82817 7.69916 6.74905 7.5 6.74905C7.30084 6.74905 7.10983 6.82817 6.969 6.969C6.82817 7.10983 6.74905 7.30084 6.74905 7.5C6.74905 7.69916 6.82817 7.89017 6.969 8.031L10.9395 12L6.969 15.969C6.89927 16.0387 6.84395 16.1215 6.80621 16.2126C6.76848 16.3037 6.74905 16.4014 6.74905 16.5C6.74905 16.5986 6.76848 16.6963 6.80621 16.7874C6.84395 16.8785 6.89927 16.9613 6.969 17.031C7.10983 17.1718 7.30084 17.2509 7.5 17.2509C7.59862 17.2509 7.69627 17.2315 7.78738 17.1938C7.87848 17.156 7.96127 17.1007 8.031 17.031L12 13.0605L15.969 17.031C16.0387 17.1007 16.1215 17.156 16.2126 17.1938C16.3037 17.2315 16.4014 17.2509 16.5 17.2509C16.5986 17.2509 16.6963 17.2315 16.7874 17.1938C16.8785 17.156 16.9613 17.1007 17.031 17.031C17.1007 16.9613 17.156 16.8785 17.1938 16.7874C17.2315 16.6963 17.2509 16.5986 17.2509 16.5C17.2509 16.4014 17.2315 16.3037 17.1938 16.2126C17.156 16.1215 17.1007 16.0387 17.031 15.969L13.0605 12L17.031 8.031C17.1007 7.96127 17.156 7.87848 17.1938 7.78738C17.2315 7.69627 17.2509 7.59862 17.2509 7.5C17.2509 7.40138 17.2315 7.30373 17.1938 7.21262C17.156 7.12152 17.1007 7.03873 17.031 6.969C16.9613 6.89927 16.8785 6.84395 16.7874 6.80621C16.6963 6.76848 16.5986 6.74905 16.5 6.74905C16.4014 6.74905 16.3037 6.76848 16.2126 6.80621C16.1215 6.84395 16.0387 6.89927 15.969 6.969L12 10.9395L8.031 6.969Z" fill="black" />
    </IconBase>
  );
};

export default Icon