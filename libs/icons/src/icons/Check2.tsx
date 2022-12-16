

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M20.781 5.469C20.8508 5.53867 20.9062 5.62143 20.944 5.71255C20.9818 5.80367 21.0013 5.90135 21.0013 6C21.0013 6.09865 20.9818 6.19633 20.944 6.28745C20.9062 6.37857 20.8508 6.46133 20.781 6.531L10.281 17.031C10.2113 17.1008 10.1285 17.1563 10.0374 17.1941C9.9463 17.2319 9.84862 17.2513 9.74997 17.2513C9.65132 17.2513 9.55364 17.2319 9.46252 17.1941C9.3714 17.1563 9.28864 17.1008 9.21897 17.031L3.96897 11.781C3.82814 11.6402 3.74902 11.4492 3.74902 11.25C3.74902 11.0508 3.82814 10.8598 3.96897 10.719C4.1098 10.5782 4.30081 10.4991 4.49997 10.4991C4.69913 10.4991 4.89014 10.5782 5.03097 10.719L9.74997 15.4395L19.719 5.469C19.7886 5.39915 19.8714 5.34374 19.9625 5.30593C20.0536 5.26812 20.1513 5.24866 20.25 5.24866C20.3486 5.24866 20.4463 5.26812 20.5374 5.30593C20.6285 5.34374 20.7113 5.39915 20.781 5.469Z" fill="black" />
    </IconBase>
  );
};

export default Icon
