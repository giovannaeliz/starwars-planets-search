/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const {
    planetsName,
    filterByNumericValues,
    planets,
    setPlanetsName,
    comparison } = useContext(PlanetsContext);

  const tablePlanets = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  useEffect(() => {
    filterByNumericValues.forEach((filter) => {
      if (filterByNumericValues > 0) {
        const planeta = planets.filter((planet) => {
          if (comparison === 'maior que') {
            return Number(planet[filter.column] > Number(filter.value));
          } if (comparison === 'menor que') {
            Number(planet[filter.column] < Number(filter.value));
          } if (comparison === 'igual a') {
            return Number(planet[filter.column] === Number(filter.value));
          }
          return null;
        });
        setPlanetsName(planeta);
      }
    });
  }, [filterByNumericValues, planets]);

  return (
    <table>
      <tbody>
        <tr>
          {tablePlanets.map((thead) => (
            <th key={ thead }>{thead}</th>
          ))}
        </tr>
      </tbody>
      <tfoot>
        { planetsName.map((planetsMap) => (
          <tr key={ planetsMap.name }>
            <td>{ planetsMap.name }</td>
            <td>{ planetsMap.rotation_period }</td>
            <td>{ planetsMap.orbital_period }</td>
            <td>{ planetsMap.diameter }</td>
            <td>{ planetsMap.climate }</td>
            <td>{ planetsMap.gravity }</td>
            <td>{ planetsMap.terrain }</td>
            <td>{ planetsMap.surface_water }</td>
            <td>{ planetsMap.population }</td>
            <td>{ planetsMap.films }</td>
            <td>{ planetsMap.created }</td>
            <td>{ planetsMap.edited }</td>
            <td>{ planetsMap.url }</td>
          </tr>
        )) }
      </tfoot>
    </table>
  );
}

Table.propTypes = {
  planets: PropTypes.object,
}.isRequired;

export default Table;
