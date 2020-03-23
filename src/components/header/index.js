/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import '../../App.css';

const headerCSS = css`
    background-color: #282c34;
    color: #61dafb;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 5px 10px;
`;

export default () => {
  return (<header css={headerCSS}> Corona Dashboard </header>);
};
