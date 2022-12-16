

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.815 7.6395C16.9271 7.55965 17.0591 7.51221 17.1964 7.50238C17.3337 7.49254 17.4711 7.52069 17.5935 7.58374C17.7159 7.64679 17.8185 7.74231 17.8902 7.85983C17.9619 7.97735 17.9999 8.11233 18 8.25V15.75C17.9999 15.8877 17.9619 16.0227 17.8902 16.1402C17.8185 16.2577 17.7159 16.3532 17.5935 16.4163C17.4711 16.4793 17.3337 16.5075 17.1964 16.4976C17.0591 16.4878 16.9271 16.4403 16.815 16.3605L12.75 13.458V15.75C12.7499 15.8877 12.7119 16.0227 12.6402 16.1402C12.5685 16.2577 12.4659 16.3532 12.3435 16.4163C12.2211 16.4793 12.0837 16.5075 11.9464 16.4976C11.8091 16.4878 11.6771 16.4403 11.565 16.3605L7.5 13.458V15.75C7.5 15.9489 7.42098 16.1397 7.28033 16.2803C7.13968 16.421 6.94891 16.5 6.75 16.5C6.55109 16.5 6.36032 16.421 6.21967 16.2803C6.07902 16.1397 6 15.9489 6 15.75V8.25C6 8.05109 6.07902 7.86032 6.21967 7.71967C6.36032 7.57902 6.55109 7.5 6.75 7.5C6.94891 7.5 7.13968 7.57902 7.28033 7.71967C7.42098 7.86032 7.5 8.05109 7.5 8.25V10.542L11.565 7.6395C11.6771 7.55965 11.8091 7.51221 11.9464 7.50238C12.0837 7.49254 12.2211 7.52069 12.3435 7.58374C12.4659 7.64679 12.5685 7.74231 12.6402 7.85983C12.7119 7.97735 12.7499 8.11233 12.75 8.25V10.542L16.815 7.6395Z" fill="black" /><path d="M0 6C0 5.20435 0.316071 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H21C21.7956 3 22.5587 3.31607 23.1213 3.87868C23.6839 4.44129 24 5.20435 24 6V18C24 18.7956 23.6839 19.5587 23.1213 20.1213C22.5587 20.6839 21.7956 21 21 21H3C2.20435 21 1.44129 20.6839 0.87868 20.1213C0.316071 19.5587 0 18.7956 0 18V6ZM22.5 6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6Z" fill="black" />
    </IconBase>
  );
};

export default Icon