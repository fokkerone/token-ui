

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9.219 12.219C9.28867 12.1492 9.37143 12.0937 9.46255 12.0559C9.55366 12.0181 9.65135 11.9987 9.75 11.9987C9.84865 11.9987 9.94633 12.0181 10.0374 12.0559C10.1286 12.0937 10.2113 12.1492 10.281 12.219L12 13.9395L13.719 12.219C13.8598 12.0782 14.0508 11.999 14.25 11.999C14.4492 11.999 14.6402 12.0782 14.781 12.219C14.9218 12.3598 15.0009 12.5508 15.0009 12.75C15.0009 12.9492 14.9218 13.1402 14.781 13.281L13.0605 15L14.781 16.719C14.9218 16.8598 15.0009 17.0508 15.0009 17.25C15.0009 17.4492 14.9218 17.6402 14.781 17.781C14.6402 17.9218 14.4492 18.0009 14.25 18.0009C14.0508 18.0009 13.8598 17.9218 13.719 17.781L12 16.0605L10.281 17.781C10.1402 17.9218 9.94916 18.0009 9.75 18.0009C9.55083 18.0009 9.35983 17.9218 9.219 17.781C9.07817 17.6402 8.99905 17.4492 8.99905 17.25C8.99905 17.0508 9.07817 16.8598 9.219 16.719L10.9395 15L9.219 13.281C9.14915 13.2113 9.09374 13.1286 9.05593 13.0374C9.01812 12.9463 8.99866 12.8486 8.99866 12.75C8.99866 12.6513 9.01812 12.5537 9.05593 12.4625C9.09374 12.3714 9.14915 12.2887 9.219 12.219Z" fill="black" /><path d="M12 1.5C12.9946 1.5 13.9484 1.89509 14.6517 2.59835C15.3549 3.30161 15.75 4.25544 15.75 5.25V6H8.25V5.25C8.25 4.25544 8.64509 3.30161 9.34835 2.59835C10.0516 1.89509 11.0054 1.5 12 1.5ZM17.25 6V5.25C17.25 3.85761 16.6969 2.52226 15.7123 1.53769C14.7277 0.553123 13.3924 0 12 0C10.6076 0 9.27226 0.553123 8.28769 1.53769C7.30312 2.52226 6.75 3.85761 6.75 5.25V6H1.5V21C1.5 21.7956 1.81607 22.5587 2.37868 23.1213C2.94129 23.6839 3.70435 24 4.5 24H19.5C20.2956 24 21.0587 23.6839 21.6213 23.1213C22.1839 22.5587 22.5 21.7956 22.5 21V6H17.25ZM3 7.5H21V21C21 21.3978 20.842 21.7794 20.5607 22.0607C20.2794 22.342 19.8978 22.5 19.5 22.5H4.5C4.10218 22.5 3.72064 22.342 3.43934 22.0607C3.15804 21.7794 3 21.3978 3 21V7.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
