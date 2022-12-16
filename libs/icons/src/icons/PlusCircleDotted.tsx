

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.9999 0C11.7359 0 11.4749 0.009 11.2154 0.0255L11.3114 1.5225C11.77 1.49287 12.2299 1.49287 12.6884 1.5225L12.7844 0.0255C12.5233 0.00856684 12.2616 6.2418e-05 11.9999 0V0ZM9.65993 0.228C9.14093 0.3315 8.63393 0.468 8.14193 0.633L8.62343 2.055C9.05393 1.908 9.49643 1.7895 9.94943 1.6995L9.65993 0.2295V0.228ZM15.8579 0.6345C15.3619 0.466325 14.8553 0.331032 14.3414 0.2295L14.0504 1.6995C14.5034 1.7895 14.9459 1.9095 15.3764 2.055L15.8579 0.6345ZM18.6674 2.022C18.2321 1.73062 17.7781 1.46806 17.3084 1.236L16.6439 2.58C17.0564 2.784 17.4539 3.015 17.8334 3.2685L18.6674 2.022ZM6.68993 1.236C6.21893 1.4685 5.76593 1.731 5.33243 2.022L6.16643 3.267C6.54767 3.01253 6.945 2.78305 7.35593 2.58L6.68993 1.236ZM4.08743 2.9775C3.69443 3.3225 3.32243 3.6945 2.97743 4.0875L4.10543 5.0775C4.40843 4.7325 4.73243 4.4085 5.07743 4.1055L4.08743 2.9775ZM21.0224 4.0875C20.6769 3.69384 20.3061 3.32306 19.9124 2.9775L18.9224 4.1055C19.2674 4.4085 19.5929 4.7325 19.8944 5.0775L21.0224 4.0875ZM22.7639 6.69C22.5319 6.2208 22.2693 5.76733 21.9779 5.3325L20.7329 6.1665C20.9864 6.546 21.2159 6.9435 21.4199 7.356L22.7639 6.6915V6.69ZM2.02193 5.3325C1.73093 5.766 1.46693 6.219 1.23593 6.6915L2.57993 7.356C2.78393 6.9435 3.01493 6.546 3.26843 6.1665L2.02193 5.3325ZM0.634435 8.142C0.466255 8.63805 0.330962 9.14465 0.229435 9.6585L1.69943 9.9495C1.78943 9.4965 1.90943 9.054 2.05493 8.6235L0.634435 8.142ZM23.7719 9.66C23.6705 9.14564 23.5352 8.63854 23.3669 8.142L21.9449 8.6235C22.0919 9.054 22.2104 9.4965 22.3004 9.9495L23.7704 9.6585L23.7719 9.66ZM0.0254346 11.2155C-0.00831543 11.738 -0.00831543 12.262 0.0254346 12.7845L1.52243 12.6885C1.4928 12.23 1.4928 11.77 1.52243 11.3115L0.0254346 11.2155ZM23.9999 12C23.9999 11.7383 23.9914 11.4767 23.9744 11.2155L22.4774 11.3115C22.5071 11.77 22.5071 12.23 22.4774 12.6885L23.9744 12.7845C23.9914 12.5233 23.9999 12.2617 23.9999 12ZM0.227935 14.34C0.331435 14.859 0.467935 15.366 0.632935 15.858L2.05493 15.3765C1.9074 14.9428 1.78865 14.4998 1.69943 14.0505L0.229435 14.3415L0.227935 14.34ZM23.3654 15.858C23.5334 15.366 23.6684 14.859 23.7704 14.3415L22.3004 14.0505C22.2104 14.5035 22.0904 14.946 21.9449 15.3765L23.3654 15.858ZM1.23593 17.31C1.46805 17.7792 1.73061 18.2326 2.02193 18.6675L3.26693 17.8335C3.01221 17.4524 2.78272 17.0551 2.57993 16.644L1.23593 17.3085V17.31ZM21.9779 18.6675C22.2689 18.234 22.5329 17.781 22.7639 17.3085L21.4199 16.644C21.2159 17.0565 20.9849 17.454 20.7314 17.8335L21.9779 18.6675ZM2.97743 19.9125C3.32243 20.3055 3.69443 20.6775 4.08743 21.0225L5.07743 19.8945C4.73269 19.5919 4.408 19.2672 4.10543 18.9225L2.97743 19.9125ZM19.9124 21.0225C20.3054 20.6775 20.6774 20.3055 21.0224 19.9125L19.8944 18.9225C19.5929 19.2675 19.2674 19.593 18.9224 19.8945L19.9124 21.0225ZM17.3099 22.764C17.7809 22.5315 18.2339 22.269 18.6674 21.978L17.8334 20.733C17.4522 20.9875 17.0549 21.2169 16.6439 21.42L17.3084 22.764H17.3099ZM5.33243 21.978C5.76593 22.269 6.21893 22.533 6.69143 22.764L7.35593 21.42C6.94482 21.2167 6.54747 20.9867 6.16643 20.7315L5.33243 21.978ZM8.14193 23.3655C8.63393 23.5335 9.14093 23.6685 9.65843 23.7705L9.94943 22.3005C9.50011 22.2113 9.05715 22.0925 8.62343 21.945L8.14193 23.3655ZM14.3399 23.772C14.8543 23.6705 15.3614 23.5352 15.8579 23.367L15.3764 21.945C14.9427 22.0925 14.4998 22.2112 14.0504 22.3005L14.3414 23.7705L14.3399 23.772ZM11.2154 23.9745C11.7379 24.0083 12.262 24.0083 12.7844 23.9745L12.6884 22.4775C12.2299 22.5072 11.77 22.5072 11.3114 22.4775L11.2154 23.9745ZM12.7499 6.75C12.7499 6.55109 12.6709 6.36032 12.5303 6.21967C12.3896 6.07902 12.1988 6 11.9999 6C11.801 6 11.6103 6.07902 11.4696 6.21967C11.329 6.36032 11.2499 6.55109 11.2499 6.75V11.25H6.74993C6.55102 11.25 6.36026 11.329 6.2196 11.4697C6.07895 11.6103 5.99993 11.8011 5.99993 12C5.99993 12.1989 6.07895 12.3897 6.2196 12.5303C6.36026 12.671 6.55102 12.75 6.74993 12.75H11.2499V17.25C11.2499 17.4489 11.329 17.6397 11.4696 17.7803C11.6103 17.921 11.801 18 11.9999 18C12.1988 18 12.3896 17.921 12.5303 17.7803C12.6709 17.6397 12.7499 17.4489 12.7499 17.25V12.75H17.2499C17.4488 12.75 17.6396 12.671 17.7803 12.5303C17.9209 12.3897 17.9999 12.1989 17.9999 12C17.9999 11.8011 17.9209 11.6103 17.7803 11.4697C17.6396 11.329 17.4488 11.25 17.2499 11.25H12.7499V6.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon
