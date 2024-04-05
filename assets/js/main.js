const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemontoli(pokemon){
    return `
    <li class=" pokemon ${pokemon.type}" >
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>

      <div class="details">
        <ol class="types">
          ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" 
        alt="${pokemon.name}">
      </div>
  </li>`
}

const pokemonList =  document.getElementById("pokemonList")

pokeAPI.getPokemons().then((pokemons = []) => { 
  pokemonList.innerHTML += pokemons.map(convertPokemontoli).join('') 

  /*for (let i=0; i < pokemons.length; i++){
      const pokemon = pokemons[i]
      listItens.push(convertPokemontoli(pokemons))
    }*/
  })  

 