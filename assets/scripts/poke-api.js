const pokeAPI = {
    
}

function convertPokeAPiDetailToPokemon(pokeDetail){

   
    const pokemon = new Pokemon(pokeDetail.id,pokeDetail.name,pokeDetail.types,
        pokeDetail.sprites.other.dream_world.front_default,pokeDetail.stats,
        pokeDetail.abilities,pokeDetail.weight,
        pokeDetail.height,pokeDetail.moves)
    

   
    return pokemon

}

pokeAPI.getPokemonDetail=(pokemon)=>{
    return fetch(pokemon.url)
    .then((response)=>response.json())
    .then(convertPokeAPiDetailToPokemon)
}

pokeAPI.getPokemons = (offset,limit)=>{
 
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

return fetch(url)
.then((response)=> response.json())
.then(jsonbody=> jsonbody.results)
.then(pokemons=>pokemons.map(pokeAPI.getPokemonDetail))
.then((detailRequests)=>Promise.all(detailRequests))
.then((pokemonDetails)=>pokemonDetails)


.catch((error)=>console.error(error))
}

