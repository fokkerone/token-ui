

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.9943 2C10.0165 2 8.08306 2.58649 6.43856 3.6853C4.79407 4.78412 3.51235 6.3459 2.75547 8.17317C1.9986 10.0004 1.80056 12.0111 2.18641 13.9509C2.57227 15.8907 3.52467 17.6725 4.9232 19.0711C6.32172 20.4696 8.10355 21.422 10.0434 21.8079C11.9832 22.1937 13.9938 21.9957 15.8211 21.2388C17.6484 20.4819 19.2101 19.2002 20.309 17.5557C21.4078 15.9112 21.9943 13.9778 21.9943 12C21.9944 10.6868 21.7358 9.38634 21.2333 8.17304C20.7308 6.95973 19.9942 5.8573 19.0656 4.92869C18.137 4.00008 17.0345 3.26349 15.8212 2.76098C14.6079 2.25847 13.3075 1.99989 11.9943 2ZM15.1738 17.1525C15.1363 17.2458 15.0794 17.33 15.0067 17.3996C14.9341 17.4691 14.8474 17.5223 14.7525 17.5556C14.6576 17.5889 14.5567 17.6015 14.4566 17.5926C14.3564 17.5837 14.2593 17.5535 14.1718 17.504L11.4571 15.3946L9.71479 17.002C9.67436 17.0319 9.62707 17.0511 9.57726 17.0579C9.52746 17.0647 9.47675 17.0589 9.42979 17.0409L9.76379 14.0525L9.77448 14.061L9.78131 14.002C9.78131 14.002 14.6663 9.55445 14.8653 9.36496C15.0668 9.17596 15.0003 9.13496 15.0003 9.13496C15.0118 8.90443 14.6388 9.13496 14.6388 9.13496L8.16627 13.299L5.47078 12.381C5.47078 12.381 5.05678 12.2325 5.01778 11.906C4.97678 11.582 5.48427 11.406 5.48427 11.406L16.2013 7.14849C16.2013 7.14849 17.0823 6.75597 17.0823 7.406L15.1738 17.1525Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon