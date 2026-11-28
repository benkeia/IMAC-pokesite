const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
const options = {method: 'GET', };

let pokemonList = document.querySelector(".pokemon-container");

async function fetchPokemon() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);
    
    // boucle pour afficher le nom des pokémons à l'écran
    for(const element of data.results){
      const new_response = await fetch(element.url, options);
      const pkmn_data = await new_response.json();
      
      pokemonList.innerHTML += `
      <div class='pokemon'>
      <p class='pokedex-number'>${pkmn_data.id}</p>
      <p class='pokemon-name'>${pkmn_data.name}</p>
      </div>
      `;
    }
    
    console.log(pokemonList);
  } catch (error) {
    console.error(error);
  }
}

fetchPokemon();
