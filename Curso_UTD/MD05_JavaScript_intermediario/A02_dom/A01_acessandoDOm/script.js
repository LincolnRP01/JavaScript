//Retorna 1 elemento pelo seu id
const titulo = document.getElementsById('titulo');

//Retorna 1 elemento a partir da tag ou nome da tag
const ti = document.querySelector("h1")

//Retorna 1 elemento apartir da sua class ou id e tag
const ti2 = document.querySelector('#titulo')

//Retorna 1 elemento apartir da classe
const ti3 = document.querySelector('.subtitulo')

//Retorna 1 elemennto pela sua tag
const lista = document.getElementsByTagName('ol')

console.log(lista[0].children)
console.log(lista[0].firstElementChild.innerHTML)
console.log(lista[0].lastElementChild.innerHTML)







console.log(ti);