/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import style from '../../App.css';
import React, { useState, useEffect } from 'react';
import Loader from '../commons/loader';
import DataTable from 'react-data-table-component';
const container = css`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;
const loaderContainer = css`margin: 30% auto;`;
const tableStyle = {
  maxHeight: '450px',
  overflowY: 'scroll',
  overflowX: 'hidden'
};
const columns = [
  {
    name: 'State',
    selector: 'state',
    sortable: true,
    left: true,
    width: '30%'
  },
  {
    name: 'Confirmed',
    selector: 'confirmed',
    sortable: true,
    center: true,
    width: '15%'
  },
  {
    name: 'Active',
    selector: 'active',
    sortable: true,
    center: true,
    width: '15%'
  },
  {
    name: 'Recovered',
    selector: 'recovered',
    sortable: true,
    center: true,
    width: '15%'
  },
  {
    name: 'Deaths',
    selector: 'deaths',
    sortable: true,
    center: true,
    width: '15%'
  }
];

const customStyles = { rows: { style: { height: '30px', minHeight: '30px' } } }

export default () => {
    const [isLoading, setLoading] = useState(false);
    // const [allData, setAllData] = useState({});
    const [stateWiseData, setStateWiseData] = useState({});
    // const [statesObj, setStatesData] = useState({});


    useEffect(() => {
        async function fetchIndiaData() {
          setLoading(true)
          const resp = await fetch('https://api.covid19india.org/data.json');
          const response = await resp.json();
          setLoading(false);
          // const stateData = {};
          // response.statewise.forEach(key => { stateData[key.state]= key; });
          // setStatesData(stateData);
          // setAllData(response);
          setStateWiseData(response.statewise);
        }
        fetchIndiaData()
    }, []);

    return (
      <React.Fragment>
        {isLoading
          ? <div css={loaderContainer}><Loader /></div>
          : (
            <div css={container}>
              <DataTable
                title="India State-Wise Data"
                columns={columns}
                data={stateWiseData}
                striped
                highlightOnHover
                responsive
                customStyles={customStyles}
                style={tableStyle}
              />
            </div>
          )}
      </React.Fragment>
    );
};
