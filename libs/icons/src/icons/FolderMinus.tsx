

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0.74998 4.5L0.80998 5.805C0.414229 6.38032 0.232701 7.07617 0.29698 7.7715L1.25248 18.2715C1.32021 19.0169 1.66412 19.71 2.21668 20.2148C2.76923 20.7197 3.49054 20.9997 4.23898 21H13.5V19.5H4.23898C3.86477 19.4996 3.5042 19.3594 3.22807 19.1069C2.95193 18.8543 2.78016 18.5077 2.74648 18.135L1.79098 7.635C1.77223 7.42747 1.79692 7.21832 1.86348 7.02086C1.93003 6.82341 2.037 6.64199 2.17756 6.48816C2.31812 6.33434 2.48918 6.21149 2.67985 6.12744C2.87052 6.04339 3.07661 5.99999 3.28498 6H20.715C20.9234 5.99999 21.1294 6.04339 21.3201 6.12744C21.5108 6.21149 21.6818 6.33434 21.8224 6.48816C21.963 6.64199 22.0699 6.82341 22.1365 7.02086C22.203 7.21832 22.2277 7.42747 22.209 7.635L21.81 12H23.3175L23.7015 7.7715C23.7392 7.35646 23.69 6.93811 23.5571 6.54312C23.4242 6.14813 23.2104 5.78518 22.9294 5.47738C22.6484 5.16959 22.3064 4.92372 21.9252 4.75544C21.5439 4.58716 21.1317 4.50017 20.715 4.5H14.742C13.9464 4.49983 13.1835 4.18365 12.621 3.621L11.379 2.379C10.8165 1.81635 10.0536 1.50017 9.25798 1.5H3.74998C2.95433 1.5 2.19127 1.81607 1.62866 2.37868C1.06605 2.94129 0.74998 3.70435 0.74998 4.5ZM9.25798 3C9.65577 3.00008 10.0372 3.15818 10.3185 3.4395L11.379 4.5H3.28498C2.92498 4.5 2.57998 4.563 2.26048 4.68L2.24998 4.47C2.25783 4.0774 2.41933 3.70353 2.69979 3.42868C2.98024 3.15383 3.3573 2.99992 3.74998 3H9.25798Z" fill="black" /><path d="M16.5 17.25C16.5 17.0511 16.579 16.8603 16.7197 16.7197C16.8603 16.579 17.0511 16.5 17.25 16.5H23.25C23.4489 16.5 23.6397 16.579 23.7803 16.7197C23.921 16.8603 24 17.0511 24 17.25C24 17.4489 23.921 17.6397 23.7803 17.7803C23.6397 17.921 23.4489 18 23.25 18H17.25C17.0511 18 16.8603 17.921 16.7197 17.7803C16.579 17.6397 16.5 17.4489 16.5 17.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon
