

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M9 1.5V6H1.5V1.5H9ZM1.5 0C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5L0 6C0 6.39782 0.158035 6.77936 0.43934 7.06066C0.720644 7.34196 1.10218 7.5 1.5 7.5H9C9.39782 7.5 9.77936 7.34196 10.0607 7.06066C10.342 6.77936 10.5 6.39782 10.5 6V1.5C10.5 1.10218 10.342 0.720644 10.0607 0.43934C9.77936 0.158035 9.39782 0 9 0L1.5 0ZM22.5 18V22.5H15V18H22.5ZM15 16.5C14.6022 16.5 14.2206 16.658 13.9393 16.9393C13.658 17.2206 13.5 17.6022 13.5 18V22.5C13.5 22.8978 13.658 23.2794 13.9393 23.5607C14.2206 23.842 14.6022 24 15 24H22.5C22.8978 24 23.2794 23.842 23.5607 23.5607C23.842 23.2794 24 22.8978 24 22.5V18C24 17.6022 23.842 17.2206 23.5607 16.9393C23.2794 16.658 22.8978 16.5 22.5 16.5H15ZM9 12V22.5H1.5V12H9ZM1.5 10.5C1.10218 10.5 0.720644 10.658 0.43934 10.9393C0.158035 11.2206 0 11.6022 0 12L0 22.5C0 22.8978 0.158035 23.2794 0.43934 23.5607C0.720644 23.842 1.10218 24 1.5 24H9C9.39782 24 9.77936 23.842 10.0607 23.5607C10.342 23.2794 10.5 22.8978 10.5 22.5V12C10.5 11.6022 10.342 11.2206 10.0607 10.9393C9.77936 10.658 9.39782 10.5 9 10.5H1.5ZM22.5 1.5V12H15V1.5H22.5ZM15 0C14.6022 0 14.2206 0.158035 13.9393 0.43934C13.658 0.720644 13.5 1.10218 13.5 1.5V12C13.5 12.3978 13.658 12.7794 13.9393 13.0607C14.2206 13.342 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.342 23.5607 13.0607C23.842 12.7794 24 12.3978 24 12V1.5C24 1.10218 23.842 0.720644 23.5607 0.43934C23.2794 0.158035 22.8978 0 22.5 0L15 0Z" fill="black" />
    </IconBase>
  );
};

export default Icon