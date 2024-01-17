let numero = 80, div = 0, divisores = []

for(let divisor = 1; divisor<=80; divisor++){
    if(numero % divisor === 0){
        div++
        divisores.push(divisor)
    } 
}

console.log(div)
console.log(divisores)