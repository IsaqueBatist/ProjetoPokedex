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
          </div>
          <div class="stats">
            <h3>Stats</h3>
            <hr>
            <ol class="dados">
              <ol class="titles">
               <li>HP
               <li>Attack
               <li>Defense
               <li>special-attack
               <li>special-defense
               <li>Speed
              </ol>
              <ol class="itens">
               ${pokemon.stats.map((stats) => `<li>${stats}</li>`).join('')}
              </ol>
            </ol>
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