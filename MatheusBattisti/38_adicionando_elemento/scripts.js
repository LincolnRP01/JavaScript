//Criar elemento
var el = document.createElement('div')

el.classList = 'div-criada'

var cont = document.querySelector('#container')

//inserindo elemento filho
cont.appendChild(el)

// inserBefore - inserir antes
var el2 = document.createElement('div')

el2.classList = 'div-before'

var el3 = document.querySelector('#container .div-criada')

cont.insertBefore(el2, el3)