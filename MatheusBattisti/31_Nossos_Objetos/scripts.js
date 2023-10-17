let pessoa = {
    nome: 'Matheus',
    idade: 30,
    falar: function(){
        console.log('Ola, tudo bem?')
    },
    somar: function(a, b){
        return a + b;
    }
}

console.log(pessoa.nome)
pessoa.falar();
var soma = pessoa.somar(2, 2)
console.log(soma)