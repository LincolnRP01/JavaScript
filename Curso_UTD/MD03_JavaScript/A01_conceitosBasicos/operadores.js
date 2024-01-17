//Operadores unarios.

var nome = "Lincoln";

console.log(nome);

var idade = 17;

console.log(idade);

/* TEstando incremento
idade+=1 / idade++
console.log(idade)
*/

//Operadores aritmeticos + - / * %

//var media = 10+10/2 = 15
var media = (10 + 10) / 2;

console.log(media)

var resto = 10 % 3

console.log(resto)

//Operadores relacionais > >= < <= == === != !==

var resultado = 90 < 10

console.log(resultado)

//Operadores logicos && ||

var condicao = 10 > 1 && 20 % 2 == 0

console.log(condicao)

//Operador ternario se(condicao)?verdade:false;

var PassouNaProva = true
var resultadoProva = PassouNaProva == true?"pode dirigir":"Nao pode dirigir"
console.log(resultadoProva)
