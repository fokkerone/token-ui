

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3.19464 2L4.79731 19.9943L11.9894 22L19.2013 19.9869L20.8053 2H3.19464ZM17.476 6.12274L16.9423 12.1174L16.9442 12.1498L16.9416 12.2239V12.2232L16.5624 16.4146L16.5206 16.7869L12 18.0372V18.0378L11.9963 18.041L7.48364 16.7831L7.1779 13.3179H9.3909L9.54782 15.0802L12.0006 15.7446L12 15.7457L14.4614 15.0714L14.7217 12.2021H9.57586L9.5317 11.717L9.43077 10.5806L9.37853 9.97038H14.9173L15.1189 7.73868H6.68229L6.63797 7.2542L6.53771 6.1172L6.48479 5.507H17.5288L17.476 6.12274Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon