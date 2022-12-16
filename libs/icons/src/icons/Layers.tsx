

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.3525 2.33849C12.2439 2.28071 12.1229 2.25049 12 2.25049C11.877 2.25049 11.756 2.28071 11.6475 2.33849L0.397453 8.33849C0.277644 8.4025 0.17747 8.49785 0.107625 8.61436C0.0377812 8.73086 0.000889648 8.86415 0.000889648 8.99999C0.000889648 9.13583 0.0377812 9.26911 0.107625 9.38562C0.17747 9.50212 0.277644 9.59747 0.397453 9.66149L4.78195 12L0.395953 14.3385C0.276144 14.4025 0.17597 14.4979 0.106125 14.6144C0.0362812 14.7309 -0.000610352 14.8642 -0.000610352 15C-0.000610352 15.1358 0.0362812 15.2691 0.106125 15.3856C0.17597 15.5021 0.276144 15.5975 0.395953 15.6615L11.646 21.6615C11.7545 21.7193 11.8755 21.7495 11.9985 21.7495C12.1214 21.7495 12.2424 21.7193 12.351 21.6615L23.601 15.6615C23.7208 15.5975 23.8209 15.5021 23.8908 15.3856C23.9606 15.2691 23.9975 15.1358 23.9975 15C23.9975 14.8642 23.9606 14.7309 23.8908 14.6144C23.8209 14.4979 23.7208 14.4025 23.601 14.3385L19.2195 12L23.6025 9.66149C23.7223 9.59747 23.8224 9.50212 23.8923 9.38562C23.9621 9.26911 23.999 9.13583 23.999 8.99999C23.999 8.86415 23.9621 8.73086 23.8923 8.61436C23.8224 8.49785 23.7223 8.4025 23.6025 8.33849L12.3525 2.33849ZM17.625 12.8505L21.657 15L12 20.1495L2.34295 15L6.37495 12.8505L11.6475 15.6615C11.756 15.7193 11.877 15.7495 12 15.7495C12.1229 15.7495 12.2439 15.7193 12.3525 15.6615L17.625 12.8505ZM12 14.1495L2.34295 8.99999L12 3.85049L21.657 8.99999L12 14.1495Z" fill="black" />
    </IconBase>
  );
};

export default Icon