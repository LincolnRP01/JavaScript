var nome = prompt("Qual seu nome?");
var valorEmQuant = prompt("Qual a quantidade de moedas deseja selecionar ? ");
var cotacaoDoValor = prompt("Qual cotacao deseja selecionar ? ");

var quant = Number(valorEmQuant);
var cotacao = Number(cotacaoDoValor);

var valorDaMoedaEmReais = quant * cotacao;

    valorDaMoedaEmReais = valorDaMoedaEmReais.toFixed(2);
    alert(`Bom dia Sr/a ${nome}, aqui está seu valor R$ ${valorDaMoedaEmReais}`);

