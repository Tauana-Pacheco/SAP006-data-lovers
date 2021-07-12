import { filterData, sortData, average } from './data.js';
import data from './data/pokemon/pokemon.js';


let finalArray = 20;
const POKEMONS = data.pokemon;
let filteredPokemons = POKEMONS;
average(POKEMONS);
show(POKEMONS.slice(0, finalArray))


function show(itens) {
  document.getElementById("listaPokemon").innerHTML = "";
  for (let pokemon of itens) {

    const card = `
    <section  id = "card" class ="card-container">
      <div class="thecard">
        <div class="card-front">
          <div class = "title">
            <p id = "namePok"> ${pokemon.name}</p>
            <p id = "num"> ${pokemon.num}</p>
          </div>
          <img id = "img" src = "${pokemon.img}">
          <div class = "tipos">
            <p class= "types-pokemon"> ${pokemon.type} </p>
          </div>
        </div>

        <div class="card-back">
          <div class = "infos">
            <p class= "test" >${pokemon.generation["num"]} </p>
            <p class= "numbers">Altura ${pokemon.size["height"]} </p>
            <p class= "numbers">Peso ${pokemon.size["weight"]} </p>
            <p class= "numbers"><i class="far fa-signal-alt"></i> Media stats ${pokemon.stats["medCal"]} </p>
          </div>
        </div>
      </div>
    </section>`
    document.getElementById("listaPokemon").innerHTML += card
    
  }
}

const type = document.getElementById('type');

type.addEventListener("change", function () {
  filteredPokemons = POKEMONS;

  if (type.value !== "") {
    filteredPokemons = filterData(filteredPokemons, type.value)
  }
  show(filteredPokemons);
});


const order = document.getElementById('order');

order.addEventListener("change", function (e) {
  e.preventDefault();

  const orderValues = order.value.split("/");
  const sortnames = sortData(filteredPokemons, orderValues[0], orderValues[1]);
  show(sortnames);
});


const buscaData = function (data, search) {
  const pokSearch = data.filter(
    function (pokemon) {
      return pokemon.name.includes(search)
    });
  return pokSearch;
}

let button = document.getElementById("btnSearch")
button.addEventListener("click", function () {
  let valorInput = document.getElementById("search").value
  let resulSearch = buscaData(data.pokemon, valorInput)

  show(resulSearch)

})

document.getElementById("btnHome").addEventListener("click", function () {
  finalArray = 20
  show(POKEMONS.slice(0, finalArray))
})
document.getElementById("btnShowMore").addEventListener("click", function () {
  finalArray += 20
  show(POKEMONS.slice(0, finalArray))
});
document.getElementById("btnShowAll").addEventListener("click", function () {
  show(POKEMONS)
});
