async function planetsAPI() {
  const response = await fetch('ttps://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  return data;
}
export default planetsAPI;
