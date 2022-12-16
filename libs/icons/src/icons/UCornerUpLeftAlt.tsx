

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M17 9.49994H7.41002L8.71002 8.20994C8.89832 8.02164 9.00411 7.76624 9.00411 7.49994C9.00411 7.23364 8.89832 6.97825 8.71002 6.78994C8.52172 6.60164 8.26632 6.49585 8.00002 6.49585C7.73372 6.49585 7.47832 6.60164 7.29002 6.78994L4.29002 9.78994C4.19898 9.88505 4.12761 9.99719 4.08002 10.1199C3.98 10.3634 3.98 10.6365 4.08002 10.8799C4.12761 11.0027 4.19898 11.1148 4.29002 11.2099L7.29002 14.2099C7.38298 14.3037 7.49358 14.3781 7.61544 14.4288C7.7373 14.4796 7.86801 14.5057 8.00002 14.5057C8.13203 14.5057 8.26274 14.4796 8.3846 14.4288C8.50645 14.3781 8.61706 14.3037 8.71002 14.2099C8.80375 14.117 8.87814 14.0064 8.92891 13.8845C8.97968 13.7627 9.00582 13.632 9.00582 13.4999C9.00582 13.3679 8.97968 13.2372 8.92891 13.1154C8.87814 12.9935 8.80375 12.8829 8.71002 12.7899L7.41002 11.4999H17C17.2652 11.4999 17.5196 11.6053 17.7071 11.7928C17.8947 11.9804 18 12.2347 18 12.4999V16.4999C18 16.7652 18.1054 17.0195 18.2929 17.207C18.4804 17.3946 18.7348 17.4999 19 17.4999C19.2652 17.4999 19.5196 17.3946 19.7071 17.207C19.8947 17.0195 20 16.7652 20 16.4999V12.4999C20 11.7043 19.6839 10.9412 19.1213 10.3786C18.5587 9.81601 17.7957 9.49994 17 9.49994Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon