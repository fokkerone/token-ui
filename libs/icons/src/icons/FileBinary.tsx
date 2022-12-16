

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M8.289 19.6349C9.753 19.6349 10.575 18.4499 10.575 16.3274C10.575 14.2094 9.753 13.0229 8.289 13.0229C6.822 13.0229 6 14.2079 6 16.3274C6 18.4499 6.822 19.6364 8.289 19.6364V19.6349ZM7.041 16.3274C7.041 14.7524 7.476 13.9094 8.289 13.9094C8.826 13.9094 9.1995 14.2799 9.3885 14.9909L7.05 16.7054C7.04465 16.5795 7.04165 16.4535 7.041 16.3274ZM8.289 18.7484C7.749 18.7484 7.38 18.3794 7.191 17.6714L9.525 15.9539C9.5295 16.0724 9.5325 16.1999 9.5325 16.3274C9.5325 17.9054 9.0975 18.7484 8.289 18.7484ZM16.2825 19.4999V18.6074H14.595V13.1579H13.56L11.775 14.3369V15.3689L13.479 14.2499H13.554V18.6089H11.784V19.4999H16.284H16.2825Z" fill="black" /><path d="M6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V3C21 2.20435 20.6839 1.44129 20.1213 0.87868C19.5587 0.316071 18.7956 0 18 0L6 0ZM6 1.5H18C18.3978 1.5 18.7794 1.65804 19.0607 1.93934C19.342 2.22064 19.5 2.60218 19.5 3V21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5H6C5.60218 22.5 5.22064 22.342 4.93934 22.0607C4.65804 21.7794 4.5 21.3978 4.5 21V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
