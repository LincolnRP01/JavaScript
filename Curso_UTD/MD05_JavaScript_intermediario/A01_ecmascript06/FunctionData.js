const hoje = Date.now();

let data = new Date(hoje);

let dia = data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()

console.log(`${dia} / ${mes} / ${ano}`);