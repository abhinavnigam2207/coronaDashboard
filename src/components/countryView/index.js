/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useState, useEffect } from 'react';
import Select from 'react-select';

const container = css`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
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
            setCountriesData(response);
            const countries = response.map((key)=>{return {
                value: key.country,
                label: key.country
            }});
            setCountryOptions(countries);
        }
        getCountries()
    }, []);

    return (
        <div css={container}>
            <div>
                <Select
                    styles={customStyles}
                    value={selectedOption}
                    onChange={handleChange}
                    options={countryOptions}
                />
            </div>
            <div>
                {countriesData && countriesData.length
                    ? (
                        <div>
                            Cases:
                            {countriesData.filter((key)=>(key.country===selectedOption.value))[0].cases}
                        </div>
                    )
                    : null}
            </div>
        </div>
    );
};
