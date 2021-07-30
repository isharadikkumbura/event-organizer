import { primary, dark, light, success, danger } from './Colors';
import { css } from 'styled-components';
export const setType = ({ type }) => {
  console.log(type);
  switch (type) {
    case 'light':
      return css`
        background: ${light};
        color: #333;
      `;
    case 'danger':
      return css`
        background: ${danger};
        color: #fff;
      `;
    case 'dark':
      return css`
        background: ${dark};
        color: #fff;
      `;
    case 'white':
      return css`
        background: #fff;
        color: #333;
        border: #ccc solid 1px;
      `;
    case 'success':
      return css`
        background: ${success};
        color: #fff;
      `;
    case 'primary':
    default:
      return css`
        background: ${primary};
        color: #fff;
      `;
  }
};
