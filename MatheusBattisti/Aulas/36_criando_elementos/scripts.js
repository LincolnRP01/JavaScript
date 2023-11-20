var novoParagrafo = document.createElement('p')
console.log(novoParagrafo)

var texto = document.createTextNode('Este e o conteudo do p')
console.log(texto)

var body = document.querySelector('body')

body.appendChild(novoParagrafo)
novoParagrafo.appendChild(texto)

var cont = document.querySelector('#container')

var el = document.createElement('span')

el.appendChild(document.createTextNode('texto do span'))

cont.appendChild(el)