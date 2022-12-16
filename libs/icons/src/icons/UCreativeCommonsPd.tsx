

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84286 16.1566 4 14.1217 4 12C3.9978 10.2233 4.59302 8.49755 5.69 7.1L8.05 9.47C8.01802 9.64489 8.00129 9.82222 8 10V14C8 14.7956 8.31607 15.5587 8.87868 16.1213C9.44129 16.6839 10.2044 17 11 17H13C13.6906 16.9944 14.3582 16.7507 14.89 16.31L16.89 18.31C15.4952 19.4049 13.7732 20 12 20ZM10 14V11.41L13.46 14.87C13.321 14.9536 13.1622 14.9984 13 15H11C10.7348 15 10.4804 14.8946 10.2929 14.7071C10.1054 14.5196 10 14.2652 10 14ZM18.31 16.9L16 14.53C16.0153 14.3537 16.0153 14.1763 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13C14.8378 13.0016 14.679 13.0464 14.54 13.13L10.54 9.13C10.679 9.04645 10.8378 9.00157 11 9H13C13.2652 9 13.5196 9.10536 13.7071 9.29289C13.8946 9.48043 14 9.73478 14 10C14 10.2652 14.1054 10.5196 14.2929 10.7071C14.4804 10.8946 14.7348 11 15 11C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.20435 15.6839 8.44129 15.1213 7.87868C14.5587 7.31607 13.7957 7 13 7H11C10.3094 7.00558 9.64179 7.2493 9.11 7.69L7.11 5.69C8.50485 4.59513 10.2268 4.00003 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C20.0022 13.7767 19.407 15.5025 18.31 16.9Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
