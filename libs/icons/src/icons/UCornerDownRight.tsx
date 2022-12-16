

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M19.61 16C19.5557 15.8785 19.4813 15.7669 19.39 15.67L14.76 11C14.5687 10.8362 14.3226 10.7506 14.071 10.7603C13.8193 10.77 13.5806 10.8743 13.4025 11.0524C13.2244 11.2305 13.12 11.4693 13.1103 11.7209C13.1006 11.9726 13.1862 12.2187 13.35 12.41L16.27 15.33H9.27002C8.47437 15.33 7.71131 15.0139 7.1487 14.4513C6.58609 13.8887 6.27002 13.1256 6.27002 12.33V3C6.27002 2.73478 6.16466 2.48043 5.97713 2.29289C5.78959 2.10536 5.53524 2 5.27002 2C5.0048 2 4.75045 2.10536 4.56291 2.29289C4.37538 2.48043 4.27002 2.73478 4.27002 3V12.37C4.27002 13.6961 4.7968 14.9679 5.73449 15.9055C6.67217 16.8432 7.94394 17.37 9.27002 17.37H16.27L13.35 20.29C13.2563 20.383 13.1819 20.4936 13.1311 20.6154C13.0804 20.7373 13.0542 20.868 13.0542 21C13.0542 21.132 13.0804 21.2627 13.1311 21.3846C13.1819 21.5064 13.2563 21.617 13.35 21.71C13.4435 21.8027 13.5543 21.876 13.6761 21.9258C13.798 21.9755 13.9284 22.0008 14.06 22C14.3224 21.9989 14.5738 21.8947 14.76 21.71L19.39 17.08C19.4846 16.9858 19.5595 16.8736 19.61 16.75C19.7073 16.5095 19.7073 16.2405 19.61 16Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon