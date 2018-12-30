let valorInicial = 10;
const $second = window.document.querySelector(".-second");

$second.addEventListener("click", function(){
  //document.getElementById('change').innerHTML = "Cart";
  const $carrinho = document.querySelector('.-last');

  //valorInicial = valorInicial + 1;
  //valorInicial += 1;
  //valorInicial++;

  $carrinho.textContent = `Carinho  (${++valorInicial})`;
});



