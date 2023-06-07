function Contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = 'Impossivel contar :('
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        let c = i

        while(c <= f){
            c = c + p
            res.innerHTML += ` ${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`




        /*if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449} `
        }  
        } else{
            //Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
        */
    }
}