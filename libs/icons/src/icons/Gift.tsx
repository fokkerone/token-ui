

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4.5 3.75C4.5 2.75544 4.89509 1.80161 5.59835 1.09835C6.30161 0.395088 7.25544 0 8.25 0C9.24456 0 10.1984 0.395088 10.9017 1.09835C11.6049 1.80161 12 2.75544 12 3.75C12 2.75544 12.3951 1.80161 13.0983 1.09835C13.8016 0.395088 14.7554 0 15.75 0C16.7446 0 17.6984 0.395088 18.4016 1.09835C19.1049 1.80161 19.5 2.75544 19.5 3.75V3.759C19.5 3.864 19.5 4.164 19.443 4.5H22.5C22.8978 4.5 23.2794 4.65804 23.5607 4.93934C23.842 5.22064 24 5.60218 24 6V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5V21.75C22.5 22.3467 22.2629 22.919 21.841 23.341C21.419 23.7629 20.8467 24 20.25 24H3.75C3.15326 24 2.58097 23.7629 2.15901 23.341C1.73705 22.919 1.5 22.3467 1.5 21.75V10.5C1.10218 10.5 0.720644 10.342 0.43934 10.0607C0.158035 9.77936 0 9.39782 0 9V6C0 5.60218 0.158035 5.22064 0.43934 4.93934C0.720644 4.65804 1.10218 4.5 1.5 4.5H4.557C4.51738 4.25502 4.49831 4.00716 4.5 3.759V3.75ZM6.102 4.5H10.5V3.75C10.5 3.45453 10.4418 3.16194 10.3287 2.88896C10.2157 2.61598 10.0499 2.36794 9.84099 2.15901C9.63206 1.95008 9.38402 1.78434 9.11104 1.67127C8.83806 1.5582 8.54547 1.5 8.25 1.5C7.95453 1.5 7.66194 1.5582 7.38896 1.67127C7.11598 1.78434 6.86794 1.95008 6.65901 2.15901C6.45008 2.36794 6.28434 2.61598 6.17127 2.88896C6.0582 3.16194 6 3.45453 6 3.75C6 3.8775 6.003 4.161 6.0675 4.395C6.07651 4.43077 6.08804 4.46586 6.102 4.5ZM13.5 4.5H17.898C17.9118 4.4658 17.9233 4.43072 17.9325 4.395C17.997 4.161 18 3.8775 18 3.75C18 3.15326 17.7629 2.58097 17.341 2.15901C16.919 1.73705 16.3467 1.5 15.75 1.5C15.1533 1.5 14.581 1.73705 14.159 2.15901C13.7371 2.58097 13.5 3.15326 13.5 3.75V4.5ZM1.5 6V9H10.5V6H1.5ZM13.5 6V9H22.5V6H13.5ZM21 10.5H13.5V22.5H20.25C20.4489 22.5 20.6397 22.421 20.7803 22.2803C20.921 22.1397 21 21.9489 21 21.75V10.5ZM10.5 22.5V10.5H3V21.75C3 21.9489 3.07902 22.1397 3.21967 22.2803C3.36032 22.421 3.55109 22.5 3.75 22.5H10.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon
