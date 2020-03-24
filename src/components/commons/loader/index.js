/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

const spin = keyframes`
    from, 0%, to { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`
const loaderCSS = css`
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid #3498db;
    width: 30px;
    height: 30px;
    -webkit-animation: ${spin} 1s linear infinite;
    animation: ${spin} 1s linear infinite;
    margin: 0 auto;
`;


export default () => (<div css={loaderCSS}></div>)