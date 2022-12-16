

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V3ZM6 16.5H18C18.1446 16.5 18.2861 16.4583 18.4075 16.3798C18.5289 16.3013 18.625 16.1894 18.6843 16.0575C18.7435 15.9256 18.7634 15.7795 18.7416 15.6365C18.7197 15.4936 18.657 15.3601 18.561 15.252L12.561 8.502C12.4906 8.42269 12.4042 8.35921 12.3075 8.31573C12.2108 8.27225 12.106 8.24977 12 8.24977C11.894 8.24977 11.7892 8.27225 11.6925 8.31573C11.5958 8.35921 11.5094 8.42269 11.439 8.502L5.439 15.252C5.343 15.3601 5.2803 15.4936 5.25843 15.6365C5.23656 15.7795 5.25646 15.9256 5.31574 16.0575C5.37501 16.1894 5.47113 16.3013 5.59253 16.3798C5.71393 16.4583 5.85543 16.5 6 16.5Z" fill="black" />
    </IconBase>
  );
};

export default Icon