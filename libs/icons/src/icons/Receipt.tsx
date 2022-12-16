

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M2.88 0.758876C2.99739 0.739754 3.11764 0.748824 3.23083 0.785337C3.34403 0.821851 3.44691 0.884762 3.531 0.968876L4.5 1.93938L5.469 0.968876C5.53867 0.899031 5.62143 0.843617 5.71255 0.805807C5.80367 0.767997 5.90135 0.748535 6 0.748535C6.09865 0.748535 6.19633 0.767997 6.28745 0.805807C6.37857 0.843617 6.46133 0.899031 6.531 0.968876L7.5 1.93938L8.469 0.968876C8.53867 0.899031 8.62143 0.843617 8.71255 0.805807C8.80367 0.767997 8.90135 0.748535 9 0.748535C9.09865 0.748535 9.19633 0.767997 9.28745 0.805807C9.37857 0.843617 9.46133 0.899031 9.531 0.968876L10.5 1.93938L11.469 0.968876C11.5387 0.899031 11.6214 0.843617 11.7125 0.805807C11.8037 0.767997 11.9013 0.748535 12 0.748535C12.0987 0.748535 12.1963 0.767997 12.2874 0.805807C12.3786 0.843617 12.4613 0.899031 12.531 0.968876L13.5 1.93938L14.469 0.968876C14.5387 0.899031 14.6214 0.843617 14.7126 0.805807C14.8037 0.767997 14.9013 0.748535 15 0.748535C15.0987 0.748535 15.1963 0.767997 15.2874 0.805807C15.3786 0.843617 15.4613 0.899031 15.531 0.968876L16.5 1.93938L17.469 0.968876C17.5387 0.899031 17.6214 0.843617 17.7126 0.805807C17.8037 0.767997 17.9013 0.748535 18 0.748535C18.0987 0.748535 18.1963 0.767997 18.2874 0.805807C18.3786 0.843617 18.4613 0.899031 18.531 0.968876L19.5 1.93938L20.469 0.968876C20.553 0.884775 20.6559 0.821857 20.769 0.785311C20.8821 0.748766 21.0023 0.73964 21.1197 0.758686C21.237 0.777733 21.3482 0.824406 21.444 0.894856C21.5397 0.965306 21.6174 1.05751 21.6705 1.16388L22.4205 2.66388C22.4728 2.76817 22.5 2.88322 22.5 2.99988V20.9999C22.5 21.1165 22.4728 21.2316 22.4205 21.3359L21.6705 22.8359C21.6173 22.942 21.5397 23.0339 21.4441 23.1042C21.3484 23.1744 21.2375 23.221 21.1203 23.24C21.0032 23.2591 20.8832 23.25 20.7702 23.2137C20.6573 23.1773 20.5545 23.1147 20.4705 23.0309L19.5 22.0604L18.531 23.0309C18.4613 23.1007 18.3786 23.1561 18.2874 23.1939C18.1963 23.2318 18.0987 23.2512 18 23.2512C17.9013 23.2512 17.8037 23.2318 17.7126 23.1939C17.6214 23.1561 17.5387 23.1007 17.469 23.0309L16.5 22.0604L15.531 23.0309C15.4613 23.1007 15.3786 23.1561 15.2874 23.1939C15.1963 23.2318 15.0987 23.2512 15 23.2512C14.9013 23.2512 14.8037 23.2318 14.7126 23.1939C14.6214 23.1561 14.5387 23.1007 14.469 23.0309L13.5 22.0604L12.531 23.0309C12.4613 23.1007 12.3786 23.1561 12.2874 23.1939C12.1963 23.2318 12.0987 23.2512 12 23.2512C11.9013 23.2512 11.8037 23.2318 11.7125 23.1939C11.6214 23.1561 11.5387 23.1007 11.469 23.0309L10.5 22.0604L9.531 23.0309C9.46133 23.1007 9.37857 23.1561 9.28745 23.1939C9.19633 23.2318 9.09865 23.2512 9 23.2512C8.90135 23.2512 8.80367 23.2318 8.71255 23.1939C8.62143 23.1561 8.53867 23.1007 8.469 23.0309L7.5 22.0604L6.531 23.0309C6.46133 23.1007 6.37857 23.1561 6.28745 23.1939C6.19633 23.2318 6.09865 23.2512 6 23.2512C5.90135 23.2512 5.80367 23.2318 5.71255 23.1939C5.62143 23.1561 5.53867 23.1007 5.469 23.0309L4.5 22.0604L3.531 23.0309C3.44696 23.115 3.34414 23.1779 3.231 23.2144C3.11787 23.251 2.99767 23.2601 2.88031 23.2411C2.76296 23.222 2.65181 23.1753 2.55604 23.1049C2.46027 23.0344 2.38262 22.9422 2.3295 22.8359L1.5795 21.3359C1.52723 21.2316 1.50001 21.1165 1.5 20.9999V2.99988C1.50001 2.88322 1.52723 2.76817 1.5795 2.66388L2.3295 1.16388C2.38262 1.05759 2.46023 0.965441 2.55594 0.895028C2.65165 0.824614 2.76272 0.777949 2.88 0.758876ZM3.2055 2.76588L3 3.17688V20.8229L3.2055 21.2339L3.9705 20.4689C4.11115 20.3283 4.30188 20.2493 4.50075 20.2493C4.69962 20.2493 4.89035 20.3283 5.031 20.4689L6 21.4394L6.969 20.4704C7.03867 20.4005 7.12143 20.3451 7.21255 20.3073C7.30367 20.2695 7.40135 20.25 7.5 20.25C7.59865 20.25 7.69633 20.2695 7.78745 20.3073C7.87857 20.3451 7.96133 20.4005 8.031 20.4704L9 21.4394L9.969 20.4704C10.0387 20.4005 10.1214 20.3451 10.2125 20.3073C10.3037 20.2695 10.4013 20.25 10.5 20.25C10.5987 20.25 10.6963 20.2695 10.7875 20.3073C10.8786 20.3451 10.9613 20.4005 11.031 20.4704L12 21.4394L12.969 20.4704C13.0387 20.4005 13.1214 20.3451 13.2126 20.3073C13.3037 20.2695 13.4013 20.25 13.5 20.25C13.5987 20.25 13.6963 20.2695 13.7874 20.3073C13.8786 20.3451 13.9613 20.4005 14.031 20.4704L15 21.4394L15.969 20.4704C16.0387 20.4005 16.1214 20.3451 16.2126 20.3073C16.3037 20.2695 16.4013 20.25 16.5 20.25C16.5987 20.25 16.6963 20.2695 16.7874 20.3073C16.8786 20.3451 16.9613 20.4005 17.031 20.4704L18 21.4394L18.969 20.4704C19.0387 20.4005 19.1214 20.3451 19.2126 20.3073C19.3037 20.2695 19.4013 20.25 19.5 20.25C19.5987 20.25 19.6963 20.2695 19.7874 20.3073C19.8786 20.3451 19.9613 20.4005 20.031 20.4704L20.7945 21.2339L21 20.8229V3.17688L20.7945 2.76588L20.0295 3.53088C19.8889 3.67148 19.6981 3.75047 19.4993 3.75047C19.3004 3.75047 19.1096 3.67148 18.969 3.53088L18 2.56038L17.031 3.53088C16.9613 3.60072 16.8786 3.65614 16.7874 3.69394C16.6963 3.73175 16.5987 3.75122 16.5 3.75122C16.4013 3.75122 16.3037 3.73175 16.2126 3.69394C16.1214 3.65614 16.0387 3.60072 15.969 3.53088L15 2.56038L14.031 3.53088C13.9613 3.60072 13.8786 3.65614 13.7874 3.69394C13.6963 3.73175 13.5987 3.75122 13.5 3.75122C13.4013 3.75122 13.3037 3.73175 13.2126 3.69394C13.1214 3.65614 13.0387 3.60072 12.969 3.53088L12 2.56038L11.031 3.53088C10.9613 3.60072 10.8786 3.65614 10.7875 3.69394C10.6963 3.73175 10.5987 3.75122 10.5 3.75122C10.4013 3.75122 10.3037 3.73175 10.2125 3.69394C10.1214 3.65614 10.0387 3.60072 9.969 3.53088L9 2.56038L8.031 3.53088C7.96133 3.60072 7.87857 3.65614 7.78745 3.69394C7.69633 3.73175 7.59865 3.75122 7.5 3.75122C7.40135 3.75122 7.30367 3.73175 7.21255 3.69394C7.12143 3.65614 7.03867 3.60072 6.969 3.53088L6 2.56038L5.031 3.53088C4.96133 3.60072 4.87857 3.65614 4.78745 3.69394C4.69633 3.73175 4.59865 3.75122 4.5 3.75122C4.40135 3.75122 4.30367 3.73175 4.21255 3.69394C4.12143 3.65614 4.03867 3.60072 3.969 3.53088L3.2055 2.76588Z" fill="black" /><path d="M4.5 6.75C4.5 6.55109 4.57902 6.36032 4.71967 6.21967C4.86032 6.07902 5.05109 6 5.25 6H14.25C14.4489 6 14.6397 6.07902 14.7803 6.21967C14.921 6.36032 15 6.55109 15 6.75C15 6.94891 14.921 7.13968 14.7803 7.28033C14.6397 7.42098 14.4489 7.5 14.25 7.5H5.25C5.05109 7.5 4.86032 7.42098 4.71967 7.28033C4.57902 7.13968 4.5 6.94891 4.5 6.75ZM4.5 9.75C4.5 9.55109 4.57902 9.36032 4.71967 9.21967C4.86032 9.07902 5.05109 9 5.25 9H14.25C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75C15 9.94891 14.921 10.1397 14.7803 10.2803C14.6397 10.421 14.4489 10.5 14.25 10.5H5.25C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75ZM4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12H14.25C14.4489 12 14.6397 12.079 14.7803 12.2197C14.921 12.3603 15 12.5511 15 12.75C15 12.9489 14.921 13.1397 14.7803 13.2803C14.6397 13.421 14.4489 13.5 14.25 13.5H5.25C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75ZM4.5 15.75C4.5 15.5511 4.57902 15.3603 4.71967 15.2197C4.86032 15.079 5.05109 15 5.25 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H5.25C5.05109 16.5 4.86032 16.421 4.71967 16.2803C4.57902 16.1397 4.5 15.9489 4.5 15.75ZM16.5 6.75C16.5 6.55109 16.579 6.36032 16.7197 6.21967C16.8603 6.07902 17.0511 6 17.25 6H18.75C18.9489 6 19.1397 6.07902 19.2803 6.21967C19.421 6.36032 19.5 6.55109 19.5 6.75C19.5 6.94891 19.421 7.13968 19.2803 7.28033C19.1397 7.42098 18.9489 7.5 18.75 7.5H17.25C17.0511 7.5 16.8603 7.42098 16.7197 7.28033C16.579 7.13968 16.5 6.94891 16.5 6.75ZM16.5 9.75C16.5 9.55109 16.579 9.36032 16.7197 9.21967C16.8603 9.07902 17.0511 9 17.25 9H18.75C18.9489 9 19.1397 9.07902 19.2803 9.21967C19.421 9.36032 19.5 9.55109 19.5 9.75C19.5 9.94891 19.421 10.1397 19.2803 10.2803C19.1397 10.421 18.9489 10.5 18.75 10.5H17.25C17.0511 10.5 16.8603 10.421 16.7197 10.2803C16.579 10.1397 16.5 9.94891 16.5 9.75ZM16.5 12.75C16.5 12.5511 16.579 12.3603 16.7197 12.2197C16.8603 12.079 17.0511 12 17.25 12H18.75C18.9489 12 19.1397 12.079 19.2803 12.2197C19.421 12.3603 19.5 12.5511 19.5 12.75C19.5 12.9489 19.421 13.1397 19.2803 13.2803C19.1397 13.421 18.9489 13.5 18.75 13.5H17.25C17.0511 13.5 16.8603 13.421 16.7197 13.2803C16.579 13.1397 16.5 12.9489 16.5 12.75ZM16.5 15.75C16.5 15.5511 16.579 15.3603 16.7197 15.2197C16.8603 15.079 17.0511 15 17.25 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5H17.25C17.0511 16.5 16.8603 16.421 16.7197 16.2803C16.579 16.1397 16.5 15.9489 16.5 15.75Z" fill="black" />
    </IconBase>
  );
};

export default Icon