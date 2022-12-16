

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.315 19.5001C15.474 19.5001 17.433 17.8696 17.433 15.2656C17.433 13.3066 15.957 11.8411 13.947 11.6866V11.6041C14.7168 11.4882 15.4198 11.101 15.9292 10.5124C16.4386 9.9238 16.7208 9.17252 16.725 8.3941C16.725 6.1291 14.982 4.7041 12.204 4.7041H5.76453V19.5001H12.315ZM8.86203 7.0111H11.406C12.8505 7.0111 13.6815 7.6876 13.6815 8.8771C13.6815 10.1281 12.738 10.8571 11.0865 10.8571H8.86203V7.0096V7.0111ZM8.86203 17.1931V12.8971H11.457C13.2825 12.8971 14.277 13.6351 14.277 15.0196C14.277 16.4341 13.3125 17.1931 11.529 17.1931H8.86053H8.86203Z" fill="black" />
    </IconBase>
  );
};

export default Icon