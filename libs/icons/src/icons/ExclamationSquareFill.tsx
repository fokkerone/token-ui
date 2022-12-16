

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L3 0ZM12 6C12.8025 6 13.431 6.693 13.35 7.4925L12.825 12.753C12.8074 12.9597 12.7128 13.1522 12.56 13.2925C12.4073 13.4327 12.2074 13.5106 12 13.5106C11.7926 13.5106 11.5927 13.4327 11.44 13.2925C11.2872 13.1522 11.1926 12.9597 11.175 12.753L10.65 7.4925C10.6311 7.30385 10.652 7.11334 10.7113 6.93325C10.7705 6.75316 10.8668 6.58747 10.994 6.44687C11.1212 6.30626 11.2764 6.19386 11.4497 6.11689C11.6229 6.03993 11.8104 6.00011 12 6ZM12.003 15C12.4008 15 12.7824 15.158 13.0637 15.4393C13.345 15.7206 13.503 16.1022 13.503 16.5C13.503 16.8978 13.345 17.2794 13.0637 17.5607C12.7824 17.842 12.4008 18 12.003 18C11.6052 18 11.2236 17.842 10.9423 17.5607C10.661 17.2794 10.503 16.8978 10.503 16.5C10.503 16.1022 10.661 15.7206 10.9423 15.4393C11.2236 15.158 11.6052 15 12.003 15Z" fill="black" />
    </IconBase>
  );
};

export default Icon
