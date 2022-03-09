// import React from 'react';
// // import PlanetsContext from '../context/PlanetsContext';

// function NumberFilter() {
//   return (
//     <div>
//       <select
//         value={ column }
//         onChange={ ({ target }) => setColumn({ name: target.value }) }
//         name="select"
//         id="select"
//         data-testid="column-filter"
//       >
//         <option value="population">Population</option>
//         <option value="orbital-period">Orbital-period</option>
//         <option value="diameter">Diameter</option>
//         <option value="rotation_period">Rotation-period</option>
//         <option value="surface_water">Surface-water</option>
//       </select>
//       <select
//         value={ comparison }
//         onChange={ ({ target }) => setComparison({ name: target.value }) }
//         name="operador"
//         id="operador"
//         data-testid="comparison-filter"
//       >
//         <option value="maior-que">maior que</option>
//         <option value="menor-que">menor que</option>
//         <option value="igual-a">igual a</option>
//       </select>
//       <label htmlFor="selectNumber">
//         <input
//           value={ value }
//           onChange={ ({ target }) => setValue({ name: target.value }) }
//           id="selectNumber"
//           type="number"
//           data-testid="value-filter"
//           placeholder="select value"
//         />
//       </label>
//       <button
//         onClick={ handleClick }
//         type="button"
//         data-testid="button-filter"
//       >
//         FILTRAR
//       </button>
//     </div>
//   );
// }

// export default NumberFilter;
