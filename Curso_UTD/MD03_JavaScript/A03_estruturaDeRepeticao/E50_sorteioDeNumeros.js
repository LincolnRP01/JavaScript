var num = 0,
numeros = '',
acimaDeCinco = 0,
DivPorTres = 0,
contador= 0;

while(contador < 10){
    num = Math.round(Math.random() * 10)

    if(num > 5){
        acimaDeCinco++
    } if(num % 3 == 0 && num !== 0){
        DivPorTres++
    }

    numeros+=num+" "
    contador++
}

console.log(numeros)
console.log(`maior que numero cinco: ${acimaDeCinco}`)
console.log(`divisiveis por tres: ${DivPorTres}`)

/*
var numero = Math.round(Math.random()*10);
var contador = 0;
while(contador<3){
  var chute = prompt('digite o seu chute');
  
  if(chute == numero){
    alert('parabens, você acertou! '+numero);
  	break; 
  }
  contador++;
}

console.log('não foi dessa vez! '+numero);
*/