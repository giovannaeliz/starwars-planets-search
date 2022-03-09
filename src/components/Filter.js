import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { filterByName,
    setFilterByName,
    planets,
    setPlanetsName } = useContext(PlanetsContext);

  useEffect(() => {
    if (filterByName === '') {
      setPlanetsName(planets);
    } else {
      setPlanetsName(planets
        .filter((planet) => planet.name
          .toLowerCase()
          .includes(filterByName.name)));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByName, planets]);

  return (
    <div>
      <label htmlFor="name-filter">
        <input
          type="text"
          id="name-filter"
          data-testid="name-filter"
          value={ filterByName.name }
          onChange={ ({ target }) => setFilterByName({ name: target.value }) }
        />
      </label>
    </div>
  );
}

export default Filter;
