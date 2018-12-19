const $second = window.document.querySelector(".-second");
$second.addEventListener("click", challenge);


function challenge(){
  console.log('Desafio');
  document.getElementById('change').innerHTML = "Cart";
}

