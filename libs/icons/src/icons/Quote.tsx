

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M18 18C18.3978 18 18.7794 17.842 19.0607 17.5607C19.342 17.2794 19.5 16.8978 19.5 16.5V12.837C19.5 12.4392 19.342 12.0576 19.0607 11.7763C18.7794 11.495 18.3978 11.337 18 11.337H15.918C15.918 10.8105 15.9495 10.2825 16.011 9.756C16.104 9.198 16.26 8.7015 16.476 8.268C16.6935 7.833 16.9725 7.4925 17.3145 7.2435C17.655 6.9645 18.0885 6.825 18.6165 6.825V4.5C17.748 4.5 16.989 4.686 16.3365 5.058C15.6897 5.42623 15.1336 5.93468 14.709 6.546C14.2829 7.21997 13.9688 7.95855 13.779 8.733C13.5877 9.58764 13.4941 10.4612 13.5 11.337V16.5C13.5 16.8978 13.6581 17.2794 13.9394 17.5607C14.2207 17.842 14.6022 18 15 18H18ZM9.00002 18C9.39784 18 9.77937 17.842 10.0607 17.5607C10.342 17.2794 10.5 16.8978 10.5 16.5V12.837C10.5 12.4392 10.342 12.0576 10.0607 11.7763C9.77937 11.495 9.39784 11.337 9.00002 11.337H6.91802C6.91802 10.8105 6.94952 10.2825 7.01102 9.756C7.10402 9.198 7.26002 8.7015 7.47602 8.268C7.69352 7.833 7.97252 7.4925 8.31452 7.2435C8.65502 6.9645 9.08852 6.825 9.61652 6.825V4.5C8.74802 4.5 7.98902 4.686 7.33652 5.058C6.6897 5.42623 6.13358 5.93468 5.70902 6.546C5.2829 7.21997 4.96883 7.95855 4.77902 8.733C4.58774 9.58764 4.49414 10.4612 4.50002 11.337V16.5C4.50002 16.8978 4.65805 17.2794 4.93936 17.5607C5.22066 17.842 5.60219 18 6.00002 18H9.00002Z" fill="black" />
    </IconBase>
  );
};

export default Icon
