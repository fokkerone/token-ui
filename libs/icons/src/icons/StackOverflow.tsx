

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M18.618 21.8581V15.4351H20.76V24.0001H1.5V15.4351H3.642V21.8581H18.618Z" fill="black" /><path d="M5.78552 19.7175H16.491V17.5755H5.78552V19.7175ZM15.381 0L13.662 1.278L20.052 9.8685L21.771 8.5905L15.381 0ZM10.071 5.0655L18.297 11.916L19.6665 10.2705L11.4405 3.42L10.0695 5.0655H10.071ZM7.38302 9.825L17.088 14.3445L17.9925 12.4035L8.28752 7.884L7.38302 9.825ZM5.99552 14.841L16.473 17.0445L16.914 14.9475L6.43652 12.7455L5.99552 14.841Z" fill="black" />
    </IconBase>
  );
};

export default Icon
