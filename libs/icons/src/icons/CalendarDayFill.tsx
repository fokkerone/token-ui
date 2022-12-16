

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6 0.75C6 0.551088 5.92098 0.360322 5.78033 0.21967C5.63968 0.0790176 5.44891 0 5.25 0C5.05109 0 4.86032 0.0790176 4.71967 0.21967C4.57902 0.360322 4.5 0.551088 4.5 0.75V1.5H3C2.20435 1.5 1.44129 1.81607 0.87868 2.37868C0.316071 2.94129 0 3.70435 0 4.5L0 6H24V4.5C24 3.70435 23.6839 2.94129 23.1213 2.37868C22.5587 1.81607 21.7956 1.5 21 1.5H19.5V0.75C19.5 0.551088 19.421 0.360322 19.2803 0.21967C19.1397 0.0790176 18.9489 0 18.75 0C18.5511 0 18.3603 0.0790176 18.2197 0.21967C18.079 0.360322 18 0.551088 18 0.75V1.5H6V0.75ZM24 21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V7.5H24V21ZM16.8225 11.7825C16.9093 11.7867 16.9961 11.7732 17.0775 11.7429C17.159 11.7126 17.2335 11.666 17.2964 11.6061C17.3593 11.5461 17.4094 11.474 17.4436 11.3941C17.4779 11.3142 17.4955 11.2282 17.4955 11.1412C17.4955 11.0543 17.4779 10.9683 17.4436 10.8884C17.4094 10.8085 17.3593 10.7364 17.2964 10.6764C17.2335 10.6165 17.159 10.5699 17.0775 10.5396C16.9961 10.5093 16.9093 10.4958 16.8225 10.5C16.7376 10.4992 16.6533 10.5153 16.5747 10.5475C16.4961 10.5796 16.4247 10.6271 16.3646 10.6871C16.3046 10.7472 16.2571 10.8186 16.225 10.8972C16.1928 10.9758 16.1767 11.0601 16.1775 11.145C16.1775 11.502 16.4655 11.7825 16.8225 11.7825ZM17.3265 12.627H16.3185V18.7845H17.3265V12.627ZM7.026 18.7845V15.3345H10.4175V14.4195H7.026V11.7015H10.722V10.7865H6V18.7845H7.026ZM11.97 18.7845H12.984V14.97C12.984 14.139 13.3245 13.4595 14.4135 13.4595C14.601 13.4595 14.8005 13.4655 14.907 13.482V12.5625C14.7809 12.5435 14.6535 12.5335 14.526 12.5325C13.653 12.5325 13.1895 13.0125 13.008 13.383H12.978V12.627H11.97V18.7845Z" fill="black" />
    </IconBase>
  );
};

export default Icon
