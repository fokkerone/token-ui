

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.77002 6.92404C7.92281 6.79679 8.11988 6.73542 8.3179 6.75342C8.51592 6.77143 8.69869 6.86733 8.82602 7.02004L12 10.8285L15.174 7.01854C15.3015 6.86578 15.4845 6.76992 15.6827 6.75205C15.8808 6.73419 16.078 6.79579 16.2308 6.92329C16.3835 7.05079 16.4794 7.23376 16.4973 7.43194C16.5151 7.63012 16.4535 7.82728 16.326 7.98004L12.9765 12L16.326 16.02C16.4477 16.1734 16.5046 16.3683 16.4845 16.5631C16.4645 16.7578 16.3691 16.937 16.2186 17.0624C16.0682 17.1877 15.8748 17.2493 15.6796 17.2339C15.4844 17.2185 15.3029 17.1274 15.174 16.98L12 13.1715L8.82602 16.9815C8.69852 17.1343 8.51555 17.2302 8.31737 17.248C8.1192 17.2659 7.92204 17.2043 7.76927 17.0768C7.61651 16.9493 7.52065 16.7663 7.50279 16.5681C7.48492 16.37 7.54652 16.1728 7.67402 16.02L11.0235 12L7.67402 7.98004C7.54677 7.82725 7.4854 7.63019 7.50341 7.43217C7.52141 7.23414 7.61731 7.05138 7.77002 6.92404Z" fill="black" /><path d="M6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3V21C3 21.7956 3.31607 22.5587 3.87868 23.1213C4.44129 23.6839 5.20435 24 6 24H18C18.7956 24 19.5587 23.6839 20.1213 23.1213C20.6839 22.5587 21 21.7956 21 21V3C21 2.20435 20.6839 1.44129 20.1213 0.87868C19.5587 0.316071 18.7956 0 18 0L6 0ZM6 1.5H18C18.3978 1.5 18.7794 1.65804 19.0607 1.93934C19.342 2.22064 19.5 2.60218 19.5 3V21C19.5 21.3978 19.342 21.7794 19.0607 22.0607C18.7794 22.342 18.3978 22.5 18 22.5H6C5.60218 22.5 5.22064 22.342 4.93934 22.0607C4.65804 21.7794 4.5 21.3978 4.5 21V3C4.5 2.60218 4.65804 2.22064 4.93934 1.93934C5.22064 1.65804 5.60218 1.5 6 1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon