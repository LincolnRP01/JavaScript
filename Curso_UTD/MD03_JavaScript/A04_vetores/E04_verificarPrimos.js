verificaPrimo(2)

function verificaPrimo(numero){
    let div = 0

    for(let divisor = 1; divisor<=80; divisor++){
            if(numero % divisor === 0){
                div++
            } 
    }

    if(div == 2){
        console.log(`O  numero: ${numero} e primo`)
    } else{
        console.log(`O numero:  ${numero} nao e primo`)
    }
}