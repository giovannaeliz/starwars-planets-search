async function planetsAPI() {
  const response = await fetch('https://star-api-wars.herokuapp.com/');
  const data = await response.json();
  return data;
}
export default planetsAPI;
