

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 4.5C0 3.70435 0.316071 2.94129 0.87868 2.37868C1.44129 1.81607 2.20435 1.5 3 1.5H13.62C14.0528 1.49982 14.4806 1.5933 14.8739 1.77402C15.2672 1.95475 15.6167 2.21844 15.8985 2.547L23.163 11.0235C23.3962 11.2954 23.5244 11.6418 23.5244 12C23.5244 12.3582 23.3962 12.7046 23.163 12.9765L15.9 21.45C15.6183 21.7793 15.2687 22.0437 14.8751 22.2249C14.4815 22.4062 14.0533 22.5 13.62 22.5H3C2.20435 22.5 1.44129 22.1839 0.87868 21.6213C0.316071 21.0587 0 20.2956 0 19.5V4.5ZM14.781 8.781C14.8507 8.71127 14.906 8.62848 14.9438 8.53738C14.9815 8.44627 15.0009 8.34862 15.0009 8.25C15.0009 8.15138 14.9815 8.05373 14.9438 7.96262C14.906 7.87152 14.8507 7.78873 14.781 7.719C14.7113 7.64927 14.6285 7.59395 14.5374 7.55621C14.4463 7.51848 14.3486 7.49905 14.25 7.49905C14.1514 7.49905 14.0537 7.51848 13.9626 7.55621C13.8715 7.59395 13.7887 7.64927 13.719 7.719L10.5 10.9395L7.281 7.719C7.21127 7.64927 7.12848 7.59395 7.03738 7.55621C6.94627 7.51848 6.84862 7.49905 6.75 7.49905C6.65138 7.49905 6.55373 7.51848 6.46262 7.55621C6.37152 7.59395 6.28873 7.64927 6.219 7.719C6.14927 7.78873 6.09395 7.87152 6.05621 7.96262C6.01848 8.05373 5.99905 8.15138 5.99905 8.25C5.99905 8.34862 6.01848 8.44627 6.05621 8.53738C6.09395 8.62848 6.14927 8.71127 6.219 8.781L9.4395 12L6.219 15.219C6.07817 15.3598 5.99905 15.5508 5.99905 15.75C5.99905 15.9492 6.07817 16.1402 6.219 16.281C6.35983 16.4218 6.55084 16.5009 6.75 16.5009C6.94916 16.5009 7.14017 16.4218 7.281 16.281L10.5 13.0605L13.719 16.281C13.8598 16.4218 14.0508 16.5009 14.25 16.5009C14.4492 16.5009 14.6402 16.4218 14.781 16.281C14.9218 16.1402 15.0009 15.9492 15.0009 15.75C15.0009 15.5508 14.9218 15.3598 14.781 15.219L11.5605 12L14.781 8.781Z" fill="black" />
    </IconBase>
  );
};

export default Icon
