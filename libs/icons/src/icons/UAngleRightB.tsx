

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M15.54 11.29L9.88 5.64004C9.78703 5.54631 9.67643 5.47191 9.55457 5.42115C9.43271 5.37038 9.30201 5.34424 9.17 5.34424C9.03799 5.34424 8.90728 5.37038 8.78542 5.42115C8.66356 5.47191 8.55296 5.54631 8.46 5.64004C8.27375 5.8274 8.1692 6.08085 8.1692 6.34504C8.1692 6.60922 8.27375 6.86267 8.46 7.05004L13.41 12.05L8.46 17C8.27375 17.1874 8.1692 17.4409 8.1692 17.705C8.1692 17.9692 8.27375 18.2227 8.46 18.41C8.55261 18.5045 8.66306 18.5797 8.78493 18.6312C8.90681 18.6827 9.03769 18.7095 9.17 18.71C9.3023 18.7095 9.43319 18.6827 9.55506 18.6312C9.67694 18.5797 9.78738 18.5045 9.88 18.41L15.54 12.76C15.6415 12.6664 15.7225 12.5527 15.7779 12.4262C15.8333 12.2997 15.8619 12.1631 15.8619 12.025C15.8619 11.8869 15.8333 11.7503 15.7779 11.6238C15.7225 11.4973 15.6415 11.3837 15.54 11.29Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
