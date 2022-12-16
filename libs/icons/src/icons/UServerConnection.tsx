

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11 13C10.8022 13 10.6089 13.0586 10.4444 13.1685C10.28 13.2784 10.1518 13.4346 10.0761 13.6173C10.0004 13.8 9.98063 14.0011 10.0192 14.1951C10.0578 14.3891 10.153 14.5673 10.2929 14.7071C10.4327 14.847 10.6109 14.9422 10.8049 14.9808C10.9989 15.0194 11.2 14.9996 11.3827 14.9239C11.5654 14.8482 11.7216 14.72 11.8315 14.5556C11.9414 14.3911 12 14.1978 12 14C12 13.7348 11.8946 13.4804 11.7071 13.2929C11.5196 13.1054 11.2652 13 11 13ZM7 13C6.80222 13 6.60888 13.0586 6.44443 13.1685C6.27998 13.2784 6.15181 13.4346 6.07612 13.6173C6.00043 13.8 5.98063 14.0011 6.01921 14.1951C6.0578 14.3891 6.15304 14.5673 6.29289 14.7071C6.43275 14.847 6.61093 14.9422 6.80491 14.9808C6.99889 15.0194 7.19996 14.9996 7.38268 14.9239C7.56541 14.8482 7.72159 14.72 7.83147 14.5556C7.94135 14.3911 8 14.1978 8 14C8 13.7348 7.89464 13.4804 7.70711 13.2929C7.51957 13.1054 7.26522 13 7 13ZM22 4C22 3.20435 21.6839 2.44129 21.1213 1.87868C20.5587 1.31607 19.7956 1 19 1H5C4.20435 1 3.44129 1.31607 2.87868 1.87868C2.31607 2.44129 2 3.20435 2 4V8C2.00441 8.74005 2.28221 9.45236 2.78 10C2.28221 10.5476 2.00441 11.2599 2 12V16C2 16.7956 2.31607 17.5587 2.87868 18.1213C3.44129 18.6839 4.20435 19 5 19H11V21H3C2.73478 21 2.48043 21.1054 2.29289 21.2929C2.10536 21.4804 2 21.7348 2 22C2 22.2652 2.10536 22.5196 2.29289 22.7071C2.48043 22.8946 2.73478 23 3 23H21C21.2652 23 21.5196 22.8946 21.7071 22.7071C21.8946 22.5196 22 22.2652 22 22C22 21.7348 21.8946 21.4804 21.7071 21.2929C21.5196 21.1054 21.2652 21 21 21H13V19H19C19.7956 19 20.5587 18.6839 21.1213 18.1213C21.6839 17.5587 22 16.7956 22 16V12C21.9956 11.2599 21.7178 10.5476 21.22 10C21.7178 9.45236 21.9956 8.74005 22 8V4ZM20 16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16V12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12V16ZM20 8C20 8.26522 19.8946 8.51957 19.7071 8.70711C19.5196 8.89464 19.2652 9 19 9H5C4.73478 9 4.48043 8.89464 4.29289 8.70711C4.10536 8.51957 4 8.26522 4 8V4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289C19.8946 3.48043 20 3.73478 20 4V8ZM11 5C10.8022 5 10.6089 5.05865 10.4444 5.16853C10.28 5.27841 10.1518 5.43459 10.0761 5.61732C10.0004 5.80004 9.98063 6.00111 10.0192 6.19509C10.0578 6.38907 10.153 6.56725 10.2929 6.70711C10.4327 6.84696 10.6109 6.9422 10.8049 6.98079C10.9989 7.01937 11.2 6.99957 11.3827 6.92388C11.5654 6.84819 11.7216 6.72002 11.8315 6.55557C11.9414 6.39112 12 6.19778 12 6C12 5.73478 11.8946 5.48043 11.7071 5.29289C11.5196 5.10536 11.2652 5 11 5ZM7 5C6.80222 5 6.60888 5.05865 6.44443 5.16853C6.27998 5.27841 6.15181 5.43459 6.07612 5.61732C6.00043 5.80004 5.98063 6.00111 6.01921 6.19509C6.0578 6.38907 6.15304 6.56725 6.29289 6.70711C6.43275 6.84696 6.61093 6.9422 6.80491 6.98079C6.99889 7.01937 7.19996 6.99957 7.38268 6.92388C7.56541 6.84819 7.72159 6.72002 7.83147 6.55557C7.94135 6.39112 8 6.19778 8 6C8 5.73478 7.89464 5.48043 7.70711 5.29289C7.51957 5.10536 7.26522 5 7 5Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon