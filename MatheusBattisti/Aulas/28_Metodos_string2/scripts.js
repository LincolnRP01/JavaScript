//toLowerCase e toUpperCase

var frase = "Esta e a frase que vamos manipular"

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta)

console.log(fraseCaixaAlta.toLocaleLowerCase())

//trim

var nome = '      Mateus     '

var nomeTrim = nome.trim()

console.log(nomeTrim)

//split 

console.log(frase.split(' '))

var tags = 'PHP, JAVASCRIPT, CSS, HTML'

console.log(tags.split(', '))

//lastIndexOf

var fraseDois = 'Eu quero a ultima  palavra teste dessa frase frase de teste'

console.log(fraseDois.indexOf('teste'))

console.log(fraseDois.lastIndexOf('teste'))