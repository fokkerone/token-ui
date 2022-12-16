

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M17 21.63H5C4.20435 21.63 3.44129 21.3139 2.87868 20.7513C2.31607 20.1887 2 19.4257 2 18.63V10.63C2 10.3648 1.89464 10.1104 1.70711 9.9229C1.51957 9.73536 1.26522 9.63 1 9.63C0.734784 9.63 0.48043 9.73536 0.292893 9.9229C0.105357 10.1104 0 10.3648 0 10.63L0 18.63C0 19.9561 0.526784 21.2279 1.46447 22.1655C2.40215 23.1032 3.67392 23.63 5 23.63H17C17.2652 23.63 17.5196 23.5246 17.7071 23.3371C17.8946 23.1496 18 22.8952 18 22.63C18 22.3648 17.8946 22.1104 17.7071 21.9229C17.5196 21.7354 17.2652 21.63 17 21.63ZM21 3.63H7C6.20435 3.63 5.44129 3.94608 4.87868 4.50868C4.31607 5.07129 4 5.83436 4 6.63V16.63C4 17.4257 4.31607 18.1887 4.87868 18.7513C5.44129 19.3139 6.20435 19.63 7 19.63H21C21.7956 19.63 22.5587 19.3139 23.1213 18.7513C23.6839 18.1887 24 17.4257 24 16.63V6.63C24 5.83436 23.6839 5.07129 23.1213 4.50868C22.5587 3.94608 21.7956 3.63 21 3.63ZM20.59 5.63L14.71 11.51C14.617 11.6037 14.5064 11.6781 14.3846 11.7289C14.2627 11.7797 14.132 11.8058 14 11.8058C13.868 11.8058 13.7373 11.7797 13.6154 11.7289C13.4936 11.6781 13.383 11.6037 13.29 11.51L7.41 5.63H20.59ZM22 16.63C22 16.8952 21.8946 17.1496 21.7071 17.3371C21.5196 17.5246 21.2652 17.63 21 17.63H7C6.73478 17.63 6.48043 17.5246 6.29289 17.3371C6.10536 17.1496 6 16.8952 6 16.63V7L11.88 12.88C12.4425 13.4418 13.205 13.7574 14 13.7574C14.795 13.7574 15.5575 13.4418 16.12 12.88L22 7V16.63Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
