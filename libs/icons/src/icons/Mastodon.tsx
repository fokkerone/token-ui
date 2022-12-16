

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.7851 18.2925C19.8091 17.9325 22.4401 16.08 22.7701 14.388C23.2921 11.721 23.2501 7.8795 23.2501 7.8795C23.2501 2.6745 19.8211 1.1475 19.8211 1.1475C18.0931 0.357 15.1246 0.0255 12.0406 0H11.9656C8.88006 0.0255 5.91306 0.357 4.18506 1.1475C4.18506 1.1475 0.75756 2.673 0.75756 7.8795L0.75456 8.8725C0.74856 9.8325 0.74406 10.8975 0.77106 12.009C0.89556 17.1 1.71006 22.119 6.44106 23.364C8.62206 23.9385 10.4956 24.0585 12.0046 23.976C14.7391 23.826 16.2751 23.0055 16.2751 23.0055L16.1851 21.03C16.1851 21.03 14.2306 21.645 12.0346 21.57C9.85956 21.495 7.56456 21.336 7.21206 18.678C7.1785 18.4314 7.16196 18.1828 7.16256 17.934C7.16256 17.934 9.29856 18.453 12.0046 18.576C13.6591 18.651 15.2101 18.48 16.7866 18.2925H16.7851ZM19.2046 14.5875H16.6951V8.4675C16.6951 7.179 16.1491 6.525 15.0586 6.525C13.8526 6.525 13.2481 7.3005 13.2481 8.8365V12.186H10.7521V8.835C10.7521 7.299 10.1476 6.5235 8.94156 6.5235C7.85106 6.5235 7.30506 7.1775 7.30506 8.4675V14.586H4.79556V8.283C4.79556 6.9945 5.12556 5.9715 5.78556 5.214C6.46956 4.4565 7.36356 4.068 8.47506 4.068C9.75906 4.068 10.7311 4.56 11.3746 5.5425L12.0001 6.585L12.6256 5.5425C13.2691 4.56 14.2411 4.068 15.5266 4.068C16.6366 4.068 17.5306 4.4565 18.2131 5.214C18.8761 5.9715 19.2046 6.9945 19.2046 8.283V14.5875Z" fill="black" />
    </IconBase>
  );
};

export default Icon
