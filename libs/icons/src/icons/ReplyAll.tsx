

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.147 7.51968C12.1801 7.5051 12.2164 7.49907 12.2525 7.50217C12.2885 7.50526 12.3233 7.51737 12.3534 7.53738C12.3836 7.55739 12.4082 7.58467 12.4251 7.6167C12.442 7.64873 12.4505 7.68448 12.45 7.72068V9.45018C12.45 9.6491 12.529 9.83986 12.6697 9.98051C12.8103 10.1212 13.0011 10.2002 13.2 10.2002C14.2005 10.2002 16.2195 10.2077 18.15 11.4332C19.626 12.3692 21.135 14.0732 22.0425 17.2472C20.5125 15.7727 18.765 14.9732 17.235 14.5487C16.2946 14.2889 15.3281 14.135 14.3535 14.0897C13.9546 14.0722 13.555 14.0762 13.1565 14.1017H13.137L13.1295 14.1032H13.128L13.2 14.8502L13.125 14.1032C12.9399 14.1218 12.7683 14.2085 12.6435 14.3466C12.5188 14.4846 12.4498 14.6641 12.45 14.8502V16.5797C12.45 16.7417 12.285 16.8437 12.147 16.7807L6.17099 12.3812C6.15071 12.3661 6.12968 12.3521 6.10799 12.3392C6.07538 12.3196 6.04839 12.2919 6.02965 12.2588C6.01091 12.2256 6.00107 12.1882 6.00107 12.1502C6.00107 12.1121 6.01091 12.0747 6.02965 12.0416C6.04839 12.0085 6.07538 11.9808 6.10799 11.9612C6.12969 11.9483 6.15072 11.9342 6.17099 11.9192L12.147 7.51968ZM13.95 15.5792C14.052 15.5792 14.1645 15.5837 14.2845 15.5882C14.9355 15.6182 15.8355 15.7172 16.8345 15.9947C18.8235 16.5467 21.1785 17.7977 22.7445 20.6147C22.8292 20.7667 22.9641 20.8846 23.1262 20.9481C23.2882 21.0116 23.4673 21.0167 23.6328 20.9626C23.7982 20.9086 23.9397 20.7986 24.0329 20.6517C24.1262 20.5047 24.1655 20.3299 24.144 20.1572C23.448 14.5922 21.315 11.6642 18.954 10.1672C17.0865 8.98218 15.1635 8.75418 13.95 8.71068V7.72068C13.9501 7.41179 13.8669 7.10858 13.709 6.84305C13.5512 6.57753 13.3246 6.35953 13.0532 6.21207C12.7818 6.06461 12.4756 5.99314 12.1669 6.00522C11.8582 6.01729 11.5586 6.11246 11.2995 6.28068L5.30849 10.6907C5.06081 10.8453 4.85655 11.0604 4.71494 11.3157C4.57333 11.571 4.49902 11.8582 4.49902 12.1502C4.49902 12.4422 4.57333 12.7293 4.71494 12.9847C4.85655 13.24 5.06081 13.4551 5.30849 13.6097L11.2995 18.0197C11.5586 18.1879 11.8582 18.2831 12.1669 18.2951C12.4756 18.3072 12.7818 18.2358 13.0532 18.0883C13.3246 17.9408 13.5512 17.7228 13.709 17.4573C13.8669 17.1918 13.9501 16.8886 13.95 16.5797V15.5792Z" fill="black" /><path d="M7.84802 6.43959C7.78959 6.3601 7.71606 6.29292 7.63163 6.2419C7.5472 6.19088 7.45354 6.15701 7.356 6.14224C7.25847 6.12747 7.15898 6.13209 7.06323 6.15583C6.96748 6.17957 6.87736 6.22196 6.79802 6.28058L0.810017 10.6906C0.562337 10.8452 0.358076 11.0603 0.216464 11.3156C0.0748528 11.5709 0.000549316 11.8581 0.000549316 12.1501C0.000549316 12.4421 0.0748528 12.7292 0.216464 12.9846C0.358076 13.2399 0.562337 13.455 0.810017 13.6096L6.80102 18.0196C6.88015 18.0801 6.97056 18.1243 7.06695 18.1495C7.16334 18.1747 7.26378 18.1804 7.36242 18.1664C7.46105 18.1523 7.5559 18.1188 7.64142 18.0677C7.72695 18.0165 7.80143 17.9489 7.86052 17.8687C7.91961 17.7885 7.96213 17.6973 7.98558 17.6005C8.00904 17.5036 8.01297 17.4031 7.99715 17.3047C7.98132 17.2064 7.94605 17.1121 7.89341 17.0275C7.84076 16.943 7.77179 16.8697 7.69052 16.8121L1.67102 12.3811C1.65073 12.366 1.62971 12.352 1.60802 12.3391C1.5754 12.3195 1.54841 12.2918 1.52968 12.2587C1.51094 12.2255 1.50109 12.1881 1.50109 12.1501C1.50109 12.112 1.51094 12.0746 1.52968 12.0415C1.54841 12.0084 1.5754 11.9807 1.60802 11.9611C1.62971 11.9482 1.65074 11.9341 1.67102 11.9191L7.68902 7.48809C7.84911 7.37011 7.9558 7.19338 7.98562 6.99676C8.01544 6.80014 7.96594 6.59972 7.84802 6.43959Z" fill="black" />
    </IconBase>
  );
};

export default Icon
