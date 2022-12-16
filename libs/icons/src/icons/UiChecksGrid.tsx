

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M3 15H7.5C7.89782 15 8.27936 15.158 8.56066 15.4393C8.84196 15.7206 9 16.1022 9 16.5V21C9 21.3978 8.84196 21.7794 8.56066 22.0607C8.27936 22.342 7.89782 22.5 7.5 22.5H3C2.60218 22.5 2.22064 22.342 1.93934 22.0607C1.65804 21.7794 1.5 21.3978 1.5 21V16.5C1.5 16.1022 1.65804 15.7206 1.93934 15.4393C2.22064 15.158 2.60218 15 3 15ZM16.5 1.5H21C21.3978 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60218 22.5 3V7.5C22.5 7.89782 22.342 8.27936 22.0607 8.56066C21.7794 8.84196 21.3978 9 21 9H16.5C16.1022 9 15.7206 8.84196 15.4393 8.56066C15.158 8.27936 15 7.89782 15 7.5V3C15 2.60218 15.158 2.22064 15.4393 1.93934C15.7206 1.65804 16.1022 1.5 16.5 1.5ZM16.5 15C16.1022 15 15.7206 15.158 15.4393 15.4393C15.158 15.7206 15 16.1022 15 16.5V21C15 21.3978 15.158 21.7794 15.4393 22.0607C15.7206 22.342 16.1022 22.5 16.5 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V16.5C22.5 16.1022 22.342 15.7206 22.0607 15.4393C21.7794 15.158 21.3978 15 21 15H16.5ZM16.5 0C15.7044 0 14.9413 0.316071 14.3787 0.87868C13.8161 1.44129 13.5 2.20435 13.5 3V7.5C13.5 8.29565 13.8161 9.05871 14.3787 9.62132C14.9413 10.1839 15.7044 10.5 16.5 10.5H21C21.7956 10.5 22.5587 10.1839 23.1213 9.62132C23.6839 9.05871 24 8.29565 24 7.5V3C24 2.20435 23.6839 1.44129 23.1213 0.87868C22.5587 0.316071 21.7956 0 21 0L16.5 0ZM3 13.5C2.20435 13.5 1.44129 13.8161 0.87868 14.3787C0.316071 14.9413 0 15.7044 0 16.5L0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H7.5C8.29565 24 9.05871 23.6839 9.62132 23.1213C10.1839 22.5587 10.5 21.7956 10.5 21V16.5C10.5 15.7044 10.1839 14.9413 9.62132 14.3787C9.05871 13.8161 8.29565 13.5 7.5 13.5H3ZM13.5 16.5C13.5 15.7044 13.8161 14.9413 14.3787 14.3787C14.9413 13.8161 15.7044 13.5 16.5 13.5H21C21.7956 13.5 22.5587 13.8161 23.1213 14.3787C23.6839 14.9413 24 15.7044 24 16.5V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H16.5C15.7044 24 14.9413 23.6839 14.3787 23.1213C13.8161 22.5587 13.5 21.7956 13.5 21V16.5ZM0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L7.5 0C8.29565 0 9.05871 0.316071 9.62132 0.87868C10.1839 1.44129 10.5 2.20435 10.5 3V7.5C10.5 8.29565 10.1839 9.05871 9.62132 9.62132C9.05871 10.1839 8.29565 10.5 7.5 10.5H3C2.20435 10.5 1.44129 10.1839 0.87868 9.62132C0.316071 9.05871 0 8.29565 0 7.5V3ZM8.031 4.281C8.10073 4.21127 8.15605 4.12848 8.19378 4.03737C8.23152 3.94627 8.25095 3.84862 8.25095 3.75C8.25095 3.65138 8.23152 3.55373 8.19378 3.46263C8.15605 3.37152 8.10073 3.28873 8.031 3.219C7.96127 3.14927 7.87848 3.09395 7.78738 3.05622C7.69627 3.01848 7.59862 2.99905 7.5 2.99905C7.40138 2.99905 7.30373 3.01848 7.21262 3.05622C7.12152 3.09395 7.03873 3.14927 6.969 3.219L4.5 5.6895L3.531 4.719C3.46127 4.64927 3.37848 4.59395 3.28737 4.55622C3.19627 4.51848 3.09862 4.49905 3 4.49905C2.90138 4.49905 2.80373 4.51848 2.71263 4.55622C2.62152 4.59395 2.53873 4.64927 2.469 4.719C2.39927 4.78873 2.34395 4.87152 2.30622 4.96263C2.26848 5.05373 2.24905 5.15138 2.24905 5.25C2.24905 5.34862 2.26848 5.44627 2.30622 5.53737C2.34395 5.62848 2.39927 5.71127 2.469 5.781L3.969 7.281C4.03867 7.35084 4.12143 7.40626 4.21255 7.44407C4.30367 7.48188 4.40135 7.50134 4.5 7.50134C4.59865 7.50134 4.69633 7.48188 4.78745 7.44407C4.87857 7.40626 4.96133 7.35084 5.031 7.281L8.031 4.281Z" fill="black" />
    </IconBase>
  );
};

export default Icon
