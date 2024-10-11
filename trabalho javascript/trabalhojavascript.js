let resultado;
const preco = 50;
resultado = (preco <40)?("Livro barato"):("Livro não é barato");
console.log(resultado);


function soma(a,b){
  return a+b;
}


const anonima = function(a,b){
  return a+b;
}

const arrow = function(a,b){
  return a+b;
}

const arrow2 = (a,b) => a + b;

const arroz3 = a => a + 2;

const dobro = (elemento) => {console.log(elemento * 2)};