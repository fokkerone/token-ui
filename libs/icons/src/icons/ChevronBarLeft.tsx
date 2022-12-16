

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M17.781 5.469C17.8508 5.53867 17.9063 5.62143 17.9441 5.71255C17.9819 5.80367 18.0013 5.90135 18.0013 6C18.0013 6.09865 17.9819 6.19633 17.9441 6.28745C17.9063 6.37857 17.8508 6.46133 17.781 6.531L12.3105 12L17.781 17.469C17.9218 17.6098 18.0009 17.8008 18.0009 18C18.0009 18.1992 17.9218 18.3902 17.781 18.531C17.6402 18.6718 17.4492 18.7509 17.25 18.7509C17.0508 18.7509 16.8598 18.6718 16.719 18.531L10.719 12.531C10.6492 12.4613 10.5937 12.3786 10.5559 12.2874C10.5181 12.1963 10.4987 12.0987 10.4987 12C10.4987 11.9013 10.5181 11.8037 10.5559 11.7125C10.5937 11.6214 10.6492 11.5387 10.719 11.469L16.719 5.469C16.7887 5.39915 16.8714 5.34374 16.9626 5.30593C17.0537 5.26812 17.1513 5.24866 17.25 5.24866C17.3487 5.24866 17.4463 5.26812 17.5374 5.30593C17.6286 5.34374 17.7113 5.39915 17.781 5.469ZM6.75 1.5C6.55109 1.5 6.36032 1.57902 6.21967 1.71967C6.07902 1.86032 6 2.05109 6 2.25V21.75C6 21.9489 6.07902 22.1397 6.21967 22.2803C6.36032 22.421 6.55109 22.5 6.75 22.5C6.94891 22.5 7.13968 22.421 7.28033 22.2803C7.42098 22.1397 7.5 21.9489 7.5 21.75V2.25C7.5 2.05109 7.42098 1.86032 7.28033 1.71967C7.13968 1.57902 6.94891 1.5 6.75 1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon