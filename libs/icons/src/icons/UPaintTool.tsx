

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M18 1H10C9.20435 1 8.44129 1.31607 7.87868 1.87868C7.31607 2.44129 7 3.20435 7 4H6C5.20435 4 4.44129 4.31607 3.87868 4.87868C3.31607 5.44129 3 6.20435 3 7V10C3 10.7956 3.31607 11.5587 3.87868 12.1213C4.44129 12.6839 5.20435 13 6 13H12C12.2652 13 12.5196 13.1054 12.7071 13.2929C12.8946 13.4804 13 13.7348 13 14V15C12.4696 15 11.9609 15.2107 11.5858 15.5858C11.2107 15.9609 11 16.4696 11 17V21C11 21.5304 11.2107 22.0391 11.5858 22.4142C11.9609 22.7893 12.4696 23 13 23H15C15.5304 23 16.0391 22.7893 16.4142 22.4142C16.7893 22.0391 17 21.5304 17 21V17C17 16.4696 16.7893 15.9609 16.4142 15.5858C16.0391 15.2107 15.5304 15 15 15V14C15 13.2044 14.6839 12.4413 14.1213 11.8787C13.5587 11.3161 12.7956 11 12 11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H7C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9H18C18.7956 9 19.5587 8.68393 20.1213 8.12132C20.6839 7.55871 21 6.79565 21 6V4C21 3.20435 20.6839 2.44129 20.1213 1.87868C19.5587 1.31607 18.7956 1 18 1ZM15 17V21H13V17H15ZM19 6C19 6.26522 18.8946 6.51957 18.7071 6.70711C18.5196 6.89464 18.2652 7 18 7H10C9.73478 7 9.48043 6.89464 9.29289 6.70711C9.10536 6.51957 9 6.26522 9 6V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H18C18.2652 3 18.5196 3.10536 18.7071 3.29289C18.8946 3.48043 19 3.73478 19 4V6Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
