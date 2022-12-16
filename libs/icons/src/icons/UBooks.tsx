

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M22.47 18.82L21.47 14.96L18.32 3.37C18.2519 3.11434 18.0853 2.89607 17.8567 2.763C17.628 2.62992 17.3559 2.59289 17.1 2.66L13.23 3.66C13.1376 3.55764 13.0251 3.47549 12.8995 3.4187C12.7739 3.36191 12.6379 3.33171 12.5 3.33H2.5C2.23478 3.33 1.98043 3.43536 1.79289 3.62289C1.60536 3.81043 1.5 4.06478 1.5 4.33V20.33C1.5 20.5952 1.60536 20.8496 1.79289 21.0371C1.98043 21.2246 2.23478 21.33 2.5 21.33H12.5C12.7652 21.33 13.0196 21.2246 13.2071 21.0371C13.3946 20.8496 13.5 20.5952 13.5 20.33V12.33L15.7 20.55C15.7586 20.7682 15.8893 20.9601 16.0709 21.0944C16.2525 21.2288 16.4742 21.2977 16.7 21.29C16.7864 21.2998 16.8736 21.2998 16.96 21.29L21.79 20C21.9177 19.9659 22.0374 19.9067 22.1421 19.8261C22.2468 19.7454 22.3344 19.6448 22.4 19.53C22.5055 19.3088 22.5302 19.0576 22.47 18.82ZM6.47 19.37H3.47V17.37H6.47V19.37ZM6.47 15.37H3.47V9.37H6.47V15.37ZM6.47 7.37H3.47V5.37H6.47V7.37ZM11.47 19.37H8.47V17.37H11.47V19.37ZM11.47 15.37H8.47V9.37H11.47V15.37ZM11.47 7.37H8.47V5.37H11.47V7.37ZM13.72 5.63L16.62 4.85L17.14 6.78L14.24 7.56L13.72 5.63ZM16.31 15.29L14.76 9.49L17.66 8.71L19.21 14.51L16.31 15.29ZM17.31 19.15L16.79 17.22L19.69 16.44L20.21 18.37L17.31 19.15Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
