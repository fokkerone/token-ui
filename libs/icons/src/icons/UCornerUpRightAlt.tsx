

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19.92 10.1199C19.8724 9.99719 19.801 9.88505 19.71 9.78994L16.71 6.78994C16.6168 6.6967 16.5061 6.62274 16.3842 6.57228C16.2624 6.52182 16.1319 6.49585 16 6.49585C15.7337 6.49585 15.4783 6.60164 15.29 6.78994C15.1968 6.88318 15.1228 6.99387 15.0723 7.11569C15.0219 7.23751 14.9959 7.36808 14.9959 7.49994C14.9959 7.76624 15.1017 8.02164 15.29 8.20994L16.59 9.49994H7C6.20435 9.49994 5.44129 9.81601 4.87868 10.3786C4.31607 10.9412 4 11.7043 4 12.4999V16.4999C4 16.7652 4.10536 17.0195 4.29289 17.207C4.48043 17.3946 4.73478 17.4999 5 17.4999C5.26522 17.4999 5.51957 17.3946 5.70711 17.207C5.89464 17.0195 6 16.7652 6 16.4999V12.4999C6 12.2347 6.10536 11.9804 6.29289 11.7928C6.48043 11.6053 6.73478 11.4999 7 11.4999H16.59L15.29 12.7899C15.1963 12.8829 15.1219 12.9935 15.0711 13.1154C15.0203 13.2372 14.9942 13.3679 14.9942 13.4999C14.9942 13.632 15.0203 13.7627 15.0711 13.8845C15.1219 14.0064 15.1963 14.117 15.29 14.2099C15.383 14.3037 15.4936 14.3781 15.6154 14.4288C15.7373 14.4796 15.868 14.5057 16 14.5057C16.132 14.5057 16.2627 14.4796 16.3846 14.4288C16.5064 14.3781 16.617 14.3037 16.71 14.2099L19.71 11.2099C19.801 11.1148 19.8724 11.0027 19.92 10.8799C20.02 10.6365 20.02 10.3634 19.92 10.1199Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
