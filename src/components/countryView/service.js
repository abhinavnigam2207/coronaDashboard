export const getGraphData = (resp) => {
    let cases = [], deaths = [], recovered = [];
    Object.entries(resp.cases).forEach((key, i) => {
        cases.push([i, key[1]]);
    });
    Object.entries(resp.deaths).forEach((key, i) => {
        deaths.push([i, key[1]]);
    });
    Object.entries(resp.recovered).forEach((key, i) => {
        recovered.push([i, key[1]]);
    });
    return [
        {
            label: 'Cases',
            data: cases
        },
        {
            label: 'Recovered',
            data: recovered
        },
        {
            label: 'Deaths',
            data: deaths
        }
    ];
}