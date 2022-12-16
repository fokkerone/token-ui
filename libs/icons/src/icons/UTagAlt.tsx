

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M7.50002 6C7.20334 6 6.91333 6.08798 6.66666 6.2528C6.41999 6.41762 6.22773 6.65189 6.1142 6.92598C6.00067 7.20007 5.97096 7.50167 6.02884 7.79264C6.08672 8.08361 6.22958 8.35088 6.43936 8.56066C6.64914 8.77044 6.91641 8.9133 7.20738 8.97118C7.49835 9.02906 7.79995 8.99935 8.07404 8.88582C8.34813 8.77229 8.5824 8.58003 8.74722 8.33336C8.91204 8.08668 9.00002 7.79667 9.00002 7.5C9.00002 7.10218 8.84198 6.72065 8.56068 6.43934C8.27937 6.15804 7.89784 6 7.50002 6ZM21.12 10.71L12.71 2.29C12.6166 2.19732 12.5058 2.12399 12.3839 2.07423C12.2621 2.02447 12.1316 1.99924 12 2H3.00002C2.7348 2 2.48045 2.10536 2.29291 2.29289C2.10537 2.48043 2.00002 2.73478 2.00002 3V12C1.99926 12.1316 2.02448 12.2621 2.07425 12.3839C2.12401 12.5057 2.19734 12.6166 2.29002 12.71L10.71 21.12C11.2725 21.6818 12.035 21.9974 12.83 21.9974C13.625 21.9974 14.3875 21.6818 14.95 21.12L21.12 15C21.6818 14.4375 21.9974 13.675 21.9974 12.88C21.9974 12.085 21.6818 11.3225 21.12 10.76V10.71ZM19.71 13.53L13.53 19.7C13.3427 19.8863 13.0892 19.9908 12.825 19.9908C12.5608 19.9908 12.3074 19.8863 12.12 19.7L4.00002 11.59V4H11.59L19.71 12.12C19.8027 12.2134 19.876 12.3243 19.9258 12.4461C19.9756 12.5679 20.0008 12.6984 20 12.83C19.9989 13.0923 19.8948 13.3437 19.71 13.53Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
