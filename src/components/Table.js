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
    order,
    orderASC } = useContext(PlanetsContext);

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
  const NEGATIVE = -1;
  const getPlanetsBy = (a, b) => {
    if (order.column === 'name') {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return NEGATIVE;
      }
      return 0;
    }
    if (orderASC === 'ASC') {
      // console.log(a);
      if (a[order.column] === 'unknown') {
        return 1;
      }
      if (b[order.column] === 'unknown') {
        return NEGATIVE;
      }
      return a[order.column] - b[order.column];
    } if (orderASC === 'DESC') {
      if (a[order.column] === 'unknown') {
        return 1;
      }
      if (b[order.column] === 'unknown') {
        return NEGATIVE;
      }
      return b[order.column] - a[order.column];
    }
    return 0;
  };

  useEffect(() => {
    let planetaFiltrado = planets;
    filterByNumericValues.forEach((filter) => {
      planetaFiltrado = planetaFiltrado.filter((planet) => {
        if (filter.comparison === 'maior que') {
          return Number(planet[filter.column]) > Number(filter.value);
        } if (filter.comparison === 'menor que') {
          return Number(planet[filter.column]) < Number(filter.value);
        } if (filter.comparison === 'igual a') {
          return Number(planet[filter.column]) === Number(filter.value);
        }
        return null;
      });
      console.log(planetaFiltrado);
      // setPlanets(planeta); // aqui eu estou setando os planetas já filtrados, antes dava um erro porque ele filtrava a partir do que original, agora ele filtra a partir dos já filtrados.
    });
    setPlanetsName(planetaFiltrado);
  }, [filterByNumericValues]);

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
        { planetsName
          .sort((a, b) => (
            getPlanetsBy(a, b)
          ))
          .map((planetsMap) => (
            <tr
              key={ planetsMap.name }
            >
              <td
                data-testid="planet-name"
              >
                { planetsMap.name }

              </td>
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
