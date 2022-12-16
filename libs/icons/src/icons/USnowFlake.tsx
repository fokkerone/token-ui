

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M21.16 16.13L19.16 14.98L20.05 14.74C20.1807 14.7095 20.3039 14.6531 20.4124 14.574C20.5208 14.4949 20.6122 14.3948 20.6811 14.2797C20.7501 14.1645 20.7951 14.0367 20.8136 13.9037C20.832 13.7708 20.8236 13.6355 20.7887 13.5059C20.7537 13.3763 20.6931 13.2551 20.6103 13.1495C20.5276 13.0438 20.4244 12.9559 20.307 12.8909C20.1895 12.826 20.0602 12.7854 19.9267 12.7715C19.7932 12.7576 19.6583 12.7707 19.53 12.81L16.71 13.57L14 12L16.71 10.43L19.53 11.19H19.79C20.0552 11.2245 20.3233 11.1522 20.5352 10.989C20.7471 10.8259 20.8855 10.5852 20.92 10.32C20.9545 10.0548 20.8822 9.78673 20.719 9.57482C20.5559 9.3629 20.3152 9.22448 20.05 9.19L19.16 9L21.16 7.85C21.2742 7.78434 21.3744 7.69682 21.4549 7.59243C21.5353 7.48805 21.5944 7.36885 21.6287 7.24163C21.6631 7.11441 21.6721 6.98168 21.6551 6.85099C21.6382 6.72031 21.5957 6.59425 21.53 6.48C21.4643 6.36575 21.3768 6.26555 21.2724 6.18513C21.168 6.1047 21.0488 6.04562 20.9216 6.01126C20.7944 5.97691 20.6617 5.96794 20.531 5.98488C20.4003 6.00182 20.2742 6.04434 20.16 6.11L18 7.37L18.3 6.26C18.3393 6.13169 18.3524 5.99677 18.3385 5.86328C18.3246 5.7298 18.284 5.60048 18.219 5.48303C18.1541 5.36558 18.0662 5.2624 17.9605 5.17965C17.8549 5.09689 17.7336 5.03625 17.6041 5.00133C17.4745 4.96642 17.3392 4.95795 17.2063 4.97642C17.0733 4.9949 16.9455 5.03994 16.8303 5.10886C16.7152 5.17779 16.6151 5.26919 16.536 5.37762C16.4569 5.48605 16.4004 5.60929 16.37 5.74L15.55 8.74L13 10.27V7.14L15.07 5.07C15.2562 4.88264 15.3608 4.62919 15.3608 4.365C15.3608 4.10081 15.2562 3.84736 15.07 3.66C14.977 3.56627 14.8664 3.49188 14.7446 3.44111C14.6227 3.39034 14.492 3.3642 14.36 3.3642C14.228 3.3642 14.0973 3.39034 13.9754 3.44111C13.8536 3.49188 13.743 3.56627 13.65 3.66L13 4.31V2C13 1.73478 12.8946 1.48043 12.7071 1.29289C12.5196 1.10536 12.2652 1 12 1C11.7348 1 11.4804 1.10536 11.2929 1.29289C11.1053 1.48043 11 1.73478 11 2V4.47L10.19 3.66C10.097 3.56627 9.98643 3.49188 9.86457 3.44111C9.74271 3.39034 9.612 3.3642 9.47999 3.3642C9.34798 3.3642 9.21727 3.39034 9.09542 3.44111C8.97356 3.49188 8.86296 3.56627 8.76999 3.66C8.58374 3.84736 8.4792 4.10081 8.4792 4.365C8.4792 4.62919 8.58374 4.88264 8.76999 5.07L11 7.3V10.3L8.42999 8.78L7.60999 5.78C7.57954 5.64929 7.52309 5.52605 7.444 5.41762C7.36492 5.30919 7.26482 5.21779 7.14966 5.14886C7.03451 5.07994 6.90666 5.03489 6.77373 5.01642C6.6408 4.99795 6.50551 5.00642 6.37592 5.04133C6.24634 5.07625 6.1251 5.13689 6.01945 5.21965C5.91379 5.3024 5.82588 5.40558 5.76094 5.52303C5.696 5.64048 5.65536 5.7698 5.64146 5.90328C5.62755 6.03677 5.64066 6.17169 5.67999 6.3L5.99999 7.37L3.83999 6.13C3.72574 6.06434 3.59968 6.02182 3.469 6.00488C3.33832 5.98794 3.20558 5.99691 3.07836 6.03126C2.95115 6.06562 2.83194 6.1247 2.72756 6.20513C2.62317 6.28555 2.53565 6.38575 2.46999 6.5C2.40433 6.61425 2.36182 6.74031 2.34488 6.871C2.32793 7.00168 2.3369 7.13441 2.37126 7.26163C2.44064 7.51855 2.60925 7.73739 2.83999 7.87L4.83999 9L3.99999 9.26C3.73478 9.29448 3.49412 9.4329 3.33096 9.64482C3.1678 9.85673 3.09551 10.1248 3.12999 10.39C3.16447 10.6552 3.30289 10.8959 3.51481 11.059C3.72672 11.2222 3.99478 11.2945 4.25999 11.26H4.51999L7.33999 10.5L9.99999 12L7.28999 13.57L4.46999 12.81C4.33767 12.7609 4.19645 12.7403 4.05562 12.7497C3.91478 12.759 3.77752 12.7981 3.65286 12.8643C3.52821 12.9305 3.41898 13.0223 3.33235 13.1338C3.24573 13.2452 3.18368 13.3737 3.15029 13.5108C3.11689 13.648 3.1129 13.7906 3.13859 13.9294C3.16427 14.0682 3.21905 14.2 3.29931 14.3161C3.37957 14.4322 3.4835 14.53 3.60427 14.6031C3.72503 14.6761 3.8599 14.7228 3.99999 14.74L4.88999 14.98L2.88999 16.13C2.65925 16.2626 2.49064 16.4814 2.42126 16.7384C2.35187 16.9953 2.38738 17.2693 2.51999 17.5C2.6526 17.7307 2.87144 17.8993 3.12836 17.9687C3.38529 18.0381 3.65925 18.0026 3.88999 17.87L5.99999 16.63L5.69999 17.74C5.66035 17.868 5.64684 18.0027 5.66027 18.136C5.67369 18.2693 5.71378 18.3986 5.77814 18.5161C5.8425 18.6337 5.92983 18.7371 6.03494 18.8202C6.14005 18.9033 6.26079 18.9645 6.38999 19C6.47638 19.0098 6.5636 19.0098 6.64999 19C6.87575 19.0077 7.09748 18.9388 7.27907 18.8044C7.46065 18.6701 7.59139 18.4782 7.64999 18.26L8.46999 15.26L11 13.73V16.86L8.92999 18.93C8.74374 19.1174 8.6392 19.3708 8.6392 19.635C8.6392 19.8992 8.74374 20.1526 8.92999 20.34C9.02261 20.4345 9.13305 20.5097 9.25493 20.5612C9.3768 20.6127 9.50769 20.6395 9.63999 20.64C9.7723 20.6395 9.90318 20.6127 10.0251 20.5612C10.1469 20.5097 10.2574 20.4345 10.35 20.34L11 19.69V22C11 22.2652 11.1053 22.5196 11.2929 22.7071C11.4804 22.8946 11.7348 23 12 23C12.2652 23 12.5196 22.8946 12.7071 22.7071C12.8946 22.5196 13 22.2652 13 22V19.53L13.81 20.34C13.903 20.4337 14.0136 20.5081 14.1354 20.5589C14.2573 20.6097 14.388 20.6358 14.52 20.6358C14.652 20.6358 14.7827 20.6097 14.9046 20.5589C15.0264 20.5081 15.137 20.4337 15.23 20.34C15.4162 20.1526 15.5208 19.8992 15.5208 19.635C15.5208 19.3708 15.4162 19.1174 15.23 18.93L13 16.7V13.7L15.57 15.19L16.39 18.19C16.4486 18.4082 16.5793 18.6001 16.7609 18.7344C16.9425 18.8688 17.1642 18.9377 17.39 18.93C17.4764 18.9398 17.5636 18.9398 17.65 18.93C17.7777 18.8964 17.8974 18.8378 18.0023 18.7576C18.1073 18.6774 18.1953 18.5773 18.2613 18.4629C18.3273 18.3486 18.37 18.2223 18.3869 18.0913C18.4039 17.9604 18.3947 17.8274 18.36 17.7L18 16.63L20.14 17.87C20.2542 17.9357 20.3803 17.9782 20.511 17.9951C20.6417 18.0121 20.7744 18.0031 20.9016 17.9687C21.0288 17.9344 21.148 17.8753 21.2524 17.7949C21.3568 17.7144 21.4443 17.6143 21.51 17.5C21.5757 17.3857 21.6182 17.2597 21.6351 17.129C21.6521 16.9983 21.6431 16.8656 21.6087 16.7384C21.5744 16.6112 21.5153 16.492 21.4349 16.3876C21.3544 16.2832 21.2542 16.1957 21.14 16.13H21.16Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
