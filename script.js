import {pokemonArray} from './data/pokemon.js';

console.log(pokemonArray[0]);


function renderPokemonCard() {
    for(let i=0; i<pokemonArray.length; i++){
        return `<div class="card-container">
        <div class="card__img"> 
         <img src=${this.sprite} alt="${this.name} pokemon"/>
        </div>            
        <h3>${this.id}</h3>
                     <h2>${this.name}</h2>
                     <p>${this.types}</p>
           
                     </div>`;
         }

    }
    


const cardsContainer = document.querySelector(".card-container");
 cardsContainer.innerHTML = renderPokemonCard();

//   console.log(cardsContainer);
  console.log(pokemonArray.id);

pokemonArray.forEach (name =>{
    console.log(name);
})