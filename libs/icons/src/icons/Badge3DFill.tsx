

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M15.2355 8.95203H13.9695V15.042H15.2355C16.9095 15.042 17.667 14.0415 17.667 12.012C17.667 9.98103 16.902 8.95203 15.2355 8.95203Z" fill="black" /><path d="M0 6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H21C21.7956 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7956 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7956 21 21 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18V6ZM7.776 12.552C8.745 12.552 9.3585 13.119 9.366 13.902C9.378 14.7075 8.7255 15.2805 7.737 15.2805C6.84 15.2745 6.1815 14.793 6.135 14.1465H4.5C4.545 15.5175 5.6865 16.6785 7.7295 16.6785C9.5895 16.6785 11.157 15.6885 11.1375 13.9815C11.118 12.552 10.017 11.9115 9.1995 11.8335V11.7405C9.8595 11.6355 10.887 10.95 10.8615 9.678C10.842 8.319 9.6615 7.323 7.782 7.3305C5.817 7.338 4.7175 8.4315 4.671 9.8355H6.3255C6.3585 9.249 6.9 8.709 7.7295 8.709C8.5275 8.709 9.1215 9.204 9.1215 9.9285C9.1275 10.647 8.547 11.181 7.7295 11.181H6.7815V12.552H7.776ZM12.189 16.5H15.4725C18.1875 16.5 19.5 14.8395 19.5 11.9775C19.5 9.1365 18.2085 7.5015 15.4725 7.5015H12.189V16.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
