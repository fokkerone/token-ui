

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V15C24 15.7957 23.6839 16.5587 23.1213 17.1213C22.5587 17.6839 21.7956 18 21 18H6.621C6.22321 18.0001 5.84174 18.1582 5.5605 18.4395L1.281 22.719C1.1762 22.8241 1.04258 22.8957 0.897054 22.9248C0.751531 22.9539 0.600648 22.9392 0.463499 22.8825C0.32635 22.8258 0.209103 22.7297 0.126596 22.6063C0.0440889 22.483 3.15223e-05 22.3379 0 22.1895L0 3ZM10.791 7.149C10.6921 7.00143 10.578 6.86468 10.4505 6.741C10.25 6.53456 10.011 6.36944 9.747 6.255L9.735 6.249C9.37976 6.08406 8.99266 5.99906 8.601 6C7.164 6 6 7.119 6 8.5005C6 9.8805 7.164 10.9995 8.601 10.9995C9.1155 10.9995 9.594 10.857 9.9975 10.6095C9.792 11.193 9.4125 11.8155 8.7825 12.4395C8.72316 12.4974 8.6763 12.5669 8.64482 12.6436C8.61333 12.7203 8.59789 12.8027 8.59943 12.8856C8.60098 12.9685 8.61948 13.0502 8.65381 13.1257C8.68813 13.2012 8.73754 13.2688 8.799 13.3245C9.0585 13.5645 9.4695 13.557 9.72 13.3095C11.721 11.316 11.775 9.1725 11.1315 7.7505C11.037 7.54031 10.923 7.33943 10.791 7.1505V7.149ZM16.5 10.6095C16.296 11.193 15.915 11.8155 15.285 12.4395C15.2257 12.4975 15.179 12.5671 15.1477 12.6438C15.1163 12.7206 15.101 12.803 15.1027 12.8859C15.1044 12.9688 15.123 13.0505 15.1575 13.1259C15.1919 13.2014 15.2414 13.2689 15.303 13.3245C15.561 13.5645 15.972 13.557 16.2225 13.3095C18.2235 11.316 18.2775 9.1725 17.6355 7.7505C17.5405 7.54027 17.426 7.3394 17.2935 7.1505C17.1947 7.0024 17.0806 6.86514 16.953 6.741C16.7526 6.53453 16.5135 6.36941 16.2495 6.255L16.2375 6.249C15.8827 6.08427 15.4962 5.99928 15.105 6C13.6695 6 12.504 7.119 12.504 8.5005C12.504 9.8805 13.6695 10.9995 15.105 10.9995C15.6195 10.9995 16.098 10.857 16.5015 10.6095H16.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon