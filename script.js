import { pokemonArray } from "./data/pokemon.js";

console.log(pokemonArray[0].name);

function renderPokemonCard() {
  for (let i = 0; i < pokemonArray.length; i++) {
    const id = pokemonArray[i].id;
    const name = pokemonArray[i].name;
    const types = pokemonArray[i].types;
    const img = pokemonArray[i].sprite;

    const card = `<div class="card-container">
        <div class="card__image"> 
         <img src=${img} alt="${name} pokemon"/>
        </div>            
        <h3>${id}</h3>
                     <h2>${name}</h2>
                     <p>${types}</p>
           
                     </div>`;

    document.querySelector(".card-container").innerHTML = card;
  }
}

// const cardsContainer = document.querySelector(".card-container");
//  cardsContainer.innerHTML = renderPokemonCard();

renderPokemonCard();
