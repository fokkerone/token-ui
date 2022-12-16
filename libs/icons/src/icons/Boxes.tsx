

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.628 0.0988802C11.7413 0.0341623 11.8695 0.00012207 12 0.00012207C12.1305 0.00012207 12.2587 0.0341623 12.372 0.0988802L17.997 3.31338C18.1118 3.37895 18.2072 3.4737 18.2736 3.58802C18.34 3.70234 18.375 3.83218 18.375 3.96438V9.95688L23.622 12.9569C23.7364 13.0222 23.8315 13.1165 23.8978 13.2302C23.9642 13.344 23.9994 13.4732 24 13.6049V20.0339C24 20.1661 23.965 20.2959 23.8986 20.4102C23.8322 20.5246 23.7368 20.6193 23.622 20.6849L17.997 23.8994C17.8837 23.9641 17.7555 23.9981 17.625 23.9981C17.4945 23.9981 17.3663 23.9641 17.253 23.8994L12 20.8994L6.747 23.9009C6.6337 23.9656 6.50548 23.9996 6.375 23.9996C6.24452 23.9996 6.1163 23.9656 6.003 23.9009L0.378 20.6864C0.263209 20.6208 0.16779 20.5261 0.101408 20.4117C0.0350269 20.2974 4.26406e-05 20.1676 0 20.0354L0 13.6064C4.26406e-05 13.4742 0.0350269 13.3443 0.101408 13.23C0.16779 13.1157 0.263209 13.0209 0.378 12.9554L5.625 9.95688V3.96438C5.62504 3.83218 5.66003 3.70234 5.72641 3.58802C5.79279 3.4737 5.88821 3.37895 6.003 3.31338L11.628 0.0988802ZM6.375 11.2559L2.262 13.6064L6.375 15.9569L10.488 13.6064L6.375 11.2559ZM11.25 14.8994L7.125 17.2559V21.9569L11.25 19.6004V14.8994ZM12.75 19.6004L16.875 21.9569V17.2559L12.75 14.8994V19.6004ZM13.512 13.6064L17.625 15.9569L21.738 13.6064L17.625 11.2559L13.512 13.6064ZM16.875 9.95688V5.25588L12.75 7.61388V12.3149L16.875 9.95688ZM11.25 12.3149V7.61388L7.125 5.25588V9.95688L11.25 12.3149ZM7.887 3.96438L12 6.31488L16.113 3.96438L12 1.61388L7.887 3.96438ZM22.5 14.8994L18.375 17.2559V21.9569L22.5 19.6004V14.8994ZM5.625 21.9569V17.2559L1.5 14.8994V19.6004L5.625 21.9569Z" fill="black" />
    </IconBase>
  );
};

export default Icon
