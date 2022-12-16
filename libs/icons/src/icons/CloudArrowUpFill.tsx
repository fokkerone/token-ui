

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12 3C10.0204 3.00621 8.10822 3.7202 6.609 5.013C5.46 6.003 4.6275 7.293 4.413 8.5875C1.899 9.1425 0 11.3325 0 13.977C0 17.049 2.562 19.5 5.6715 19.5H19.0305C21.753 19.5 24 17.355 24 14.6595C24 12.2055 22.137 10.206 19.749 9.8685C19.3845 5.9985 16.035 3 12 3ZM15.531 10.719C15.6007 10.7887 15.656 10.8715 15.6938 10.9626C15.7315 11.0537 15.7509 11.1514 15.7509 11.25C15.7509 11.3486 15.7315 11.4463 15.6938 11.5374C15.656 11.6285 15.6007 11.7113 15.531 11.781C15.4613 11.8507 15.3785 11.906 15.2874 11.9438C15.1963 11.9815 15.0986 12.0009 15 12.0009C14.9014 12.0009 14.8037 11.9815 14.7126 11.9438C14.6215 11.906 14.5387 11.8507 14.469 11.781L12.75 10.0605V15.75C12.75 15.9489 12.671 16.1397 12.5303 16.2803C12.3897 16.421 12.1989 16.5 12 16.5C11.8011 16.5 11.6103 16.421 11.4697 16.2803C11.329 16.1397 11.25 15.9489 11.25 15.75V10.0605L9.531 11.781C9.39017 11.9218 9.19916 12.0009 9 12.0009C8.80084 12.0009 8.60983 11.9218 8.469 11.781C8.32817 11.6402 8.24905 11.4492 8.24905 11.25C8.24905 11.0508 8.32817 10.8598 8.469 10.719L11.469 7.719C11.5387 7.64916 11.6214 7.59374 11.7125 7.55593C11.8037 7.51812 11.9013 7.49866 12 7.49866C12.0987 7.49866 12.1963 7.51812 12.2874 7.55593C12.3786 7.59374 12.4613 7.64916 12.531 7.719L15.531 10.719Z" fill="black" />
    </IconBase>
  );
};

export default Icon
