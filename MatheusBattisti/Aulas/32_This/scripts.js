var teste = 5;

console.log(this.teste)
console.log(teste)

let pessoa = {
    nome: 'Matheus',
    idade: 30,
    falar: function(){
        console.log('Ola, tudo bem?')
    },
    dizerNome: function(){
        console.log(`O meu nome e ${this.nome} `)
    },
    aniversario: function(){
        this.idade += 1
    },
    saudaçao: function(){
        return `Sr. ${this.nome}`
    }
}

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudaçao()

console.log(`Ola ${sdc}`)