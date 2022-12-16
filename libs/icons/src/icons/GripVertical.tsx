

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M10.5 3C10.5 3.39782 10.342 3.77936 10.0607 4.06066C9.77936 4.34196 9.39782 4.5 9 4.5C8.60218 4.5 8.22064 4.34196 7.93934 4.06066C7.65804 3.77936 7.5 3.39782 7.5 3C7.5 2.60218 7.65804 2.22064 7.93934 1.93934C8.22064 1.65804 8.60218 1.5 9 1.5C9.39782 1.5 9.77936 1.65804 10.0607 1.93934C10.342 2.22064 10.5 2.60218 10.5 3ZM15 3C15 3.39782 14.842 3.77936 14.5607 4.06066C14.2794 4.34196 13.8978 4.5 13.5 4.5C13.1022 4.5 12.7206 4.34196 12.4393 4.06066C12.158 3.77936 12 3.39782 12 3C12 2.60218 12.158 2.22064 12.4393 1.93934C12.7206 1.65804 13.1022 1.5 13.5 1.5C13.8978 1.5 14.2794 1.65804 14.5607 1.93934C14.842 2.22064 15 2.60218 15 3ZM10.5 7.5C10.5 7.89782 10.342 8.27936 10.0607 8.56066C9.77936 8.84196 9.39782 9 9 9C8.60218 9 8.22064 8.84196 7.93934 8.56066C7.65804 8.27936 7.5 7.89782 7.5 7.5C7.5 7.10218 7.65804 6.72064 7.93934 6.43934C8.22064 6.15804 8.60218 6 9 6C9.39782 6 9.77936 6.15804 10.0607 6.43934C10.342 6.72064 10.5 7.10218 10.5 7.5ZM15 7.5C15 7.89782 14.842 8.27936 14.5607 8.56066C14.2794 8.84196 13.8978 9 13.5 9C13.1022 9 12.7206 8.84196 12.4393 8.56066C12.158 8.27936 12 7.89782 12 7.5C12 7.10218 12.158 6.72064 12.4393 6.43934C12.7206 6.15804 13.1022 6 13.5 6C13.8978 6 14.2794 6.15804 14.5607 6.43934C14.842 6.72064 15 7.10218 15 7.5ZM10.5 12C10.5 12.3978 10.342 12.7794 10.0607 13.0607C9.77936 13.342 9.39782 13.5 9 13.5C8.60218 13.5 8.22064 13.342 7.93934 13.0607C7.65804 12.7794 7.5 12.3978 7.5 12C7.5 11.6022 7.65804 11.2206 7.93934 10.9393C8.22064 10.658 8.60218 10.5 9 10.5C9.39782 10.5 9.77936 10.658 10.0607 10.9393C10.342 11.2206 10.5 11.6022 10.5 12ZM15 12C15 12.3978 14.842 12.7794 14.5607 13.0607C14.2794 13.342 13.8978 13.5 13.5 13.5C13.1022 13.5 12.7206 13.342 12.4393 13.0607C12.158 12.7794 12 12.3978 12 12C12 11.6022 12.158 11.2206 12.4393 10.9393C12.7206 10.658 13.1022 10.5 13.5 10.5C13.8978 10.5 14.2794 10.658 14.5607 10.9393C14.842 11.2206 15 11.6022 15 12ZM10.5 16.5C10.5 16.8978 10.342 17.2794 10.0607 17.5607C9.77936 17.842 9.39782 18 9 18C8.60218 18 8.22064 17.842 7.93934 17.5607C7.65804 17.2794 7.5 16.8978 7.5 16.5C7.5 16.1022 7.65804 15.7206 7.93934 15.4393C8.22064 15.158 8.60218 15 9 15C9.39782 15 9.77936 15.158 10.0607 15.4393C10.342 15.7206 10.5 16.1022 10.5 16.5ZM15 16.5C15 16.8978 14.842 17.2794 14.5607 17.5607C14.2794 17.842 13.8978 18 13.5 18C13.1022 18 12.7206 17.842 12.4393 17.5607C12.158 17.2794 12 16.8978 12 16.5C12 16.1022 12.158 15.7206 12.4393 15.4393C12.7206 15.158 13.1022 15 13.5 15C13.8978 15 14.2794 15.158 14.5607 15.4393C14.842 15.7206 15 16.1022 15 16.5ZM10.5 21C10.5 21.3978 10.342 21.7794 10.0607 22.0607C9.77936 22.342 9.39782 22.5 9 22.5C8.60218 22.5 8.22064 22.342 7.93934 22.0607C7.65804 21.7794 7.5 21.3978 7.5 21C7.5 20.6022 7.65804 20.2206 7.93934 19.9393C8.22064 19.658 8.60218 19.5 9 19.5C9.39782 19.5 9.77936 19.658 10.0607 19.9393C10.342 20.2206 10.5 20.6022 10.5 21ZM15 21C15 21.3978 14.842 21.7794 14.5607 22.0607C14.2794 22.342 13.8978 22.5 13.5 22.5C13.1022 22.5 12.7206 22.342 12.4393 22.0607C12.158 21.7794 12 21.3978 12 21C12 20.6022 12.158 20.2206 12.4393 19.9393C12.7206 19.658 13.1022 19.5 13.5 19.5C13.8978 19.5 14.2794 19.658 14.5607 19.9393C14.842 20.2206 15 20.6022 15 21Z" fill="black" />
    </IconBase>
  );
};

export default Icon