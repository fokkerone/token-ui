

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.5015 16.5002C10.5015 16.1024 10.6595 15.7208 10.9408 15.4395C11.2221 15.1582 11.6036 15.0002 12.0015 15.0002C12.3993 15.0002 12.7808 15.1582 13.0621 15.4395C13.3434 15.7208 13.5015 16.1024 13.5015 16.5002C13.5015 16.898 13.3434 17.2795 13.0621 17.5608C12.7808 17.8421 12.3993 18.0002 12.0015 18.0002C11.6036 18.0002 11.2221 17.8421 10.9408 17.5608C10.6595 17.2795 10.5015 16.898 10.5015 16.5002ZM10.65 7.49268C10.63 7.30344 10.65 7.11211 10.7088 6.93112C10.7675 6.75012 10.8636 6.5835 10.9909 6.44206C11.1182 6.30062 11.2739 6.18752 11.4477 6.1101C11.6215 6.03268 11.8097 5.99268 12 5.99268C12.1903 5.99268 12.3784 6.03268 12.5522 6.1101C12.7261 6.18752 12.8817 6.30062 13.009 6.44206C13.1363 6.5835 13.2324 6.75012 13.2912 6.93112C13.3499 7.11211 13.3699 7.30344 13.35 7.49268L12.825 12.7532C12.8036 12.9571 12.7075 13.1459 12.5552 13.2832C12.4028 13.4204 12.205 13.4964 12 13.4964C11.7949 13.4964 11.5971 13.4204 11.4448 13.2832C11.2924 13.1459 11.1963 12.9571 11.175 12.7532L10.65 7.49268Z" fill="black" /><path d="M15.4091 3.76927L14.0276 2.35327L15.1001 1.30627L16.0331 2.26177L17.3681 2.24527C17.946 2.23843 18.5194 2.34721 19.0547 2.5652C19.5899 2.7832 20.0761 3.10601 20.4848 3.51466C20.8934 3.92331 21.2162 4.40954 21.4342 4.94476C21.6522 5.47999 21.761 6.05339 21.7541 6.63127L21.7391 7.96627L22.6931 8.89927C23.1063 9.30302 23.4347 9.7853 23.6588 10.3177C23.883 10.8502 23.9984 11.4221 23.9984 11.9998C23.9984 12.5775 23.883 13.1494 23.6588 13.6818C23.4347 14.2142 23.1063 14.6965 22.6931 15.1003L21.7376 16.0333L21.7541 17.3683C21.761 17.9461 21.6522 18.5196 21.4342 19.0548C21.2162 19.59 20.8934 20.0762 20.4848 20.4849C20.0761 20.8935 19.5899 21.2163 19.0547 21.4343C18.5194 21.6523 17.946 21.7611 17.3681 21.7543L16.0331 21.7393L15.1001 22.6933C14.6964 23.1065 14.2141 23.4348 13.6817 23.6589C13.1492 23.8831 12.5774 23.9986 11.9996 23.9986C11.4219 23.9986 10.8501 23.8831 10.3176 23.6589C9.78517 23.4348 9.3029 23.1065 8.89915 22.6933L7.96615 21.7378L6.63115 21.7543C6.05327 21.7611 5.47986 21.6523 4.94464 21.4343C4.40942 21.2163 3.92318 20.8935 3.51454 20.4849C3.10589 20.0762 2.78307 19.59 2.56508 19.0548C2.34708 18.5196 2.23831 17.9461 2.24515 17.3683L2.26015 16.0333L1.30615 15.1003C0.892958 14.6965 0.564638 14.2142 0.340482 13.6818C0.116325 13.1494 0.000854492 12.5775 0.000854492 11.9998C0.000854492 11.4221 0.116325 10.8502 0.340482 10.3177C0.564638 9.7853 0.892958 9.30302 1.30615 8.89927L2.26165 7.96627L2.24515 6.63127C2.23831 6.05339 2.34708 5.47999 2.56508 4.94476C2.78307 4.40954 3.10589 3.92331 3.51454 3.51466C3.92318 3.10601 4.40942 2.7832 4.94464 2.5652C5.47986 2.34721 6.05327 2.23843 6.63115 2.24527L7.96615 2.26027L8.89915 1.30627C9.3029 0.89308 9.78517 0.56476 10.3176 0.340604C10.8501 0.116448 11.4219 0.000976562 11.9996 0.000976562C12.5774 0.000976562 13.1492 0.116448 13.6817 0.340604C14.2141 0.56476 14.6964 0.89308 15.1001 1.30627L14.0276 2.35327C13.7636 2.08295 13.4482 1.86815 13.0999 1.72149C12.7516 1.57484 12.3775 1.49929 11.9996 1.49929C11.6218 1.49929 11.2477 1.57484 10.8994 1.72149C10.5511 1.86815 10.2357 2.08295 9.97165 2.35327L8.59165 3.76927L6.61165 3.74527C6.23391 3.74105 5.85915 3.81236 5.50936 3.95501C5.15957 4.09766 4.84183 4.30878 4.57478 4.57597C4.30774 4.84315 4.09678 5.16101 3.95431 5.51087C3.81184 5.86073 3.74073 6.23554 3.74515 6.61327L3.76915 8.59027L2.35315 9.97177C2.08283 10.2358 1.86803 10.5513 1.72137 10.8995C1.57472 11.2478 1.49917 11.6219 1.49917 11.9998C1.49917 12.3777 1.57472 12.7517 1.72137 13.1C1.86803 13.4483 2.08283 13.7637 2.35315 14.0278L3.76915 15.4078L3.74515 17.3878C3.74092 17.7655 3.81223 18.1403 3.95489 18.4901C4.09754 18.8398 4.30866 19.1576 4.57585 19.4246C4.84303 19.6917 5.16089 19.9026 5.51075 20.0451C5.86061 20.1876 6.23542 20.2587 6.61315 20.2543L8.59015 20.2303L9.97165 21.6463C10.2357 21.9166 10.5511 22.1314 10.8994 22.278C11.2477 22.4247 11.6218 22.5002 11.9996 22.5002C12.3775 22.5002 12.7516 22.4247 13.0999 22.278C13.4482 22.1314 13.7636 21.9166 14.0276 21.6463L15.4076 20.2303L17.3876 20.2543C17.7654 20.2585 18.1401 20.1872 18.4899 20.0445C18.8397 19.9019 19.1575 19.6908 19.4245 19.4236C19.6916 19.1564 19.9025 18.8385 20.045 18.4887C20.1875 18.1388 20.2586 17.764 20.2541 17.3863L20.2301 15.4093L21.6461 14.0278C21.9165 13.7637 22.1313 13.4483 22.2779 13.1C22.4246 12.7517 22.5001 12.3777 22.5001 11.9998C22.5001 11.6219 22.4246 11.2478 22.2779 10.8995C22.1313 10.5513 21.9165 10.2358 21.6461 9.97177L20.2301 8.59177L20.2541 6.61177C20.2584 6.23404 20.1871 5.85927 20.0444 5.50948C19.9018 5.1597 19.6906 4.84195 19.4234 4.5749C19.1563 4.30786 18.8384 4.0969 18.4885 3.95443C18.1387 3.81196 17.7639 3.74085 17.3861 3.74527L15.4091 3.76927Z" fill="black" />
    </IconBase>
  );
};

export default Icon
