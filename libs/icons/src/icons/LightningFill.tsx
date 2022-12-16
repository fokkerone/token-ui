

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M8.27995 0.5385C8.32566 0.382993 8.42052 0.246478 8.55031 0.1494C8.68011 0.0523218 8.83787 -9.47797e-05 8.99995 1.28657e-07H15C15.1187 9.02905e-05 15.2358 0.028389 15.3415 0.0825666C15.4472 0.136744 15.5385 0.215251 15.6079 0.311625C15.6774 0.407999 15.7229 0.519484 15.7408 0.636901C15.7587 0.754318 15.7485 0.874311 15.711 0.987L13.041 9H18.75C18.8904 8.9999 19.0281 9.03924 19.1472 9.11355C19.2664 9.18785 19.3624 9.29413 19.4241 9.42028C19.4859 9.54643 19.5109 9.68738 19.4965 9.82709C19.4821 9.96679 19.4287 10.0996 19.3425 10.2105L8.84245 23.7105C8.73489 23.8495 8.58194 23.9462 8.4103 23.984C8.23866 24.0217 8.05924 23.9979 7.90333 23.9168C7.74742 23.8357 7.62493 23.7025 7.55724 23.5403C7.48955 23.3782 7.48095 23.1974 7.53295 23.0295L10.2345 14.25H5.24995C5.13335 14.2501 5.01834 14.2229 4.91405 14.1708C4.80976 14.1186 4.71907 14.0429 4.64917 13.9496C4.57928 13.8562 4.53212 13.7479 4.51142 13.6331C4.49072 13.5184 4.49707 13.4004 4.52995 13.2885L8.27995 0.5385Z" fill="black" />
    </IconBase>
  );
};

export default Icon
