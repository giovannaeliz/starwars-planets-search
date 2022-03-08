import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { table } = useContext(PlanetsContext);
  const tablePlanets = [
    'Name',
    'Rotation Period',
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

  return (
    <table>
      <thead>
        <tr>
          {tablePlanets.map((thead) => (
            <th key={ thead }>{thead}</th>
          ))}
        </tr>
      </thead>
      <hbody>
        { table.map((planets) => (
          <tr key={ planets.name }>
            <td>{ planets.name }</td>
            <td>{ planets.rotation_period }</td>
            <td>{ planets.orbital_period }</td>
            <td>{ planets.diameter }</td>
            <td>{ planets.climate }</td>
            <td>{ planets.gravity }</td>
            <td>{ planets.terrain }</td>
            <td>{ planets.surface_water }</td>
            <td>{ planets.population }</td>
            <td>{ planets.films }</td>
            <td>{ planets.created }</td>
            <td>{ planets.edited }</td>
            <td>{ planets.url }</td>
          </tr>
        )) }
      </hbody>
    </table>
  );
}

Table.propTypes = {
  table: PropTypes.object,
}.isRequired;

export default Table;
