

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M11.9041 4.5C12.0354 4.50007 12.1655 4.47426 12.2868 4.42403C12.4082 4.3738 12.5185 4.30015 12.6113 4.20727C12.7042 4.1144 12.7779 4.00413 12.8281 3.88277C12.8783 3.76141 12.9041 3.63134 12.9041 3.5V2.5C12.9041 2.23478 12.7987 1.98043 12.6112 1.79289C12.4236 1.60536 12.1693 1.5 11.9041 1.5C11.6388 1.5 11.3845 1.60536 11.1969 1.79289C11.0094 1.98043 10.9041 2.23478 10.9041 2.5V3.5C10.904 3.63134 10.9298 3.76141 10.98 3.88277C11.0302 4.00413 11.1039 4.1144 11.1968 4.20727C11.2897 4.30015 11.3999 4.3738 11.5213 4.42403C11.6426 4.47426 11.7727 4.50007 11.9041 4.5ZM4.90405 11.5C4.90413 11.3687 4.87831 11.2386 4.82808 11.1172C4.77786 10.9959 4.7042 10.8856 4.61133 10.7927C4.51845 10.6999 4.40818 10.6262 4.28682 10.576C4.16547 10.5257 4.0354 10.4999 3.90405 10.5H2.90405C2.63884 10.5 2.38448 10.6054 2.19695 10.7929C2.00941 10.9804 1.90405 11.2348 1.90405 11.5C1.90405 11.7652 2.00941 12.0196 2.19695 12.2071C2.38448 12.3946 2.63884 12.5 2.90405 12.5H3.90405C4.0354 12.5001 4.16547 12.4743 4.28682 12.424C4.40818 12.3738 4.51845 12.3001 4.61133 12.2073C4.7042 12.1144 4.77786 12.0041 4.82808 11.8828C4.87831 11.7614 4.90413 11.6313 4.90405 11.5ZM5.53979 16.4502L4.83279 17.1572C4.64528 17.3447 4.53993 17.599 4.53993 17.8642C4.53993 18.1294 4.64528 18.3837 4.83279 18.5713C5.02031 18.7588 5.27463 18.8641 5.53982 18.8641C5.80501 18.8641 6.05934 18.7588 6.24685 18.5713L6.95385 17.8643C7.14137 17.6767 7.24671 17.4224 7.24671 17.1572C7.24671 16.892 7.14137 16.6377 6.95385 16.4502C6.76634 16.2627 6.51201 16.1573 6.24682 16.1573C5.98164 16.1573 5.72731 16.2627 5.53979 16.4502ZM5.53979 6.5498C5.63264 6.64265 5.74287 6.7163 5.86418 6.76655C5.98549 6.8168 6.11552 6.84266 6.24682 6.84266C6.37813 6.84266 6.50815 6.8168 6.62946 6.76655C6.75078 6.7163 6.861 6.64265 6.95385 6.5498C7.0467 6.45695 7.12035 6.34672 7.1706 6.22541C7.22085 6.1041 7.24671 5.97408 7.24671 5.84277C7.24671 5.71146 7.22085 5.58144 7.1706 5.46013C7.12035 5.33882 7.0467 5.22859 6.95385 5.13574L6.24685 4.42874C6.05934 4.24122 5.80502 4.13587 5.53983 4.13586C5.27464 4.13586 5.02031 4.2412 4.83279 4.42871C4.64527 4.61622 4.53992 4.87055 4.53992 5.13573C4.53991 5.40092 4.64525 5.65525 4.83276 5.84277L5.53979 6.5498ZM17.5613 6.8428C17.6926 6.84295 17.8227 6.81714 17.944 6.76686C18.0654 6.71658 18.1756 6.64281 18.2683 6.5498L18.9753 5.8428C19.1628 5.65528 19.2681 5.40096 19.2681 5.13577C19.2681 4.87058 19.1628 4.61626 18.9753 4.42874C18.7878 4.24122 18.5334 4.13588 18.2683 4.13588C18.0031 4.13588 17.7487 4.24122 17.5612 4.42874L16.8542 5.13574C16.7144 5.27559 16.6192 5.45376 16.5806 5.64771C16.5421 5.84166 16.5619 6.0427 16.6375 6.22539C16.7132 6.40809 16.8414 6.56426 17.0058 6.67414C17.1702 6.78403 17.3635 6.8427 17.5612 6.84274L17.5613 6.8428ZM13.9041 12C13.904 12.1313 13.9298 12.2614 13.98 12.3828C14.0302 12.5041 14.1039 12.6144 14.1968 12.7073C14.2897 12.8001 14.3999 12.8738 14.5213 12.924C14.6426 12.9743 14.7727 13.0001 14.9041 13H19.9041C20.6994 12.9991 21.462 12.6828 22.0244 12.1204C22.5868 11.5579 22.9032 10.7954 22.9041 10C22.9041 9.73478 22.7987 9.48043 22.6112 9.29289C22.4236 9.10536 22.1693 9 21.9041 9C21.6388 9 21.3845 9.10536 21.1969 9.29289C21.0094 9.48043 20.9041 9.73478 20.9041 10C20.9006 10.2641 20.7941 10.5165 20.6073 10.7032C20.4205 10.89 20.1682 10.9965 19.9041 11H14.9041C14.7727 10.9999 14.6426 11.0257 14.5213 11.076C14.3999 11.1262 14.2897 11.1999 14.1968 11.2927C14.1039 11.3856 14.0302 11.4959 13.98 11.6172C13.9298 11.7386 13.904 11.8687 13.9041 12ZM20.9041 15H15.9041C15.6388 15 15.3845 15.1054 15.1969 15.2929C15.0094 15.4804 14.9041 15.7348 14.9041 16C14.9041 16.2652 15.0094 16.5196 15.1969 16.7071C15.3845 16.8946 15.6388 17 15.9041 17H20.9041C21.1693 17 21.4236 17.1054 21.6112 17.2929C21.7987 17.4804 21.9041 17.7348 21.9041 18C21.9041 18.2652 21.7987 18.5196 21.6112 18.7071C21.4236 18.8946 21.1693 19 20.9041 19C20.6388 19 20.3845 19.1054 20.1969 19.2929C20.0094 19.4804 19.9041 19.7348 19.9041 20C19.9041 20.2652 20.0094 20.5196 20.1969 20.7071C20.3845 20.8946 20.6388 21 20.9041 21C21.6997 21 22.4628 20.6839 23.0254 20.1213C23.588 19.5587 23.9041 18.7956 23.9041 18C23.9041 17.2044 23.588 16.4413 23.0254 15.8787C22.4628 15.3161 21.6997 15 20.9041 15ZM9.90405 19C9.70627 19 9.51293 19.0586 9.34848 19.1685C9.18403 19.2784 9.05586 19.4346 8.98017 19.6173C8.90449 19.8 8.88468 20.0011 8.92327 20.1951C8.96185 20.3891 9.05709 20.5673 9.19695 20.7071C9.3368 20.847 9.51498 20.9422 9.70896 20.9808C9.90294 21.0194 10.104 20.9996 10.2867 20.9239C10.4695 20.8482 10.6256 20.72 10.7355 20.5556C10.8454 20.3911 10.9041 20.1978 10.9041 20C10.9041 19.7348 10.7987 19.4804 10.6112 19.2929C10.4236 19.1054 10.1693 19 9.90405 19ZM15.9041 19H13.9041C13.6388 19 13.3845 19.1054 13.1969 19.2929C13.0094 19.4804 12.9041 19.7348 12.9041 20C12.9041 20.2652 13.0094 20.5196 13.1969 20.7071C13.3845 20.8946 13.6388 21 13.9041 21H15.9041C16.1682 21.0035 16.4205 21.11 16.6073 21.2968C16.7941 21.4835 16.9006 21.7359 16.9041 22C16.9041 22.2652 17.0094 22.5196 17.1969 22.7071C17.3845 22.8946 17.6388 23 17.9041 23C18.1693 23 18.4236 22.8946 18.6112 22.7071C18.7987 22.5196 18.9041 22.2652 18.9041 22C18.9032 21.2046 18.5868 20.4421 18.0244 19.8796C17.462 19.3172 16.6994 19.0009 15.9041 19ZM11.9041 15C10.9758 15 10.0856 14.6313 9.42918 13.9749C8.7728 13.3185 8.40405 12.4283 8.40405 11.5C8.40405 10.5717 8.7728 9.6815 9.42918 9.02513C10.0856 8.36875 10.9758 8 11.9041 8C12.7013 7.99492 13.4751 8.26888 14.0916 8.77441C14.1932 8.85764 14.3103 8.92001 14.4361 8.95797C14.5619 8.99592 14.694 9.00871 14.8247 8.99561C14.9555 8.98251 15.0823 8.94377 15.1981 8.88161C15.3139 8.81944 15.4163 8.73508 15.4994 8.63333C15.5825 8.53158 15.6448 8.41444 15.6827 8.28861C15.7205 8.16278 15.7332 8.03072 15.72 7.89998C15.7068 7.76925 15.668 7.6424 15.6057 7.52668C15.5434 7.41097 15.459 7.30865 15.3572 7.22559C14.3844 6.4266 13.1628 5.99303 11.9041 6C10.4454 6 9.04642 6.57946 8.01497 7.61091C6.98352 8.64236 6.40405 10.0413 6.40405 11.5C6.40405 12.9587 6.98352 14.3576 8.01497 15.3891C9.04642 16.4205 10.4454 17 11.9041 17C12.1693 17 12.4236 16.8946 12.6112 16.7071C12.7987 16.5196 12.9041 16.2652 12.9041 16C12.9041 15.7348 12.7987 15.4804 12.6112 15.2929C12.4236 15.1054 12.1693 15 11.9041 15Z" fill="#27046A" />
    </IconBase>
  );
};

export default Icon
