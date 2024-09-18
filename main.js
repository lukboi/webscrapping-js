// Feito em https://www.guia-wcag.com/

// Função que percorre os cards e exibe informações apenas dos que possuem o span com a classe .nivel-aaa
function exibirCardsComNivelAAA() {
  // Seleciona todos os elementos <li> que representam os cards
  var listaDeCards = document.querySelectorAll('.list.cards-all li');

  // Itera sobre cada card da lista
  listaDeCards.forEach(function(card) {
    // Verifica se o card contém um <span> com a classe .nivel-aaa
    var temNivelAAA = card.querySelector('span.nivel-aaa');

    // Se o card tiver o <span> com a classe .nivel-aaa, imprime as informações no console
    if (temNivelAAA) {
      // Pega o título do card
      var titulo = card.querySelector('.cards-title').innerText;
      
      // Pega o elemento do link dentro do card
      var elementoLink = card.querySelector('.link a');
      
      // Pega o texto do link
      var textoDoLink = elementoLink.innerText;
      
      // Pega o link propriamente dito (URL)
      var urlDoLink = elementoLink.href;
      
      // Pega a descrição do card
      var descricao = card.querySelector('.descricao').innerText;

      // Mostra as informações no console
      console.log(`Título: ${titulo}`);
      console.log(`Texto do Link: ${textoDoLink}`);
      console.log(`URL do Link: ${urlDoLink}`);
      console.log(`Descrição: ${descricao}`);
    }
  });
}

// Chamando a função para executar o código
exibirCardsComNivelAAA();
