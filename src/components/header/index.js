/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const headerCSS = css`
  background-color: #282c34;
  color: #61dafb;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 5px 0px;
`;
const head = css`padding-left: 10px;`;

export default () => {
  return (<header css={headerCSS}><h3 css={head}>Corona Dashboard</h3></header>);
};
