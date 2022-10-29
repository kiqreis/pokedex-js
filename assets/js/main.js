// const offset = 0
// const limit = 10
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// function convertPokemonTypesToList(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5
let offset = 0




function loadPokemonItems(offset, limit) {
    pokeapi.getpokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>


            <div class="detail">

                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>`
        ).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItems(offset, limit)
})




    //.catch((err) => console.error(err))



