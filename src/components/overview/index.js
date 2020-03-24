/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useEffect } from 'react';
import Loader from '../commons/loader';

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
    border-radius: 5px;
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
                {overview && overview.cases
                    ? (<React.Fragment>
                            <div>Confirmed</div> 
                            <div>{overview.cases}</div>
                        </React.Fragment>)
                    : <Loader />}
            </div>
            <div css={item}>
                {overview && overview.deaths
                    ? (<React.Fragment>
                            <div>Deaths</div> 
                            <div>{overview.deaths}</div>
                        </React.Fragment>)
                    : <Loader />}
            </div>
            <div css={item}>
                {overview && overview.recovered
                    ? (<React.Fragment>
                            <div>Recovered</div> 
                            <div>{overview.recovered}</div>
                        </React.Fragment>)
                    : <Loader />}
            </div>
        </div>
    );
};
