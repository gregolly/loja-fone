const $second = window.document.querySelector(".-second");

$second.addEventListener("click", function(){
  //document.getElementById('change').innerHTML = "Cart";
  const $carrinho = document.querySelector('.-last');
  $carrinho.textContent = 'Mudando valor';
});



