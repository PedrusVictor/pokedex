

const pokemonOl = document.getElementById("pokemonList")

const loadMoreButton = document.getElementById("loadMoreButton")

const limit = 5;
let offset = 0;
let quantidade =limit;
let pkmList=[]
function ShowPanelInfo(pkms){
    const pkInfo = document.querySelector(".pokeInfo")
    const btnHidden = document.querySelector("#btnhiddenInfo")
    pkmList=[...pkmList,...pkms]
    console.log(pkms)
    pkmList.forEach(pokemon=>{
       
        const id = `#id${pokemon.number}`
        const pkm = document.querySelector(id)
        
        
        pkm.addEventListener("click",()=>{

    
        
            if(pkInfo.classList.contains("disable")){

                //colocando as informações
                const pkimg= document.querySelector("#pkImg")
                pkimg.src = pokemon.photo

                const name=document.querySelector("#namePanel")
                name.textContent = pokemon.name;

                const types= document.querySelector("#typePanel")
               types.textContent = pokemon.types.map(t=>t).join(" ")
               types.classList = `type ${pokemon.type}`

                const weight = document.querySelector("#weight")
                
                weight.textContent = pokemon.weight
                const height =  document.querySelector("#height")
                height.textContent = pokemon.height
                
                const abilities =  document.querySelector("#abilities")
                
                abilities.textContent = pokemon.abilities

                const hp = document.querySelector("#hp")
                hp.textContent = pokemon.stats.hp
                const atk = document.querySelector("#atk")
                atk.textContent = pokemon.stats.atk
                
                const def = document.querySelector("#def")
                def.textContent = pokemon.stats.def

                const spattack = document.querySelector("#spatk")
                spattack.textContent = pokemon.stats.spatk

                const spdef = document.querySelector("#spdef")
                spdef.textContent = pokemon.stats.spdef

                const speed = document.querySelector("#speed")
                speed.textContent = pokemon.stats.speed
                
                const total = document.querySelector("#total")
                
                total.textContent = pokemon.stats.total



                const moves = document.querySelector("#moves")
                moves.textContent = pokemon.moves

                pkInfo.classList.remove("disable")
                pkInfo.classList = `pokeInfo ${pokemon.type}`
            }
        })
    })
   
    btnHidden.addEventListener("click",()=>pkInfo.classList.add("disable"))
   
}


function loadPokemonItens(offset, limit) {
   


    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
       
        
        const newHtml =pokemons.map((pokemon) => ` <li class="pokemon ${pokemon.type}" id=id${pokemon.number}>
            <span class="number">${pokemon.number} </span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">

                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src=${pokemon.photo}
                alt=${pokemon.name}>
            </div>
            

        </li>`
        
         
        ).join('')
        pokemonOl.innerHTML += newHtml;
        return pokemons
    })
    .then((pk)=>ShowPanelInfo(pk))
    .catch((error) => console.error(error))
       
        
}


loadPokemonItens(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset+=limit
    quantidade=limit+quantidade
    if(quantidade>151){
        const valor = quantidade-151
        offset-=valor
        loadMoreButton.remove()
    }
    loadPokemonItens(offset,limit)


})

const infogroup = document.querySelectorAll(".navbar")

function navBar(valor){

    infogroup.forEach(nav=>{
        

           
                if(nav.id!==valor){
                    nav.classList.add("disable")
                }else if(nav.classList.contains("disable")){
                    nav.classList.remove("disable")
                    
                }
        
    })
}


