import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
// import Search from './components/Search';
// import Filter from './components/Filter';

function App() {
  return (

    <PlanetsProvider>
      {/* <Search /> */}
      {/* <Filter /> */}
      <Table />
    </PlanetsProvider>

  );
}

export default App;
