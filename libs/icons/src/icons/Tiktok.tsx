

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M13.5 1.50005L16.47 1.20605C16.686 2.27855 17.28 3.92555 18.3225 5.26805C19.3425 6.58355 20.6955 7.50005 22.5 7.50005V10.5001C19.8705 10.5001 17.895 9.27905 16.5 7.75655V18.0001C16.5 19.4834 16.0601 20.9335 15.236 22.1668C14.4119 23.4002 13.2406 24.3615 11.8701 24.9292C10.4997 25.4968 8.99168 25.6453 7.53683 25.3559C6.08197 25.0666 4.7456 24.3522 3.6967 23.3034C2.64781 22.2545 1.9335 20.9181 1.64411 19.4632C1.35472 18.0084 1.50325 16.5004 2.07091 15.1299C2.63856 13.7595 3.59986 12.5881 4.83323 11.764C6.0666 10.9399 7.51664 10.5001 9 10.5001V13.5001C8.10999 13.5001 7.23996 13.764 6.49994 14.2584C5.75992 14.7529 5.18314 15.4557 4.84255 16.278C4.50195 17.1002 4.41284 18.005 4.58647 18.878C4.7601 19.7509 5.18869 20.5527 5.81802 21.182C6.44736 21.8114 7.24918 22.24 8.1221 22.4136C8.99501 22.5872 9.89981 22.4981 10.7221 22.1575C11.5443 21.8169 12.2472 21.2401 12.7416 20.5001C13.2361 19.7601 13.5 18.8901 13.5 18.0001V1.50005Z" fill="black" />
    </IconBase>
  );
};

export default Icon
