const pizza = [5,6,7,8,9]

//Pedaco assume o valor do array dentro de pizza
for(let pedaco of pizza){
    console.log(Math.pow(pedaco,2))
}


//Assume o indice do array
for(let indice in pizza){
    console.log(pizza[indice]);
}