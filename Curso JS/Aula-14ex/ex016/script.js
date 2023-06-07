


function enviar() {

let inicio = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passos = document.getElementById('txtp')
let res = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
    res.innerHTML = `Impossivel Contar!`
    window.alert('[ERRO] Digite novamente')
    
} else{
    
    res.innerHTML = 'Contando <br>' 

    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passos.value)

    if(p <= 0){
        window.alert('PASSO INVALIDO. Considerando Passo = 1')
        p = 1
    }

    if(i < f){
        //Contagem Crescente
       for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}` 
        } 
    } else{
        //Contagem Decrescente
        for(let c = i; c >= f; c -= p){
            res.innerHTML +=  ` ${c} \u{1F449}`
        }

    }
    res.innerHTML += `\u{1F3C1}`
}
}
    