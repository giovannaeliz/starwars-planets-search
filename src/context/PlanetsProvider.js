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
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [comparison, setComparison] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [value, setValue] = useState('0');
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [orderColumn, setOrderColumn] = useState('population');
  const [orderASC, setOrderASC] = useState('ASC');
  //  column: 'population', sort: 'ASC'
  useEffect(() => {
    const API = async () => {
      const resultsAPI = await planetsAPI();
      setPlanets(resultsAPI.results);
    };
    API();
  }, []);

  const values = {
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
    comparison,
    setComparison,
    column,
    setColumn,
    value,
    setValue,
    order,
    setOrder,
    orderColumn,
    setOrderColumn,
    orderASC,
    setOrderASC,
  };

  return (
    <PlanetsContext.Provider value={ values }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetsProvider;
