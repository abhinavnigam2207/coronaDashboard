/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useEffect } from 'react';

const container = css`
    padding: 20px 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
`;

const item = css`
    background: grey;
    color: white;
    text-align: center;
    padding: 5%;
    font-size: 14px;
    margin: 2%;
    width: 100%;
`;

export default () => {
    const [overview, setOverview] = useState({});

    useEffect(() => {
        async function getOverview() {
            const resp = await fetch('https://corona.lmao.ninja/all');
            const response = await resp.json();
            setOverview(response);
        }
        getOverview()
      }, []);

    return (
        <div css={container}>
            <div css={item}>
                Confirmed :
                {overview && overview.cases
                    ? (<span>{overview.cases}</span>)
                    : null}
            </div>
            <div css={item}>
                Deaths :
                {overview && overview.deaths
                    ? (<span>{overview.deaths}</span>)
                    : null}
            </div>
            <div css={item}>
                Recovered :
                {overview && overview.recovered
                    ? (<span>{overview.recovered}</span>)
                    : null}
            </div>
        </div>
    );
};
