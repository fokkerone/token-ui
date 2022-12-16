

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M2.82772 0.766232C3.09018 0.504165 3.40534 0.300869 3.75231 0.169817C4.09929 0.0387646 4.47015 -0.0170519 4.84033 0.00606638C5.2105 0.0291847 5.57154 0.13071 5.89951 0.303914C6.22748 0.477118 6.5149 0.718046 6.74272 1.01073L9.43522 4.46973C9.92872 5.10423 10.1027 5.93073 9.90772 6.71073L9.08722 9.99573C9.0448 10.1659 9.04709 10.3441 9.09387 10.5131C9.14065 10.6821 9.23034 10.8361 9.35422 10.9602L13.0397 14.6457C13.164 14.7699 13.3183 14.8597 13.4875 14.9065C13.6568 14.9533 13.8354 14.9554 14.0057 14.9127L17.2892 14.0922C17.6741 13.996 18.0759 13.9885 18.4641 14.0704C18.8524 14.1522 19.2169 14.3213 19.5302 14.5647L22.9892 17.2557C24.2327 18.2232 24.3467 20.0607 23.2337 21.1722L21.6827 22.7232C20.5727 23.8332 18.9137 24.3207 17.3672 23.7762C13.409 22.3835 9.81513 20.1175 6.85222 17.1462C3.88115 14.1838 1.61513 10.5904 0.222218 6.63273C-0.320782 5.08773 0.166718 3.42723 1.27672 2.31723L2.82772 0.766232Z" fill="black" />
    </IconBase>
  );
};

export default Icon