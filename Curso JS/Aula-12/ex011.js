var idade = 66
console.log(`Voce tem ${idade}`)
if(idade < 16){
    console.log('Não vota')
} else if(idade < 18 || idade >= 66){
    console.log('Voto opcional')
} else{
    console.log('Vota')
}