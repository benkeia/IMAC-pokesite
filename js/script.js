const url = 'https://pokeapi.co/api/v2/pokemon/';
const options = {method: 'GET', };

async function fetchPokemon() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchPokemon();

