/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'

const TH = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;
const TD = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;
const bgGrey = css`background-color: #dddddd;`;
const bold = css`font-weight: 600;`;
const textCenter = css`text-align: center;`;
const tableCSS = css`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;
const flag = css`
    width: 40px;
    height: 25px;
`;
export default ({countriesData, selection}) => (
    <table css={tableCSS}>
        <thead>
            <tr>
                <TH css={textCenter}>{selection}</TH>
                <TH css={textCenter}><img css={flag} src={countriesData[selection].countryInfo.flag} /></TH>
            </tr>
        </thead>
        <tbody>
            <tr>
                <TD>Cases Today</TD>
                <TD>{countriesData[selection].todayCases}</TD>
            </tr>
            <tr css={bgGrey}>
                <TD>Deaths Today</TD>
                <TD>{countriesData[selection].todayDeaths}</TD>
            </tr>
            <tr>
                <TD>Recovered</TD>
                <TD>{countriesData[selection].recovered}</TD>
            </tr>
            <tr css={bgGrey}>
                <TD>Active</TD>
                <TD>{countriesData[selection].active}</TD>
            </tr>
            <tr>
                <TD>Total Deaths</TD>
                <TD>{countriesData[selection].deaths}</TD>
            </tr>
            <tr css={[bgGrey, bold]}>
                <TD>Total Cases</TD>
                <TD>{countriesData[selection].cases}</TD>
            </tr>
        </tbody>
    </table>
);