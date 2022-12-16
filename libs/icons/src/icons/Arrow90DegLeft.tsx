

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M1.719 7.281C1.64915 7.21133 1.59374 7.12857 1.55593 7.03745C1.51812 6.94633 1.49866 6.84865 1.49866 6.75C1.49866 6.65135 1.51812 6.55367 1.55593 6.46255C1.59374 6.37143 1.64915 6.28867 1.719 6.219L7.719 0.219001C7.85983 0.0781714 8.05083 -0.000946045 8.25 -0.000946045C8.44916 -0.000946045 8.64017 0.0781714 8.781 0.219001C8.92183 0.359831 9.00094 0.550838 9.00094 0.750001C9.00094 0.949165 8.92183 1.14017 8.781 1.281L4.0605 6H18.75C19.7446 6 20.6984 6.39509 21.4016 7.09835C22.1049 7.80161 22.5 8.75544 22.5 9.75V21.75C22.5 21.9489 22.421 22.1397 22.2803 22.2803C22.1397 22.421 21.9489 22.5 21.75 22.5C21.5511 22.5 21.3603 22.421 21.2197 22.2803C21.079 22.1397 21 21.9489 21 21.75V9.75C21 9.15326 20.7629 8.58097 20.341 8.15901C19.919 7.73705 19.3467 7.5 18.75 7.5H4.0605L8.781 12.219C8.85073 12.2887 8.90604 12.3715 8.94378 12.4626C8.98152 12.5537 9.00094 12.6514 9.00094 12.75C9.00094 12.8486 8.98152 12.9463 8.94378 13.0374C8.90604 13.1285 8.85073 13.2113 8.781 13.281C8.71127 13.3507 8.62848 13.406 8.53737 13.4438C8.44626 13.4815 8.34861 13.5009 8.25 13.5009C8.15138 13.5009 8.05373 13.4815 7.96262 13.4438C7.87151 13.406 7.78873 13.3507 7.719 13.281L1.719 7.281Z" fill="black" />
    </IconBase>
  );
};

export default Icon