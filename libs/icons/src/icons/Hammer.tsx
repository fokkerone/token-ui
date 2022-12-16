

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M14.958 3.76205C15.0093 3.6153 15.0138 3.45622 14.9708 3.30681C14.9278 3.15739 14.8395 3.02504 14.718 2.92805L14.451 2.73455C13.5138 2.11519 12.4497 1.71384 11.337 1.56005C9.32246 1.29305 6.75596 1.84355 4.25996 4.69955H2.67896C2.5803 4.69957 2.48261 4.71905 2.39149 4.75689C2.30038 4.79473 2.21762 4.85017 2.14796 4.92005L0.218963 6.85055C0.078818 6.99113 0.00012207 7.18154 0.00012207 7.38005C0.00012207 7.57855 0.078818 7.76896 0.218963 7.90955L4.07546 11.778C4.14513 11.8479 4.2279 11.9033 4.31901 11.9411C4.41013 11.9789 4.50781 11.9984 4.60646 11.9984C4.70511 11.9984 4.8028 11.9789 4.89391 11.9411C4.98503 11.9033 5.06779 11.8479 5.13746 11.778L7.06646 9.84305C7.20667 9.70249 7.28542 9.51208 7.28546 9.31355V8.35505L19.866 21.6645C19.93 21.7515 20.0121 21.8235 20.1066 21.8758C20.201 21.9281 20.3057 21.9594 20.4133 21.9675C20.521 21.9756 20.6292 21.9604 20.7304 21.9229C20.8317 21.8853 20.9236 21.8264 21 21.75L23.25 19.5C23.386 19.3639 23.4645 19.1808 23.4692 18.9884C23.474 18.796 23.4046 18.6092 23.2755 18.4665L9.58196 5.52155C10.7025 4.83755 12.24 4.26305 14.25 4.26305C14.4053 4.26316 14.5569 4.21502 14.6837 4.12527C14.8106 4.03552 14.9064 3.9086 14.958 3.76205Z" fill="black" />
    </IconBase>
  );
};

export default Icon
