import { primary, dark, light, success, danger } from './Colors';
import { css } from 'styled-components';
export const setTextType = ({ type }) => {
  console.log(type);
  switch (type) {
    case 'light':
      return css`
        color: ${light};
      `;
    case 'danger':
      return css`
        color: ${danger};
      `;
    case 'dark':
      return css`
        color: ${dark};
      `;
    case 'white':
      return css`
        color: #fff;
        border: #ccc solid 1px;
      `;
    case 'success':
      return css`
        color: ${success};
      `;
    case 'primary':
    default:
      return css`
        color: ${primary};
      `;
  }
};
