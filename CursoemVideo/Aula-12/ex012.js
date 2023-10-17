var agora = new Date()
var hora = agora.getHours()
// Coletando horario //

console.log(`Agora sao exatamente ${hora} horas.`)

if(hora < 12){
    console.log('Bom Dia!')
}else if(hora <= 18){
    console.log('Boa Tarde!')
}else if(hora > 18){
    console.log('Boa Noite!')
}else if(hora < 2){
    console.log('Boa Madrugada!')
}