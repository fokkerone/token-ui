

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13 15.28V10.5C13 10.2348 12.8947 9.98043 12.7071 9.79289C12.5196 9.60536 12.2652 9.5 12 9.5C11.7348 9.5 11.4805 9.60536 11.2929 9.79289C11.1054 9.98043 11 10.2348 11 10.5V15.28C10.6978 15.4545 10.4464 15.7051 10.271 16.0068C10.0955 16.3086 10.0021 16.651 10 17C10 17.5304 10.2107 18.0391 10.5858 18.4142C10.9609 18.7893 11.4696 19 12 19C12.5305 19 13.0392 18.7893 13.4142 18.4142C13.7893 18.0391 14 17.5304 14 17C13.9979 16.651 13.9045 16.3086 13.7291 16.0068C13.5536 15.7051 13.3023 15.4545 13 15.28ZM16.5 13V5.5C16.5 4.30653 16.0259 3.16193 15.182 2.31802C14.3381 1.47411 13.1935 1 12 1C10.8066 1 9.66196 1.47411 8.81805 2.31802C7.97413 3.16193 7.50003 4.30653 7.50003 5.5V13C6.80887 13.7832 6.33416 14.7333 6.12284 15.7562C5.91152 16.7792 5.97093 17.8396 6.29518 18.8326C6.61943 19.8255 7.1973 20.7166 7.97161 21.4177C8.74592 22.1188 9.68985 22.6056 10.71 22.83C11.1338 22.9266 11.5657 22.9835 12 23C13.1607 23.0054 14.2979 22.6741 15.274 22.0461C16.2502 21.4182 17.0232 20.5207 17.4995 19.4623C17.9758 18.4038 18.1348 17.23 17.9575 16.083C17.7801 14.936 17.2738 13.8651 16.5 13ZM14.5 20.07C13.7044 20.7755 12.6611 21.136 11.5996 21.0722C10.5382 21.0085 9.5455 20.5256 8.84003 19.73C8.13455 18.9344 7.77404 17.891 7.8378 16.8296C7.90157 15.7681 8.38438 14.7755 9.18003 14.07C9.27452 13.9774 9.34969 13.8669 9.40118 13.7451C9.45268 13.6232 9.47948 13.4923 9.48003 13.36V5.5C9.48003 4.83696 9.74342 4.20107 10.2123 3.73223C10.6811 3.26339 11.317 3 11.98 3C12.6431 3 13.279 3.26339 13.7478 3.73223C14.2166 4.20107 14.48 4.83696 14.48 5.5V13.44C14.4806 13.5723 14.5074 13.7032 14.5589 13.8251C14.6104 13.9469 14.6855 14.0574 14.78 14.15C15.1888 14.5449 15.5087 15.0223 15.7185 15.5505C15.9282 16.0787 16.023 16.6456 15.9965 17.2133C15.97 17.781 15.8228 18.3366 15.5648 18.843C15.3068 19.3493 14.9438 19.7949 14.5 20.15V20.07Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
