/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Loader from '../commons/loader';

const TH = styled.td`
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
const p4 = css`padding: 4%;`;
const marginAuto = css`margin: 0 auto;`;
const textCenter = css`text-align: center;`;
const container = css`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
`;
const tableCSS = css`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
`;
const flag = css`
    width: 40px;
    height: 25px;
`;

const customStyles = {
    container: (provided) => ({
        ...provided,
        width: '150px'
    }),
    option: (provided) => ({
      ...provided,
      textAlign: 'left',
    })
  }

export default () => {
    const [selectedOption, setSelectedOption] = useState({
        value: 'India',
        label: 'India'
    });
    const [countryOptions, setCountryOptions] = useState({});
    const [countriesData, setCountriesData] = useState({});

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    useEffect(() => {
        async function getCountries() {
            const resp = await fetch('https://corona.lmao.ninja/countries');
            const response = await resp.json();
            const countryData = {};
            response.forEach(key => { countryData[key.country]= key; });
            setCountriesData(countryData);
            const countries = response.map((key)=>({
                value: key.country,
                label: key.country
            }));
            setCountryOptions(countries);
        }
        getCountries()
    }, []);

    return (
        <div css={container}>
            {Object.keys(countriesData).length
                ? (
                    <React.Fragment>
                        <div css={marginAuto}>
                            <Select
                                styles={customStyles}
                                value={selectedOption}
                                onChange={handleChange}
                                options={countryOptions}
                            />
                        </div>
                        <div css={p4}>
                            <table css={tableCSS}>
                                <tr>
                                    <TH css={textCenter}>{selectedOption.value}</TH>
                                    <TH css={textCenter}><img css={flag} src={countriesData[selectedOption.value].countryInfo.flag} /></TH>
                                </tr>
                                <tr>
                                    <TD>Cases Today</TD>
                                    <TD>{countriesData[selectedOption.value].todayCases}</TD>
                                </tr>
                                <tr css={bgGrey}>
                                    <TD>Deaths Today</TD>
                                    <TD>{countriesData[selectedOption.value].todayDeaths}</TD>
                                </tr>
                                <tr>
                                    <TD>Recovered</TD>
                                    <TD>{countriesData[selectedOption.value].recovered}</TD>
                                </tr>
                                <tr css={bgGrey}>
                                    <TD>Active</TD>
                                    <TD>{countriesData[selectedOption.value].active}</TD>
                                </tr>
                                <tr>
                                    <TD>Total Deaths</TD>
                                    <TD>{countriesData[selectedOption.value].deaths}</TD>
                                </tr>
                                <tr css={[bgGrey, bold]}>
                                    <TD>Total Cases</TD>
                                    <TD>{countriesData[selectedOption.value].cases}</TD>
                                </tr>
                            </table>
                        </div>
                    </React.Fragment>
                )
                : <Loader/>}
        </div>
    );
};
