

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.5 17.25C1.5 17.4489 1.57902 17.6397 1.71967 17.7803C1.86032 17.921 2.05109 18 2.25 18H19.9395L15.219 22.719C15.0782 22.8598 14.9991 23.0508 14.9991 23.25C14.9991 23.4492 15.0782 23.6402 15.219 23.781C15.3598 23.9218 15.5508 24.0009 15.75 24.0009C15.9492 24.0009 16.1402 23.9218 16.281 23.781L22.281 17.781C22.3508 17.7113 22.4063 17.6286 22.4441 17.5375C22.4819 17.4463 22.5013 17.3487 22.5013 17.25C22.5013 17.1514 22.4819 17.0537 22.4441 16.9626C22.4063 16.8714 22.3508 16.7887 22.281 16.719L16.281 10.719C16.1402 10.5782 15.9492 10.4991 15.75 10.4991C15.5508 10.4991 15.3598 10.5782 15.219 10.719C15.0782 10.8598 14.9991 11.0508 14.9991 11.25C14.9991 11.4492 15.0782 11.6402 15.219 11.781L19.9395 16.5H2.25C2.05109 16.5 1.86032 16.579 1.71967 16.7197C1.57902 16.8603 1.5 17.0511 1.5 17.25ZM22.5 6.75C22.5 6.94891 22.421 7.13968 22.2803 7.28033C22.1397 7.42098 21.9489 7.5 21.75 7.5H4.0605L8.781 12.219C8.85073 12.2887 8.90604 12.3715 8.94378 12.4626C8.98152 12.5537 9.00095 12.6514 9.00095 12.75C9.00095 12.8486 8.98152 12.9463 8.94378 13.0374C8.90604 13.1285 8.85073 13.2113 8.781 13.281C8.71127 13.3507 8.62848 13.406 8.53737 13.4438C8.44626 13.4815 8.34861 13.5009 8.25 13.5009C8.15138 13.5009 8.05373 13.4815 7.96262 13.4438C7.87151 13.406 7.78873 13.3507 7.719 13.281L1.719 7.281C1.64915 7.21133 1.59374 7.12857 1.55593 7.03745C1.51812 6.94633 1.49866 6.84865 1.49866 6.75C1.49866 6.65135 1.51812 6.55367 1.55593 6.46255C1.59374 6.37143 1.64915 6.28867 1.719 6.219L7.719 0.219001C7.85983 0.0781714 8.05083 -0.000946045 8.25 -0.000946045C8.44916 -0.000946045 8.64017 0.0781714 8.781 0.219001C8.92183 0.359831 9.00095 0.550838 9.00095 0.750001C9.00095 0.949165 8.92183 1.14017 8.781 1.281L4.0605 6H21.75C21.9489 6 22.1397 6.07902 22.2803 6.21967C22.421 6.36032 22.5 6.55109 22.5 6.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon