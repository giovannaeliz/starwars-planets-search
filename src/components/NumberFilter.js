/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import OrderFilter from './OrderFilter';

function NumberFilter() {
  const {
    setFilterByNumericValues,
    comparison,
    setComparison,
    column,
    setColumn,
    value,
    setValue,
    filterByNumericValues,
  } = useContext(PlanetsContext);
  const COLUMNOPTIONS = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleClick = () => {
    setFilterByNumericValues((prevState) => ([
      ...prevState,
      {
        column, comparison, value,
      },
    ]));
  };

  return (
    <div>
      <select
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        name="select"
        id="select"
        data-testid="column-filter"
      >
        {
          COLUMNOPTIONS.filter((columnName) => {
            let isTrue = true;
            filterByNumericValues.forEach((filter) => {
              if (filter.column === columnName) {
                isTrue = false;
                // se a column selecionada for igual a column do filtro COLUMNOPTIONS, então muda para false(deletando)
              }
            });
            return isTrue;
          })
            .map((option) => (
              <option
                value={ option }
                key={ option }
              >
                { option }

              </option>))
        }
      </select>
      <select
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        name="operador"
        id="operador"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="selectNumber">
        <input
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
          id="selectNumber"
          type="number"
          data-testid="value-filter"
          placeholder="select value"
        />
      </label>
      <button
        onClick={ handleClick }
        type="button"
        data-testid="button-filter"
      >
        FILTRAR
      </button>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilterByNumericValues([]) }
      >
        REMOVER FILTROS
      </button>
      <OrderFilter />
    </div>
  );
}

export default NumberFilter;
