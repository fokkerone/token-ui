

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.185 7.63953C10.0729 7.55968 9.9409 7.51224 9.80358 7.5024C9.66627 7.49257 9.52889 7.52072 9.40651 7.58377C9.28413 7.64682 9.18147 7.74233 9.10976 7.85985C9.03806 7.97737 9.00008 8.11236 9 8.25003V15.75C9.00008 15.8877 9.03806 16.0227 9.10976 16.1402C9.18147 16.2577 9.28413 16.3532 9.40651 16.4163C9.52889 16.4793 9.66627 16.5075 9.80358 16.4976C9.9409 16.4878 10.0729 16.4404 10.185 16.3605L15.435 12.6105C15.5322 12.5411 15.6115 12.4496 15.6661 12.3434C15.7208 12.2372 15.7494 12.1195 15.7494 12C15.7494 11.8806 15.7208 11.7629 15.6661 11.6567C15.6115 11.5505 15.5322 11.4589 15.435 11.3895L10.185 7.63953Z" fill="black" /><path d="M0 6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H21C21.7956 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7956 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7956 21 21 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18V6ZM22.5 6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6Z" fill="black" />
    </IconBase>
  );
};

export default Icon