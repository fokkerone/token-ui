

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.07 12H8.06999C7.80478 12 7.55042 12.1054 7.36289 12.2929C7.17535 12.4804 7.07 12.7348 7.07 13C7.07 13.2652 7.17535 13.5196 7.36289 13.7071C7.55042 13.8946 7.80478 14 8.06999 14H13.07C13.3352 14 13.5896 13.8946 13.7771 13.7071C13.9646 13.5196 14.07 13.2652 14.07 13C14.07 12.7348 13.9646 12.4804 13.7771 12.2929C13.5896 12.1054 13.3352 12 13.07 12ZM14.07 20H6.07C5.80478 20 5.55042 19.8946 5.36289 19.7071C5.17535 19.5196 5.07 19.2652 5.07 19V5C5.07 4.73478 5.17535 4.48043 5.36289 4.29289C5.55042 4.10536 5.80478 4 6.07 4H11.07V7C11.07 7.79565 11.3861 8.55871 11.9487 9.12132C12.5113 9.68393 13.2743 10 14.07 10H17.07V11C17.07 11.2652 17.1754 11.5196 17.3629 11.7071C17.5504 11.8946 17.8048 12 18.07 12C18.3352 12 18.5896 11.8946 18.7771 11.7071C18.9646 11.5196 19.07 11.2652 19.07 11V9C19.0743 8.98024 19.0743 8.95976 19.07 8.94C19.0615 8.84679 19.0379 8.75559 19 8.67V8.58C18.9519 8.47718 18.8878 8.38267 18.81 8.3L12.81 2.3C12.7251 2.22026 12.627 2.15597 12.52 2.11C12.52 2.11 12.47 2.11 12.44 2.11C12.3414 2.05298 12.2328 2.01562 12.12 2H6.12C5.32435 2 4.56128 2.31607 3.99867 2.87868C3.43607 3.44129 3.12 4.20435 3.12 5V19C3.12 19.7956 3.43607 20.5587 3.99867 21.1213C4.56128 21.6839 5.32435 22 6.12 22H14.12C14.3852 22 14.6396 21.8946 14.8271 21.7071C15.0146 21.5196 15.12 21.2652 15.12 21C15.12 20.7348 15.0146 20.4804 14.8271 20.2929C14.6396 20.1054 14.3852 20 14.12 20H14.07ZM13.07 5.41L15.65 8H14.07C13.8048 8 13.5504 7.89464 13.3629 7.70711C13.1754 7.51957 13.07 7.26522 13.07 7V5.41ZM18.64 20.29C18.5925 20.247 18.5424 20.2069 18.49 20.17C18.3801 20.0986 18.2581 20.0477 18.13 20.02C17.9693 19.9878 17.8032 19.9956 17.6463 20.0427C17.4894 20.0898 17.3464 20.1747 17.23 20.29C17.1363 20.383 17.0619 20.4936 17.0111 20.6154C16.9603 20.7373 16.9342 20.868 16.9342 21C16.9342 21.132 16.9603 21.2627 17.0111 21.3846C17.0619 21.5064 17.1363 21.617 17.23 21.71C17.4163 21.8947 17.6677 21.9989 17.93 22C18.0946 22.0008 18.2569 21.961 18.4024 21.884C18.548 21.8071 18.6723 21.6954 18.7643 21.5589C18.8563 21.4223 18.9132 21.2652 18.9299 21.1014C18.9466 20.9377 18.9226 20.7723 18.86 20.62C18.8056 20.4985 18.7313 20.3869 18.64 20.29ZM13.07 16H8.06999C7.80478 16 7.55042 16.1054 7.36289 16.2929C7.17535 16.4804 7.07 16.7348 7.07 17C7.07 17.2652 7.17535 17.5196 7.36289 17.7071C7.55042 17.8946 7.80478 18 8.06999 18H13.07C13.3352 18 13.5896 17.8946 13.7771 17.7071C13.9646 17.5196 14.07 17.2652 14.07 17C14.07 16.7348 13.9646 16.4804 13.7771 16.2929C13.5896 16.1054 13.3352 16 13.07 16ZM17.93 13C17.4031 12.9997 16.8853 13.1381 16.4289 13.4014C15.9725 13.6648 15.5935 14.0437 15.33 14.5C15.2643 14.6143 15.2218 14.7403 15.2049 14.871C15.1879 15.0017 15.1969 15.1344 15.2313 15.2616C15.2656 15.3888 15.3247 15.508 15.4051 15.6124C15.4855 15.7168 15.5857 15.8043 15.7 15.87C15.8142 15.9357 15.9403 15.9782 16.071 15.9951C16.2017 16.0121 16.3344 16.0031 16.4616 15.9687C16.5888 15.9344 16.708 15.8753 16.8124 15.7949C16.9168 15.7144 17.0043 15.6143 17.07 15.5C17.1579 15.3478 17.2844 15.2214 17.4367 15.1336C17.589 15.0458 17.7617 14.9998 17.9375 15C18.1133 15.0003 18.2859 15.0469 18.438 15.1351C18.59 15.2234 18.7161 15.3501 18.8035 15.5026C18.891 15.6551 18.9367 15.828 18.936 16.0038C18.9353 16.1796 18.8884 16.3521 18.7998 16.5039C18.7112 16.6558 18.5841 16.7816 18.4314 16.8687C18.2787 16.9558 18.1058 17.0011 17.93 17C17.6648 17 17.4104 17.1054 17.2229 17.2929C17.0354 17.4804 16.93 17.7348 16.93 18C16.93 18.2652 17.0354 18.5196 17.2229 18.7071C17.4104 18.8946 17.6648 19 17.93 19C18.7256 19 19.4887 18.6839 20.0513 18.1213C20.6139 17.5587 20.93 16.7956 20.93 16C20.93 15.2044 20.6139 14.4413 20.0513 13.8787C19.4887 13.3161 18.7256 13 17.93 13ZM8.06999 10H9.06999C9.33521 10 9.58957 9.89464 9.7771 9.70711C9.96464 9.51957 10.07 9.26522 10.07 9C10.07 8.73478 9.96464 8.48043 9.7771 8.29289C9.58957 8.10536 9.33521 8 9.06999 8H8.06999C7.80478 8 7.55042 8.10536 7.36289 8.29289C7.17535 8.48043 7.07 8.73478 7.07 9C7.07 9.26522 7.17535 9.51957 7.36289 9.70711C7.55042 9.89464 7.80478 10 8.06999 10Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
