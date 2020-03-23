import React from 'react';
import Header from './components/header';
import Overview from './components/overview';
import CountryView from './components/countryView';

function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <CountryView />
    </div>
  );
}

export default App;
