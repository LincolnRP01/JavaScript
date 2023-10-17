/*
Exemplo 1
let list = [11 , 10 , 1 , 14, 20]
list.sort()
list.push(6)
console.log(list)
console.log(`O primeiro valor do vetor e ${list[0]}`)
console.log(`Nosso vetor possui ${list.length} posiçoes sendo elas ${list}`)
*/

/*
Exemplo 2
let list = [11 , 10 , 1 , 14, 20]
list.sort()

console.log(list)

for(let pos = 0; pos < list.length; pos++ ){
    console.log(`A posiçao ${pos} tem o valor ${list[pos]}`)
}
*/


let list = [11 , 10 , 1 , 14, 20]
list.sort()

console.log(list)

for(let pos in list){
    console.log(`A posiçao ${pos} tem o valor ${list[pos]}`)
}

let buscar = list.indexOf(10)
if(buscar == 0){
    console.log(`O valor nao foi encontado`)
} else{
    console.log(`O valor 10 esta na posiçao ${buscar}`)
}
