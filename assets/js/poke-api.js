const pokeAPI = {}

pokeAPI.getPokemonsDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json())
}

pokeAPI.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeAPI.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then ((pokemonDetails) => pokemonDetails)
    }



