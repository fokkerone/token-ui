

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.316071 4.44129 0 5.20435 0 6L0 18.015C0.00396529 18.808 0.321786 19.5673 0.883965 20.1266C1.44615 20.686 2.20694 21 3 21H11.25C11.4489 21 11.6397 20.921 11.7803 20.7803C11.921 20.6397 12 20.4489 12 20.25C12 20.0511 11.921 19.8603 11.7803 19.7197C11.6397 19.579 11.4489 19.5 11.25 19.5H3C2.66982 19.5 2.34884 19.3911 2.08686 19.1902C1.82487 18.9892 1.63652 18.7074 1.551 18.3885L10.011 13.182L11.6145 14.142L12 14.3745L12.3855 14.1435L14.3805 12.9465L22.5 8.0745V12.75C22.5 12.9489 22.579 13.1397 22.7197 13.2803C22.8603 13.421 23.0511 13.5 23.25 13.5C23.4489 13.5 23.6397 13.421 23.7803 13.2803C23.921 13.1397 24 12.9489 24 12.75V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3H3ZM8.562 12.312L1.5 16.6575V8.0745L8.562 12.312ZM10.392 11.661L1.5 6.3255V6C1.5 5.60218 1.65804 5.22064 1.93934 4.93934C2.22064 4.65804 2.60218 4.5 3 4.5H21C21.3978 4.5 21.7794 4.65804 22.0607 4.93934C22.342 5.22064 22.5 5.60218 22.5 6V6.3255L13.608 11.661L12 12.6255L10.392 11.661ZM16.098 16.098C16.7094 15.4867 17.5131 15.1054 18.3733 15.0185C19.2334 14.9316 20.0972 15.1444 20.8185 15.621L15.621 20.8185C15.1444 20.0972 14.9316 19.2334 15.0185 18.3733C15.1054 17.5131 15.4867 16.7094 16.098 16.098ZM16.683 21.879L21.879 16.6815C22.3551 17.4028 22.5675 18.2664 22.4803 19.1263C22.3931 19.9861 22.0118 20.7895 21.4006 21.4006C20.7895 22.0118 19.9861 22.3931 19.1263 22.4803C18.2664 22.5675 17.4028 22.3551 16.6815 21.879H16.683ZM22.4625 15.039C21.975 14.5515 21.3962 14.1647 20.7592 13.9009C20.1222 13.637 19.4395 13.5012 18.75 13.5012C18.0605 13.5012 17.3778 13.637 16.7408 13.9009C16.1038 14.1647 15.525 14.5515 15.0375 15.039C14.0529 16.0236 13.4997 17.359 13.4997 18.7515C13.4997 20.144 14.0529 21.4794 15.0375 22.464C16.0221 23.4486 17.3575 24.0018 18.75 24.0018C20.1425 24.0018 21.4779 23.4486 22.4625 22.464C23.4471 21.4794 24.0003 20.144 24.0003 18.7515C24.0003 17.359 23.4471 16.0236 22.4625 15.039Z" fill="black" />
    </IconBase>
  );
};

export default Icon
