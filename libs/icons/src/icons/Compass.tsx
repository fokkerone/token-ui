

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 24.024C14.7277 24.0256 17.363 23.0361 19.4156 21.2397C21.4682 19.4432 22.7982 16.9622 23.1581 14.2584C23.518 11.5545 22.8833 8.812 21.3721 6.54119C19.8609 4.27039 17.5761 2.62598 14.943 1.914C15.0071 1.69058 15.0185 1.45531 14.9761 1.22675C14.9338 0.998196 14.8389 0.782607 14.699 0.596999C14.559 0.411391 14.3779 0.260844 14.1698 0.157239C13.9617 0.0536335 13.7324 -0.000195296 13.5 5.32406e-07H10.5C10.2675 -0.000195296 10.0382 0.0536335 9.83013 0.157239C9.62205 0.260844 9.44089 0.411391 9.30096 0.596999C9.16103 0.782607 9.06614 0.998196 9.0238 1.22675C8.98145 1.45531 8.99281 1.69058 9.05696 1.914C6.42383 2.62598 4.13905 4.27039 2.62783 6.54119C1.11661 8.812 0.48189 11.5545 0.841792 14.2584C1.20169 16.9622 2.5317 19.4432 4.5843 21.2397C6.6369 23.0361 9.27227 24.0256 12 24.024ZM21.75 12.774C21.75 15.3599 20.7227 17.8398 18.8943 19.6683C17.0658 21.4968 14.5858 22.524 12 22.524C9.4141 22.524 6.93415 21.4968 5.10567 19.6683C3.27719 17.8398 2.24997 15.3599 2.24997 12.774C2.24997 10.1881 3.27719 7.70819 5.10567 5.87971C6.93415 4.05123 9.4141 3.024 12 3.024C14.5858 3.024 17.0658 4.05123 18.8943 5.87971C20.7227 7.70819 21.75 10.1881 21.75 12.774Z" fill="black" /><path d="M10.41 11.16L17.835 6.91504L13.59 14.34L6.1665 18.585L10.4085 11.16H10.41Z" fill="black" />
    </IconBase>
  );
};

export default Icon