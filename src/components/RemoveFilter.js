import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function RemoveFilter() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetsContext);

  function handleRemoveFilters(e) {
    setFilterByNumericValues(filterByNumericValues.filter((item) => item.column !== e));
  }
  // console.log(filterByNumericValues);

  return (
    <div>
      { filterByNumericValues.map((filters) => (
        <div
          data-testid="filter"
          key={ filters.column }
        >
          <p>{ filters.column }</p>
          <p>{ filters.comparison }</p>
          <p>{ filters.value }</p>
          <button
            type="button"
            onClick={ () => handleRemoveFilters(filters.column) }
          >
            X
          </button>
        </div>
      )) }
    </div>
  );
}
export default RemoveFilter;
