var desconto = 0, valorCompra = 120, tipoCliente = 2

switch(tipoCliente){
    case 1:
        break;
    case 2:
        desconto = 5;
        break;
    case 3:
        desconto = 10;
        break;
    default:
        console.log("Tipo de Cliente invalido")
}

var valorFinal = valorCompra - (valorCompra * desconto/100)

console.log(`A compra de: ${valorCompra} teve um desconto de ${desconto}%`)

console.log(`A valor da compra sera: ${valorFinal}`)