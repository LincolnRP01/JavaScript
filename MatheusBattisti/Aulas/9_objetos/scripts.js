var obj = {
    nome: "Lincoln",
    profissao: "Estudante de programaçao",
    idade: 18,
    trabalhando: false
};

obj.ensinocompleto = true;

console.log(obj)
console.log(typeof obj)

console.log(obj.nome)
console.log(obj.profissao)
console.log(obj.idade)
console.log(obj.trabalhando)

console.log(`Meu nome e ${obj.nome}`)

obj.idade = 19;
console.log(obj.idade)

