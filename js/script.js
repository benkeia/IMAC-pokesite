const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';
const options = {method: 'GET', };

async function fetchPokemon() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data.results.map((pokemon) => pokemon.name));
  } catch (error) {
    console.error(error);
  }
}

fetchPokemon();
