import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import Filter from './components/Filter';
import NumberFilter from './components/NumberFilter';

function App() {
  return (

    <PlanetsProvider>
      <NumberFilter />
      <Filter />
      <Table />
    </PlanetsProvider>

  );
}

export default App;
