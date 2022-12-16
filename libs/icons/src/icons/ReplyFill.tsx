

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M8.88145 17.8497L2.02945 12.9297C1.86806 12.8344 1.73432 12.6986 1.64141 12.5357C1.5485 12.3729 1.49963 12.1887 1.49963 12.0012C1.49963 11.8138 1.5485 11.6295 1.64141 11.4667C1.73432 11.3039 1.86806 11.1681 2.02945 11.0727L8.88145 6.14973C9.04479 6.05365 9.23064 6.00251 9.42013 6.00148C9.60963 6.00045 9.79602 6.04958 9.96039 6.14388C10.1248 6.23817 10.2613 6.37428 10.356 6.53838C10.4508 6.70248 10.5004 6.88873 10.5 7.07823V8.99973C12.75 8.99973 19.5 8.99973 21 20.9997C17.25 14.2497 10.5 14.9997 10.5 14.9997V16.9212C10.5 17.7612 9.59095 18.2682 8.88145 17.8512V17.8497Z" fill="black" />
    </IconBase>
  );
};

export default Icon