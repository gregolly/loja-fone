/*
1 - Ter a janela(browser) na mão
2 - Ter o html na mão
3 - Pegar o coração
4 - Pegar clique no coração
5 - No momento que o usuario clicar nós queremos mostrar um texto na tela.
*/

const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelector('.star');

$firstStar.addEventListener('click', handleClickFirstStar);

function handleClickFirstStar() {
  $firstStar.classList.toggle('-active');
}

$heart.addEventListener("click", handleClickHeart);

function handleClickHeart(){
 // if ($heart.classList.contains('-active')) {
   // $heart.classList.remove('-active'); //quando tem a  class active
  //} else {
    //$heart.classList.add('-active'); //quando não tem a classe active
  //}
  
  $heart.classList.toggle("-active");
}

