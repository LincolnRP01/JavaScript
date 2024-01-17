verificaPrimo(2)
nPrimos(3000)


function nPrimos(limite){
    for(let numero = 0; numero<=limite; numero++){
        if(verificaPrimo(numero)){
            console.log(numero)
        }
    }
}


function verificaPrimo(numero){
    let div = 0

    for(let divisor = 1; divisor<=80; divisor++){
            if(numero % divisor === 0){
                div++
            } 
    }

    if(div == 2){
        return true
    } else{
        return false
    }
}