

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M12.75 4.0305C13.731 2.997 15.423 2.7015 17.418 2.9025C19.269 3.0885 21.1725 3.687 22.5 4.242V19.1265C21.123 18.6015 19.3395 18.0885 17.5695 17.9115C15.9285 17.745 14.1525 17.853 12.75 18.6495V4.0305ZM12 2.6745C10.5225 1.404 8.3805 1.215 6.4305 1.41C4.1595 1.6395 1.8675 2.418 0.4395 3.0675C0.308474 3.1271 0.197363 3.22313 0.119432 3.34415C0.0415 3.46517 3.98571e-05 3.60606 0 3.75L0 20.25C3.4743e-05 20.3755 0.0315557 20.499 0.0916756 20.6091C0.151796 20.7193 0.238593 20.8126 0.344116 20.8805C0.44964 20.9484 0.570517 20.9887 0.695675 20.9978C0.820833 21.0069 0.946271 20.9845 1.0605 20.9325C2.3835 20.3325 4.515 19.611 6.5805 19.4025C8.694 19.1895 10.4655 19.533 11.415 20.718C11.4853 20.8056 11.5743 20.8763 11.6756 20.9249C11.7768 20.9735 11.8877 20.9987 12 20.9987C12.1123 20.9987 12.2232 20.9735 12.3244 20.9249C12.4257 20.8763 12.5147 20.8056 12.585 20.718C13.5345 19.533 15.306 19.1895 17.418 19.4025C19.485 19.611 21.618 20.3325 22.9395 20.9325C23.0537 20.9845 23.1792 21.0069 23.3043 20.9978C23.4295 20.9887 23.5504 20.9484 23.6559 20.8805C23.7614 20.8126 23.8482 20.7193 23.9083 20.6091C23.9684 20.499 24 20.3755 24 20.25V3.75C24 3.60606 23.9585 3.46517 23.8806 3.34415C23.8026 3.22313 23.6915 3.1271 23.5605 3.0675C22.1325 2.418 19.8405 1.6395 17.5695 1.41C15.6195 1.2135 13.4775 1.404 12 2.6745Z" fill="black" />
    </IconBase>
  );
};

export default Icon
