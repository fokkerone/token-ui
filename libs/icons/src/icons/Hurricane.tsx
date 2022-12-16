

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.4985 3.9C11.7564 3.25777 13.1581 2.94922 14.5694 3.00389C15.9806 3.05856 17.3543 3.47462 18.5587 4.21224C19.7631 4.94986 20.758 5.98433 21.4481 7.21659C22.1382 8.44886 22.5004 9.83766 22.5 11.25C22.5 11.4489 22.579 11.6397 22.7197 11.7803C22.8603 11.921 23.0511 12 23.25 12C23.4489 12 23.6397 11.921 23.7803 11.7803C23.921 11.6397 24 11.4489 24 11.25C24 8.66414 22.9728 6.18419 21.1443 4.35571C19.3158 2.52723 16.8359 1.5 14.25 1.5C11.6641 1.5 9.18419 2.52723 7.35571 4.35571C5.52723 6.18419 4.5 8.66414 4.5 11.25C4.49973 12.3624 4.74692 13.461 5.22367 14.4661C5.70043 15.4712 6.39479 16.3576 7.25646 17.0612C8.11814 17.7648 9.12553 18.2679 10.2057 18.534C11.2858 18.8002 12.4116 18.8227 13.5015 18.6C12.2436 19.2422 10.8419 19.5508 9.43065 19.4961C8.01936 19.4414 6.64574 19.0254 5.44132 18.2878C4.23689 17.5501 3.242 16.5157 2.5519 15.2834C1.8618 14.0511 1.49961 12.6623 1.5 11.25C1.5 11.0511 1.42098 10.8603 1.28033 10.7197C1.13968 10.579 0.948912 10.5 0.75 10.5C0.551088 10.5 0.360322 10.579 0.21967 10.7197C0.0790176 10.8603 0 11.0511 0 11.25C0 13.8359 1.02723 16.3158 2.85571 18.1443C4.68419 19.9728 7.16414 21 9.75 21C12.3359 21 14.8158 19.9728 16.6443 18.1443C18.4728 16.3158 19.5 13.8359 19.5 11.25C19.5003 10.1376 19.2531 9.03901 18.7763 8.03391C18.2996 7.02882 17.6052 6.14237 16.7435 5.43878C15.8819 4.7352 14.8745 4.23211 13.7943 3.96597C12.7142 3.69983 11.5884 3.67729 10.4985 3.9ZM15 11.25C15 12.0456 14.6839 12.8087 14.1213 13.3713C13.5587 13.9339 12.7956 14.25 12 14.25C11.2044 14.25 10.4413 13.9339 9.87868 13.3713C9.31607 12.8087 9 12.0456 9 11.25C9 10.4544 9.31607 9.69129 9.87868 9.12868C10.4413 8.56607 11.2044 8.25 12 8.25C12.7956 8.25 13.5587 8.56607 14.1213 9.12868C14.6839 9.69129 15 10.4544 15 11.25Z" fill="black" />
    </IconBase>
  );
};

export default Icon