

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M16.281 9.21888C16.3508 9.28854 16.4062 9.37131 16.444 9.46242C16.4818 9.55354 16.5013 9.65122 16.5013 9.74988C16.5013 9.84853 16.4818 9.94621 16.444 10.0373C16.4062 10.1284 16.3508 10.2112 16.281 10.2809L11.781 14.7809C11.7113 14.8507 11.6285 14.9061 11.5374 14.9439C11.4463 14.9818 11.3486 15.0012 11.25 15.0012C11.1513 15.0012 11.0536 14.9818 10.9625 14.9439C10.8714 14.9061 10.7886 14.8507 10.719 14.7809L8.46897 12.5309C8.39924 12.4611 8.34392 12.3784 8.30619 12.2873C8.26845 12.1961 8.24902 12.0985 8.24902 11.9999C8.24902 11.9013 8.26845 11.8036 8.30619 11.7125C8.34392 11.6214 8.39924 11.5386 8.46897 11.4689C8.5387 11.3991 8.62149 11.3438 8.7126 11.3061C8.8037 11.2684 8.90136 11.2489 8.99997 11.2489C9.09859 11.2489 9.19624 11.2684 9.28735 11.3061C9.37846 11.3438 9.46124 11.3991 9.53097 11.4689L11.25 13.1894L15.219 9.21888C15.2886 9.14903 15.3714 9.09362 15.4625 9.05581C15.5536 9.018 15.6513 8.99854 15.75 8.99854C15.8486 8.99854 15.9463 9.018 16.0374 9.05581C16.1285 9.09362 16.2113 9.14903 16.281 9.21888Z" fill="black" /><path d="M4.5 0H19.5C20.2956 0 21.0587 0.316071 21.6213 0.87868C22.1839 1.44129 22.5 2.20435 22.5 3V21C22.5 21.7956 22.1839 22.5587 21.6213 23.1213C21.0587 23.6839 20.2956 24 19.5 24H4.5C3.70435 24 2.94129 23.6839 2.37868 23.1213C1.81607 22.5587 1.5 21.7956 1.5 21V19.5H3V21C3 21.3978 3.15804 21.7794 3.43934 22.0607C3.72064 22.342 4.10218 22.5 4.5 22.5H19.5C19.8978 22.5 20.2794 22.342 20.5607 22.0607C20.842 21.7794 21 21.3978 21 21V3C21 2.60218 20.842 2.22064 20.5607 1.93934C20.2794 1.65804 19.8978 1.5 19.5 1.5H4.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V4.5H1.5V3C1.5 2.20435 1.81607 1.44129 2.37868 0.87868C2.94129 0.316071 3.70435 0 4.5 0V0Z" fill="black" /><path d="M1.5 7.5V6.75C1.5 6.55109 1.57902 6.36032 1.71967 6.21967C1.86032 6.07902 2.05109 6 2.25 6C2.44891 6 2.63968 6.07902 2.78033 6.21967C2.92098 6.36032 3 6.55109 3 6.75V7.5H3.75C3.94891 7.5 4.13968 7.57902 4.28033 7.71967C4.42098 7.86032 4.5 8.05109 4.5 8.25C4.5 8.44891 4.42098 8.63968 4.28033 8.78033C4.13968 8.92098 3.94891 9 3.75 9H0.75C0.551088 9 0.360322 8.92098 0.21967 8.78033C0.0790176 8.63968 0 8.44891 0 8.25C0 8.05109 0.0790176 7.86032 0.21967 7.71967C0.360322 7.57902 0.551088 7.5 0.75 7.5H1.5ZM1.5 12V11.25C1.5 11.0511 1.57902 10.8603 1.71967 10.7197C1.86032 10.579 2.05109 10.5 2.25 10.5C2.44891 10.5 2.63968 10.579 2.78033 10.7197C2.92098 10.8603 3 11.0511 3 11.25V12H3.75C3.94891 12 4.13968 12.079 4.28033 12.2197C4.42098 12.3603 4.5 12.5511 4.5 12.75C4.5 12.9489 4.42098 13.1397 4.28033 13.2803C4.13968 13.421 3.94891 13.5 3.75 13.5H0.75C0.551088 13.5 0.360322 13.421 0.21967 13.2803C0.0790176 13.1397 0 12.9489 0 12.75C0 12.5511 0.0790176 12.3603 0.21967 12.2197C0.360322 12.079 0.551088 12 0.75 12H1.5ZM1.5 16.5V15.75C1.5 15.5511 1.57902 15.3603 1.71967 15.2197C1.86032 15.079 2.05109 15 2.25 15C2.44891 15 2.63968 15.079 2.78033 15.2197C2.92098 15.3603 3 15.5511 3 15.75V16.5H3.75C3.94891 16.5 4.13968 16.579 4.28033 16.7197C4.42098 16.8603 4.5 17.0511 4.5 17.25C4.5 17.4489 4.42098 17.6397 4.28033 17.7803C4.13968 17.921 3.94891 18 3.75 18H0.75C0.551088 18 0.360322 17.921 0.21967 17.7803C0.0790176 17.6397 0 17.4489 0 17.25C0 17.0511 0.0790176 16.8603 0.21967 16.7197C0.360322 16.579 0.551088 16.5 0.75 16.5H1.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon