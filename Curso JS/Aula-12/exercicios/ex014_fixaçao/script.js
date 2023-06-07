function calcular(){

var msg1 = document.getElementById('mensagem1')
var msg2 = document.getElementById('mensagem2')
var img = document.getElementById('imagen')
var data = new Date()
var hora = data.getHours()

if(hora < 12){
    msg1.innerHTML = `Agora são ${hora} horas.`
    document.body.style.background = '#FFDF66'
    msg2.innerHTML = 'Bom Dia!'
    img.src = 'foto_manha.png'

} else if(hora > 12 && hora < 18){
    msg1.innerHTML = `Agora são ${hora} horas.`
    document.body.style.background = '#DB8F55'
    msg2.innerHTML = 'Boa Tarde!'
    img.src = 'foto_tarde.png'

} else{
    msg1.innerHTML = `Agora são ${hora} horas.`
    document.body.style.background = "#2F3D4B"
    msg2.innerHTML = 'Boa Noite!'
    img.src = 'foto_noite.png'
}
s

}