

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M20.1075 6.79038C19.796 5.22013 18.9903 3.7907 17.8083 2.7111C16.6263 1.63151 15.1299 0.958363 13.5379 0.790097C11.9459 0.621831 10.3418 0.967267 8.9602 1.7759C7.57859 2.58453 6.49189 3.81394 5.85901 5.28438C5.14926 5.20262 4.4303 5.26658 3.74613 5.47234C3.06197 5.67811 2.427 6.02135 1.8801 6.48105C1.3332 6.94075 0.885887 7.50724 0.565538 8.14583C0.245189 8.78442 0.0585491 9.48167 0.0170454 10.1949C-0.0244584 10.9081 0.0800474 11.6223 0.324164 12.2938C0.568281 12.9652 0.946872 13.5798 1.43676 14.0998C1.92664 14.6198 2.51752 15.0344 3.1732 15.3181C3.82888 15.6019 4.53557 15.7488 5.25001 15.7499H19.5C20.6417 15.7512 21.7412 15.3185 22.5757 14.5395C23.4103 13.7605 23.9176 12.6934 23.9948 11.5543C24.0721 10.4153 23.7135 9.28944 22.9917 8.40489C22.2699 7.52034 21.2389 6.9432 20.1075 6.79038ZM12.75 2.24988C14.2259 2.24958 15.6502 2.79329 16.7505 3.77705C17.8507 4.76082 18.5498 6.11561 18.714 7.58238C18.7344 7.76667 18.8223 7.93688 18.9608 8.06015C19.0993 8.18341 19.2786 8.25101 19.464 8.24988H19.5C20.2957 8.25008 21.0586 8.56635 21.6211 9.1291C22.1836 9.69184 22.4995 10.455 22.4993 11.2506C22.4991 12.0463 22.1828 12.8093 21.62 13.3717C21.0573 13.9342 20.2942 14.2501 19.4985 14.2499H5.25001C4.71912 14.2496 4.19433 14.1366 3.71037 13.9184C3.22641 13.7002 2.7943 13.3817 2.44263 12.984C2.09096 12.5863 1.82774 12.1184 1.67038 11.6114C1.51303 11.1044 1.46512 10.5697 1.52984 10.0428C1.59455 9.51582 1.77042 9.00864 2.04579 8.55475C2.32116 8.10087 2.68977 7.71062 3.12723 7.40984C3.56469 7.10905 4.06103 6.90458 4.58342 6.80994C5.1058 6.71531 5.64233 6.73267 6.15751 6.86088C6.3413 6.90673 6.53563 6.88132 6.70147 6.78978C6.8673 6.69824 6.99235 6.54734 7.05151 6.36738C7.44793 5.16915 8.21193 4.12633 9.23493 3.38715C10.2579 2.64797 11.4879 2.25003 12.75 2.24988ZM5.62501 22.8749C5.62501 23.1733 5.50648 23.4594 5.2955 23.6704C5.08452 23.8814 4.79837 23.9999 4.50001 23.9999C4.20164 23.9999 3.91549 23.8814 3.70451 23.6704C3.49353 23.4594 3.37501 23.1733 3.37501 22.8749C3.37501 22.5765 3.49353 22.2904 3.70451 22.0794C3.91549 21.8684 4.20164 21.7499 4.50001 21.7499C4.79837 21.7499 5.08452 21.8684 5.2955 22.0794C5.50648 22.2904 5.62501 22.5765 5.62501 22.8749ZM6.23701 17.2889C6.42549 17.3519 6.58127 17.4871 6.67014 17.6648C6.75902 17.8426 6.77371 18.0483 6.71101 18.2369L5.96101 20.4869C5.93276 20.5837 5.88526 20.6739 5.82135 20.752C5.75745 20.83 5.67845 20.8944 5.58909 20.9412C5.49972 20.988 5.40183 21.0164 5.30127 21.0245C5.20071 21.0326 5.09955 21.0203 5.00384 20.9884C4.90812 20.9565 4.81984 20.9056 4.74425 20.8388C4.66867 20.772 4.60734 20.6906 4.56394 20.5995C4.52054 20.5084 4.49597 20.4095 4.49168 20.3087C4.4874 20.2079 4.50349 20.1073 4.53901 20.0129L5.28901 17.7629C5.35198 17.5744 5.48719 17.4186 5.66494 17.3297C5.84268 17.2409 6.04843 17.2262 6.23701 17.2889ZM11.625 22.8749C11.625 23.1733 11.5065 23.4594 11.2955 23.6704C11.0845 23.8814 10.7984 23.9999 10.5 23.9999C10.2016 23.9999 9.91549 23.8814 9.70451 23.6704C9.49353 23.4594 9.37501 23.1733 9.37501 22.8749C9.37501 22.5765 9.49353 22.2904 9.70451 22.0794C9.91549 21.8684 10.2016 21.7499 10.5 21.7499C10.7984 21.7499 11.0845 21.8684 11.2955 22.0794C11.5065 22.2904 11.625 22.5765 11.625 22.8749ZM12.237 17.2889C12.4255 17.3519 12.5813 17.4871 12.6701 17.6648C12.759 17.8426 12.7737 18.0483 12.711 18.2369L11.961 20.4869C11.9328 20.5837 11.8853 20.6739 11.8214 20.752C11.7574 20.83 11.6784 20.8944 11.5891 20.9412C11.4997 20.988 11.4018 21.0164 11.3013 21.0245C11.2007 21.0326 11.0995 21.0203 11.0038 20.9884C10.9081 20.9565 10.8198 20.9056 10.7443 20.8388C10.6687 20.772 10.6073 20.6906 10.5639 20.5995C10.5205 20.5084 10.496 20.4095 10.4917 20.3087C10.4874 20.2079 10.5035 20.1073 10.539 20.0129L11.289 17.7629C11.352 17.5744 11.4872 17.4186 11.6649 17.3297C11.8427 17.2409 12.0484 17.2262 12.237 17.2889ZM17.625 22.8749C17.625 23.1733 17.5065 23.4594 17.2955 23.6704C17.0845 23.8814 16.7984 23.9999 16.5 23.9999C16.2016 23.9999 15.9155 23.8814 15.7045 23.6704C15.4935 23.4594 15.375 23.1733 15.375 22.8749C15.375 22.5765 15.4935 22.2904 15.7045 22.0794C15.9155 21.8684 16.2016 21.7499 16.5 21.7499C16.7984 21.7499 17.0845 21.8684 17.2955 22.0794C17.5065 22.2904 17.625 22.5765 17.625 22.8749ZM18.237 17.2889C18.4255 17.3519 18.5813 17.4871 18.6701 17.6648C18.759 17.8426 18.7737 18.0483 18.711 18.2369L17.961 20.4869C17.9328 20.5837 17.8853 20.6739 17.8214 20.752C17.7574 20.83 17.6784 20.8944 17.5891 20.9412C17.4997 20.988 17.4018 21.0164 17.3013 21.0245C17.2007 21.0326 17.0995 21.0203 17.0038 20.9884C16.9081 20.9565 16.8198 20.9056 16.7443 20.8388C16.6687 20.772 16.6073 20.6906 16.5639 20.5995C16.5205 20.5084 16.496 20.4095 16.4917 20.3087C16.4874 20.2079 16.5035 20.1073 16.539 20.0129L17.289 17.7629C17.352 17.5744 17.4872 17.4186 17.6649 17.3297C17.8427 17.2409 18.0484 17.2262 18.237 17.2889Z" fill="black" />
    </IconBase>
  );
};

export default Icon