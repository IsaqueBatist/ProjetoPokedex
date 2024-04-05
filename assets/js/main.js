const pokemonList =  document.getElementById("pokemonList")
const loadMoreButton = document.getElementById('loadmorebutton')
const maxRecords = 151
function loadPokemonItens(offset, limit){
   pokeAPI.getPokemons(offset, limit).then((pokemons = []) => { 
    const  newhtml = pokemons.map((pokemon) => `
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
      </li>
  `).join('')
    pokemonList.innerHTML += newhtml
  })}
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit
    if (qtdRecordNextPage >= maxRecords){
      const newLimit = maxRecords - offset
      loadPokemonItens(offset,newLimit)
      loadMoreButton.parentElement.removeChild(loadMoreButton)
      
    }else {
      loadPokemonItens(offset,limit)
    }
   
  })