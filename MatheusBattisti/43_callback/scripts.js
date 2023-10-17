function exibir(num){
    console.log(`A operaçao resultou em: ${num}`)
}

function soma(a, b, callback){
    var op = a + b;
    callback(op)
}

function multiplicar(a, b, cb){
    var op = a * b;
    cb(op)
}

soma(2,2,exibir);

multiplicar(2, 4, exibir);