/* Exercicio 1
var contador = 30, resultado = ""

while(contador>0){
    if(contador % 4 == 0){
        resultado+="["+contador+"] "
    } else{
       resultado+=contador+" " 
    }
    contador--;
}

console.log(resultado)
*/


var contador = 6, resultado = ""

while(contador<=100){
    resultado+=contador+" " 
    contador+=2;
}

console.log(resultado)
