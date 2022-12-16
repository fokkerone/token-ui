// Icon template
//
module.exports = ({ pathData }) => `

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      ${pathData}
    </IconBase>
  );
};

export default Icon
`;
