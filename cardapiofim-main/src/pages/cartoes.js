import header from "../componets/header.js"
import button from "../componets/button.js"

function cardFoods(valorCartoes) {
  
  let cardFoods = `${header()} ${button()}`;
  valorCartoes.forEach((dado) => {
    cardFoods += `
 
    <div  class="Cartoes">
        <div class="Cartao" style="background:${dado.corDoCard}">
        <button class="Deletar-Intens">X</button>  
        <div class="nomeCartao" >${dado.nomeCartao}</div>
        <div class="Date">${dado.date}</div>
        <div class="cnpjCartao">${dado.cnpjCartao}</div>        
        <div class="Codigo-de-barras">||| |||||||||| ||| |||||||</div>
        <br> 
        </div>
        </div>
`;
  });
  return cardFoods; 
}
export default cardFoods;
