

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 11.64C0 4.9515 5.2395 0 12 0C18.7605 0 24 4.9515 24 11.64C24 18.3285 18.7605 23.28 12 23.28C10.785 23.28 9.621 23.1195 8.526 22.8195C8.31368 22.7604 8.08748 22.7763 7.8855 22.8645L5.5035 23.9175C5.35964 23.981 5.20239 24.0081 5.04558 23.9966C4.88876 23.985 4.73719 23.9351 4.60417 23.8513C4.47115 23.7675 4.36076 23.6522 4.2827 23.5157C4.20464 23.3792 4.16131 23.2257 4.1565 23.0685L4.0905 20.934C4.08594 20.8041 4.055 20.6764 3.99956 20.5589C3.94411 20.4413 3.86533 20.3362 3.768 20.25C1.434 18.162 0 15.138 0 11.64ZM8.319 9.4515L4.794 15.0435C4.4565 15.5805 5.115 16.185 5.6205 15.8025L9.408 12.9285C9.53257 12.8339 9.68457 12.7824 9.841 12.7819C9.99743 12.7813 10.1498 12.8317 10.275 12.9255L13.0785 15.0285C13.2774 15.1777 13.5051 15.284 13.7471 15.3408C13.9892 15.3976 14.2404 15.4037 14.4849 15.3586C14.7294 15.3135 14.9619 15.2182 15.1678 15.0788C15.3736 14.9394 15.5484 14.7588 15.681 14.5485L19.206 8.9565C19.545 8.4195 18.885 7.815 18.3795 8.1975L14.592 11.0715C14.4674 11.1661 14.3154 11.2176 14.159 11.2181C14.0026 11.2187 13.8502 11.1683 13.725 11.0745L10.9215 8.97C10.7226 8.82083 10.4949 8.71449 10.2529 8.65768C10.0108 8.60087 9.75961 8.59482 9.51511 8.63992C9.2706 8.68502 9.03808 8.78028 8.83222 8.9197C8.62636 9.05913 8.45161 9.23969 8.319 9.45V9.4515Z" fill="black" />
    </IconBase>
  );
};

export default Icon
