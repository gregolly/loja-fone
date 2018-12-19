/*
1 - Ter a janela(browser) na mão
2 - Ter o html na mão
3 - Pegar o coração
4 - Pegar clique no coração
5 - No momento que o usuario clicar nós queremos mostrar um texto na tela.
*/

const $heart = window.document.querySelector(".-heart");


$heart.addEventListener("click", handleClick);

function handleClick(){
  console.log('ae');
}

