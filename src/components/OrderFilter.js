/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function OrderFilter() {
  const { order,
    setOrder,
    planets,
    setPlanetsName } = useContext(PlanetsContext);
  const [orderColumn, setOrderColumn] = useState('population');
  const [orderASC, setOrderASC] = useState('ASC');

  const COLUMNOPTIONS2 = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const getPlanetsBy = () => {
    planets.sort((a, b) => {
      if (orderASC === 'ASC') {
        return a[order.column] - b[order.column];
      } if (orderASC === 'DESC') {
        return b[order.column] - a[order.column];
      }
      return 0;
    });
    // setAttribute('data-testid', 'planet-name') serve pra colocar o atributo?;
    setPlanetsName(planets);
  };
  const handleButton = () => {
    setOrder(() => (
      {
        column: orderColumn,
        sort: orderASC,
      }
    ));
    getPlanetsBy();
  };
  return (
    <form>
      <label htmlFor="column">
        <select
          data-testid="column-sort"
          id="column"
          name="column"
          value={ orderColumn }
          onChange={ ({ target }) => setOrderColumn(target.value) }
        >
          { COLUMNOPTIONS2.map((options) => (
            <option key={ options }>
              { options }
            </option>
          )) }
        </select>
      </label>
      <label htmlFor="ASC">
        <input
          type="radio"
          id="ASC"
          name="ASC"
          value="ASC"
          data-testid="column-sort-input-asc"
          checked={ orderASC === 'ASC' }
          onChange={ ({ target }) => setOrderASC(target.value) }
        />
        <span>Ascendente</span>
      </label>
      <label htmlFor="DESC">
        <input
          type="radio"
          id="DESC"
          name="DESC"
          value="DESC"
          data-testid="column-sort-input-desc"
          checked={ orderASC === 'DESC' }
          onChange={ ({ target }) => setOrderASC(target.value) }
        />
        <span>Descendente</span>
      </label>

      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleButton }
      >
        ORDENAR
      </button>
    </form>
  );
}

export default OrderFilter;
