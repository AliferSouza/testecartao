import Modal from "./pages/inicio.js"
import Card from "./pages/cartoes.js";
import { inicio, cartaoes } from "./context/context.js"

let valorCartoes = JSON.parse(localStorage.getItem("listaDeCartoes"));

let card = document.querySelector(".card");


const App = () => {

  if (valorCartoes === null) {  
    card.innerHTML = Modal()
    inicio(card)


  } else {

    card.innerHTML = Card(valorCartoes)
    cartaoes(card)



  }


};



export { App };
