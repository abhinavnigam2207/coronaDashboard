/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Loader from '../commons/loader';
import CountryTable from './countryTable';
import { Chart } from 'react-charts';
import PieChart from 'react-minimal-pie-chart';
import { getGraphData } from './service';

const p4 = css`padding: 4%;`;
const pt20 = css`padding: 20% 0% 10% 0%`
const marginAuto = css`margin: 0 auto;`;
const textCenter = css`text-align: center;`;
const container = css`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
`;
const chartContainer = css`
    height: 250px;
    width: 100%;
`;
const pieContainer = css`
    height: 250px;
    width: 250px;
    margin: 0 auto;
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
};


export default () => {
    const [selectedOption, setSelectedOption] = useState({
        value: 'India',
        label: 'India'
    });
    const [countryOptions, setCountryOptions] = useState({});
    const [countriesData, setCountriesData] = useState({});
    const [historicalData, setHistoricalData] = useState({});
    const series = React.useMemo(() => ({ showPoints: false }), []);
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom', show: false },
            { type: 'linear', position: 'left' }
        ],[]
    )

    const getHistoricalData = async (country) => {
        const resp = await fetch(`https://corona.lmao.ninja/historical/${country}`);
        const response = await resp.json();
        const historyData = getGraphData(response.timeline);
        setHistoricalData(historyData);
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        getHistoricalData(selectedOption.value);
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
            getHistoricalData(selectedOption.value);
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
                        <hr />
                        <div css={p4}>
                            <h3 css={textCenter}>Country Statistics</h3>
                            <CountryTable countriesData={countriesData} selection={selectedOption.value} />
                        </div>
                        <hr />
                        <div css={p4}>
                            {historicalData.length 
                                ? (
                                    <React.Fragment>
                                        {historicalData[0].data.length
                                            ? (
                                                <div css={chartContainer}>
                                                    <h3 css={textCenter}>Timeline</h3>
                                                    <Chart
                                                        data={historicalData}
                                                        series={series}
                                                        axes={axes}
                                                        tooltip
                                                    />
                                                </div>
                                            ) : null}
                                    </React.Fragment>                                    
                                )
                                : <Loader />}
                        </div>
                        <hr />
                        <div css={p4}>
                            <div css={pieContainer}>
                                <h3 css={textCenter}>Pie Chart</h3>
                                <PieChart
                                    label={true}
                                    labelStyle={{fill:'white', fontSize: '5px'}}
                                    labelPosition={80}
                                    animate={true}
                                    background={'grey'}
                                    animationDuration={500}
                                    data={[
                                        { title: 'Active', value: countriesData[selectedOption.value].active, color: '#007ED6' },
                                        { title: 'Recovered', value: countriesData[selectedOption.value].recovered, color: '#77DD77' },
                                        { title: 'Deaths', value: countriesData[selectedOption.value].deaths, color: '#F13C59' },
                                    ]}
                                />
                            </div>
                        </div>
                    </React.Fragment>
                )
                : <div css={pt20}><Loader/></div>}
        </div>
    );
};
