

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.11 15.39L8.23002 19.27C8.00053 19.5004 7.72781 19.6832 7.4275 19.808C7.12719 19.9327 6.80521 19.9969 6.48002 19.9969C6.15483 19.9969 5.83285 19.9327 5.53254 19.808C5.23223 19.6832 4.95951 19.5004 4.73002 19.27C4.49842 19.0412 4.31454 18.7687 4.18904 18.4683C4.06354 18.1679 3.99892 17.8456 3.99892 17.52C3.99892 17.1945 4.06354 16.8721 4.18904 16.5717C4.31454 16.2713 4.49842 15.9988 4.73002 15.77L8.61002 11.89C8.79832 11.7017 8.90411 11.4463 8.90411 11.18C8.90411 10.9137 8.79832 10.6583 8.61002 10.47C8.42172 10.2817 8.16632 10.1759 7.90002 10.1759C7.63372 10.1759 7.37832 10.2817 7.19002 10.47L3.31002 14.36C2.52838 15.2108 2.10564 16.3307 2.13009 17.4858C2.15455 18.6409 2.6243 19.7418 3.44125 20.5588C4.2582 21.3757 5.35918 21.8455 6.51427 21.8699C7.66935 21.8944 8.78923 21.4717 9.64002 20.69L13.53 16.81C13.7183 16.6217 13.8241 16.3663 13.8241 16.1C13.8241 15.8337 13.7183 15.5783 13.53 15.39C13.3417 15.2017 13.0863 15.0959 12.82 15.0959C12.5537 15.0959 12.2983 15.2017 12.11 15.39ZM8.83002 15.17C8.92346 15.2627 9.03428 15.336 9.15611 15.3858C9.27795 15.4356 9.40841 15.4608 9.54002 15.46C9.67163 15.4608 9.80209 15.4356 9.92393 15.3858C10.0458 15.336 10.1566 15.2627 10.25 15.17L15.17 10.25C15.3583 10.0617 15.4641 9.80632 15.4641 9.54002C15.4641 9.27372 15.3583 9.01832 15.17 8.83002C14.9817 8.64172 14.7263 8.53593 14.46 8.53593C14.1937 8.53593 13.9383 8.64172 13.75 8.83002L8.83002 13.75C8.73629 13.843 8.6619 13.9536 8.61113 14.0754C8.56036 14.1973 8.53422 14.328 8.53422 14.46C8.53422 14.592 8.56036 14.7227 8.61113 14.8446C8.6619 14.9665 8.73629 15.0771 8.83002 15.17ZM21 18H20V17C20 16.7348 19.8947 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16C18.7348 16 18.4804 16.1054 18.2929 16.2929C18.1054 16.4804 18 16.7348 18 17V18H17C16.7348 18 16.4804 18.1054 16.2929 18.2929C16.1054 18.4804 16 18.7348 16 19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8947 16.7348 20 17 20H18V21C18 21.2652 18.1054 21.5196 18.2929 21.7071C18.4804 21.8947 18.7348 22 19 22C19.2652 22 19.5196 21.8947 19.7071 21.7071C19.8947 21.5196 20 21.2652 20 21V20H21C21.2652 20 21.5196 19.8947 21.7071 19.7071C21.8947 19.5196 22 19.2652 22 19C22 18.7348 21.8947 18.4804 21.7071 18.2929C21.5196 18.1054 21.2652 18 21 18ZM16.81 13.53L20.69 9.64002C21.4717 8.78923 21.8944 7.66935 21.8699 6.51427C21.8455 5.35918 21.3757 4.2582 20.5588 3.44125C19.7418 2.6243 18.6409 2.15455 17.4858 2.13009C16.3307 2.10564 15.2108 2.52838 14.36 3.31002L10.47 7.19002C10.3768 7.28326 10.3028 7.39395 10.2524 7.51577C10.2019 7.63759 10.1759 7.76816 10.1759 7.90002C10.1759 8.03188 10.2019 8.16245 10.2524 8.28427C10.3028 8.40609 10.3768 8.51678 10.47 8.61002C10.5633 8.70326 10.6739 8.77722 10.7958 8.82768C10.9176 8.87814 11.0482 8.90411 11.18 8.90411C11.3119 8.90411 11.4424 8.87814 11.5643 8.82768C11.6861 8.77722 11.7968 8.70326 11.89 8.61002L15.77 4.73002C15.9995 4.49962 16.2722 4.31681 16.5725 4.19207C16.8728 4.06733 17.1948 4.00312 17.52 4.00312C17.8452 4.00312 18.1672 4.06733 18.4675 4.19207C18.7678 4.31681 19.0405 4.49962 19.27 4.73002C19.5016 4.95883 19.6855 5.23133 19.811 5.53173C19.9365 5.83213 20.0011 6.15446 20.0011 6.48002C20.0011 6.80558 19.9365 7.12791 19.811 7.42831C19.6855 7.72871 19.5016 8.00121 19.27 8.23002L15.39 12.11C15.2963 12.203 15.2219 12.3136 15.1711 12.4354C15.1204 12.5573 15.0942 12.688 15.0942 12.82C15.0942 12.952 15.1204 13.0827 15.1711 13.2046C15.2219 13.3265 15.2963 13.4371 15.39 13.53C15.483 13.6237 15.5936 13.6981 15.7154 13.7489C15.8373 13.7997 15.968 13.8258 16.1 13.8258C16.232 13.8258 16.3627 13.7997 16.4846 13.7489C16.6065 13.6981 16.7171 13.6237 16.81 13.53Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon