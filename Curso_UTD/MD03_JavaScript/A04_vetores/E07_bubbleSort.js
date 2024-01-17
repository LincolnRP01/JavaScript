var notas = [9,8,3,4,6,8,9,7,4,2,10,1,10,10]

for(let atual = 0; atual < notas.length; atual++){

    for(let proximo = atual + 1; proximo < notas.length; proximo++){

        if(notas[atual] > notas[proximo]){
            let temp =  notas[atual];

            notas[atual] = notas[proximo];

            notas[proximo] = temp;
        }
    }
}

console.log(notas)