

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.41 12L17.21 8.21002C17.3037 8.11706 17.3781 8.00645 17.4289 7.8846C17.4797 7.76274 17.5058 7.63203 17.5058 7.50002C17.5058 7.36801 17.4797 7.2373 17.4289 7.11544C17.3781 6.99358 17.3037 6.88298 17.21 6.79002L12.71 2.29002C12.6149 2.19898 12.5028 2.12761 12.38 2.08002C12.1365 1.98 11.8635 1.98 11.62 2.08002C11.3757 2.18149 11.1815 2.37567 11.08 2.62002C11.0288 2.74024 11.0016 2.86934 11 3.00002V9.59002L8.21 6.79002C8.11676 6.69678 8.00607 6.62282 7.88425 6.57236C7.76243 6.5219 7.63186 6.49593 7.5 6.49593C7.36814 6.49593 7.23757 6.5219 7.11575 6.57236C6.99393 6.62282 6.88324 6.69678 6.79 6.79002C6.69676 6.88326 6.6228 6.99395 6.57234 7.11577C6.52188 7.23759 6.49591 7.36816 6.49591 7.50002C6.49591 7.63188 6.52188 7.76245 6.57234 7.88427C6.6228 8.00609 6.69676 8.11678 6.79 8.21002L10.59 12L6.79 15.79C6.69676 15.8833 6.6228 15.9939 6.57234 16.1158C6.52188 16.2376 6.49591 16.3682 6.49591 16.5C6.49591 16.6319 6.52188 16.7624 6.57234 16.8843C6.6228 17.0061 6.69676 17.1168 6.79 17.21C6.88324 17.3033 6.99393 17.3772 7.11575 17.4277C7.23757 17.4781 7.36814 17.5041 7.5 17.5041C7.63186 17.5041 7.76243 17.4781 7.88425 17.4277C8.00607 17.3772 8.11676 17.3033 8.21 17.21L11 14.41V21C11.0016 21.1307 11.0288 21.2598 11.08 21.38C11.1815 21.6244 11.3757 21.8185 11.62 21.92C11.7397 21.9729 11.8691 22.0003 12 22.0003C12.1309 22.0003 12.2603 21.9729 12.38 21.92C12.5028 21.8724 12.6149 21.8011 12.71 21.71L17.21 17.21C17.3037 17.1171 17.3781 17.0065 17.4289 16.8846C17.4797 16.7627 17.5058 16.632 17.5058 16.5C17.5058 16.368 17.4797 16.2373 17.4289 16.1154C17.3781 15.9936 17.3037 15.883 17.21 15.79L13.41 12ZM13 5.41002L15.09 7.50002L13 9.59002V5.41002ZM13 18.59V14.41L15.09 16.5L13 18.59Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon