// criar um elemento
var el = document.createElement('h3')

el.classList = "testando_classe"

var texto = document.createTextNode('Este e o nosso texto')

el.appendChild(texto)

console.log(el)

//Selecionar o elemento que quer trocar
var title = document.querySelector('#titulo')

console.log(title)

//selecionar o pai do el
//var body = document.querySelector('body')
var pai = title.parentNode;

//trocar os elementos
pai.replaceChild(el, title)