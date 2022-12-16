

import React from 'react';

import IconBase, {IconProps} from '../icon';


const Icon:React.FC<IconProps> = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M6.00001 6C6.00001 5.20435 6.31608 4.44129 6.87869 3.87868C7.4413 3.31607 8.20436 3 9.00001 3H15C15.7957 3 16.5587 3.31607 17.1213 3.87868C17.6839 4.44129 18 5.20435 18 6V18C18 18.7956 17.6839 19.5587 17.1213 20.1213C16.5587 20.6839 15.7957 21 15 21H9.00001C8.20436 21 7.4413 20.6839 6.87869 20.1213C6.31608 19.5587 6.00001 18.7956 6.00001 18V6ZM13.5 16.5C13.5 16.1022 13.342 15.7206 13.0607 15.4393C12.7794 15.158 12.3978 15 12 15C11.6022 15 11.2207 15.158 10.9394 15.4393C10.658 15.7206 10.5 16.1022 10.5 16.5C10.5 16.8978 10.658 17.2794 10.9394 17.5607C11.2207 17.842 11.6022 18 12 18C12.3978 18 12.7794 17.842 13.0607 17.5607C13.342 17.2794 13.5 16.8978 13.5 16.5ZM2.71051 7.101C2.8036 6.92516 2.82303 6.71954 2.76452 6.52938C2.70601 6.33922 2.57435 6.18009 2.39851 6.087C2.22267 5.99391 2.01706 5.97448 1.8269 6.03299C1.63673 6.09151 1.4776 6.22316 1.38451 6.399C0.472491 8.1249 -0.00286173 10.0479 1.29613e-05 12C1.29613e-05 14.0205 0.501013 15.927 1.38451 17.601C1.43061 17.6881 1.4934 17.7652 1.5693 17.828C1.64521 17.8908 1.73274 17.938 1.8269 17.967C1.92105 17.996 2.02 18.0061 2.11808 17.9969C2.21615 17.9876 2.31145 17.9591 2.39851 17.913C2.48558 17.8669 2.56271 17.8041 2.62551 17.7282C2.68831 17.6523 2.73555 17.5648 2.76452 17.4706C2.79349 17.3765 2.80363 17.2775 2.79437 17.1794C2.7851 17.0814 2.75661 16.9861 2.71051 16.899C1.91288 15.3894 1.49726 13.7074 1.50001 12C1.50001 10.23 1.93801 8.562 2.71051 7.101ZM22.6155 6.399C22.5224 6.22316 22.3633 6.09151 22.1731 6.03299C21.983 5.97448 21.7774 5.99391 21.6015 6.087C21.4257 6.18009 21.294 6.33922 21.2355 6.52938C21.177 6.71954 21.1964 6.92516 21.2895 7.101C22.062 8.562 22.5 10.2285 22.5 12C22.5 13.77 22.062 15.438 21.2895 16.899C21.1964 17.0748 21.177 17.2805 21.2355 17.4706C21.294 17.6608 21.4257 17.8199 21.6015 17.913C21.7774 18.0061 21.983 18.0255 22.1731 17.967C22.3633 17.9085 22.5224 17.7768 22.6155 17.601C23.5275 15.8751 24.0029 13.9521 24 12C24.0029 10.0479 23.5275 8.1249 22.6155 6.399ZM5.01001 9.273C5.05187 9.1803 5.07443 9.08005 5.07633 8.97835C5.07823 8.87666 5.05942 8.77564 5.02105 8.68144C4.98268 8.58724 4.92555 8.50183 4.85314 8.4304C4.78072 8.35897 4.69454 8.30302 4.59982 8.26595C4.5051 8.22888 4.40383 8.21146 4.30217 8.21475C4.20051 8.21805 4.10058 8.24199 4.00846 8.28511C3.91635 8.32824 3.83396 8.38965 3.76632 8.46562C3.69868 8.54158 3.6472 8.63051 3.61501 8.727C3.20771 9.77011 2.99913 10.8802 3.00001 12C3.00001 13.1535 3.21751 14.2575 3.61501 15.273C3.6472 15.3695 3.69868 15.4584 3.76632 15.5344C3.83396 15.6103 3.91635 15.6718 4.00846 15.7149C4.10058 15.758 4.20051 15.782 4.30217 15.7852C4.40383 15.7885 4.5051 15.7711 4.59982 15.734C4.69454 15.697 4.78072 15.641 4.85314 15.5696C4.92555 15.4982 4.98268 15.4128 5.02105 15.3186C5.05942 15.2244 5.07823 15.1233 5.07633 15.0216C5.07443 14.92 5.05187 14.8197 5.01001 14.727C4.67143 13.8578 4.49846 12.9329 4.50001 12C4.50001 11.037 4.68001 10.1175 5.01001 9.273ZM20.385 8.727C20.3059 8.55175 20.1625 8.41359 19.9844 8.34105C19.8063 8.26851 19.6072 8.26715 19.4281 8.33723C19.249 8.40731 19.1037 8.54349 19.0222 8.71764C18.9407 8.89179 18.9292 9.0906 18.99 9.273C19.32 10.1175 19.5 11.037 19.5 12C19.5 12.963 19.32 13.8825 18.99 14.727C18.9292 14.9094 18.9407 15.1082 19.0222 15.2824C19.1037 15.4565 19.249 15.5927 19.4281 15.6628C19.6072 15.7329 19.8063 15.7315 19.9844 15.659C20.1625 15.5864 20.3059 15.4483 20.385 15.273C20.784 14.2575 21 13.1535 21 12C21 10.8465 20.7825 9.7425 20.385 8.727Z" fill="black" />
    </IconBase>
  );
};

export default Icon
