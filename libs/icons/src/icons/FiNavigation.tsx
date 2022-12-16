

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M22.7071 1.29292C23.006 1.59175 23.0847 2.04618 22.9038 2.42811L13.9038 21.4281C13.7229 21.8098 13.3218 22.0368 12.9015 21.9952C12.4812 21.9535 12.1323 21.6523 12.0299 21.2426L10.1754 13.8246L2.75749 11.9702C2.34773 11.8677 2.04651 11.5189 2.00489 11.0986C1.96327 10.6782 2.19022 10.2771 2.57194 10.0963L21.5719 1.09629C21.9539 0.915375 22.4083 0.994089 22.7071 1.29292ZM5.95337 10.7076L11.2426 12.0299C11.6008 12.1195 11.8806 12.3992 11.9702 12.7575L13.2925 18.0467L19.8976 4.10241L5.95337 10.7076Z" fill="#250116" />
    </IconBase>
  );
};

export default Icon