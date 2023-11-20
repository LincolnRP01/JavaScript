for(let i = 10; i > 0; i--){
    
    console.log(i)

    if(i == 5){
        break
    }
}

console.log('Deu um break')

for(let x = 10; x <= 100; x += 10){
    if(x === 90 || x === 60 || x === 30){
        console.log('Continue')
        continue;
    }

    console.log(`Testando continue ${x}`)
}