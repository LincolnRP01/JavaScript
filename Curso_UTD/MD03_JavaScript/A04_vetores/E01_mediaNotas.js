var notas = [9,8,3,4,6,8,9,7,4,2,10,1,10,10]
var total = 0, media = 0

for(let i=0; i<notas.length; i++){
    total+=notas[i]
    //total = total + notas[i];
}

media = total/notas.length

console.log(media)