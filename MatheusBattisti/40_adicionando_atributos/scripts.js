//Adicionar atributos
var title = document.querySelector('#titulo')

title.setAttribute('class', 'testando_atributo')

console.log(title)

var btn = document.querySelector('#botao')

btn.setAttribute('disabled', 'disabled')

var subtitle = document.querySelector('.subtitulo')

subtitle.setAttribute('id', 'titulo_2')

//remover atributos
var lista = document.querySelector('#lista')

lista.removeAttribute('id')