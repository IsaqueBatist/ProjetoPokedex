let offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const pokeAPI = {}

function convertPokeApiDetailToPokemon(pokemonDetail){
  const pokemon = new Pokemon()
  pokemon.name = pokemonDetail.name
  pokemon.number = pokemonDetail.id

  const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types

  pokemon.types = types
  pokemon.type = type

  pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default
  const status = pokemonDetail.stats.map((stats) => stats.base_stat)
 
  pokemon.stats = status
  
  return pokemon
}

pokeAPI.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url)
  .then((response) => response.json())
  .then(convertPokeApiDetailToPokemon)
}

pokeAPI.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then ((pokemonDetails) => pokemonDetails)
  }



