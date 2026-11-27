const url = 'https://pokeapi.co/api/v2/berry/?limit=69';
const options = {method: 'GET'};

let body = document.body;

async function getBerriesName() {
    try {
      // récupère les données et les met dans data
      const response = await fetch(url, options);
      const data = await response.json();
      
      // boucle pour afficher le nom des baies à l'écran
      data.results.forEach(element => {
        console.log(element.name);
        let p = document.createElement("p");
        body.append(p);
        p.append(element.name + " berry");
      });

    } catch (error) {
      console.error(error);
    }
}

getBerriesName();
