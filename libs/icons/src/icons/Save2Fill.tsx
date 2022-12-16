

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.75 2.25C12.75 1.65326 12.9871 1.08097 13.409 0.65901C13.831 0.237053 14.4033 0 15 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L12 0C11.529 0.627 11.25 1.4055 11.25 2.25V11.25H8.25C8.10147 11.2497 7.9562 11.2936 7.83262 11.376C7.70904 11.4584 7.6127 11.5756 7.55582 11.7128C7.49895 11.85 7.48409 12.001 7.51314 12.1467C7.54219 12.2923 7.61384 12.4261 7.719 12.531L11.469 16.281C11.5387 16.3508 11.6214 16.4063 11.7125 16.4441C11.8037 16.4819 11.9013 16.5013 12 16.5013C12.0987 16.5013 12.1963 16.4819 12.2874 16.4441C12.3786 16.4063 12.4613 16.3508 12.531 16.281L16.281 12.531C16.3862 12.4261 16.4578 12.2923 16.4869 12.1467C16.5159 12.001 16.5011 11.85 16.4442 11.7128C16.3873 11.5756 16.291 11.4584 16.1674 11.376C16.0438 11.2936 15.8985 11.2497 15.75 11.25H12.75V2.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon