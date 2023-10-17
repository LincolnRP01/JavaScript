function carregar(){
var msg = document.getElementById('msg1')
var img = document.getElementById('imagen')
var mmsg = document.getElementById('msg2')

//Pegando as horas
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 0 && hora < 12){
    //Bom dia!
    img.src = 'foto_manha.png'
    document.body.style.background = '#FFDF66'
    mmsg.innerHTML = 'Bom Dia!'

} else if (hora >= 12 && hora < 18){
    //Boa tarde!
    img.src = 'foto_tarde.png'
    document.body.style.background = '#DB8F55'
    mmsg.innerHTML = 'Boa Tarde!'
} else{
    //Boa noite!
    img.src = 'foto_noite.png'
    document.body.style.background = '#2F3D4B'
    mmsg.innerHTML = 'Boa Noite!'
}
}

