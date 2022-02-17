import Modal from "../pages/inicio.js"
function inicio(card) {  
  let listaDeCartoes = JSON.parse(localStorage.getItem('listaDeCartoes') || '[]');
 
  const nome = document.querySelector("#nome");
  const cnpj = document.querySelector("#cnpj");
  const cores = ["#6ee678", "#56a7f2", "#ffa500", "#0d8f52"];
 

  document.querySelector(".btn").addEventListener("click", function (event) {    
    event.preventDefault()

    listaDeCartoes.push({    
      nomeCartao: nome.value,
      cnpjCartao: cnpj.value,
      corDoCard: cores[Math.random() < 2 ? 0 : 1],
      date: new Date()
    })

    localStorage.setItem('listaDeCartoes', JSON.stringify(listaDeCartoes))
     window.location.reload();

  })

}


function cartaoes(){
  document.querySelector("#pedir").addEventListener("click", function (event) {
    const card = document.querySelector(".card");
    card.innerHTML = Modal()
    inicio()
    
  })
}


export{ inicio, cartaoes}



