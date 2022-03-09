import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import planetsAPI from '../service/planetsAPI';
import PlanetsContext from './PlanetsContext';
// fiz esse código com a ajuda da mentoria do Samuel

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState('');
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [planetsName, setPlanetsName] = useState(planets);
  const [filterByNumericValues,
    setFilterByNumericValues] = useState([{
    column: 'population',
    comparison: 'maior que',
    value: '100000' }]);

  useEffect(() => {
    const API = async () => {
      const resultsAPI = await planetsAPI();
      setPlanets(resultsAPI.results);
    };
    API();
  }, []);

  const value = {
    planets,
    setPlanets,
    filter,
    setFilter,
    filterByName,
    setFilterByName,
    planetsName,
    setPlanetsName,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <PlanetsContext.Provider value={ value }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
