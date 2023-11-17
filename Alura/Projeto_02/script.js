var jogar = prompt ('Bora Jogar? (sim/não)');
if (jogar == 'sim') {

    let numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
    let tentativas = 0;
    let limite = 15
    let chute;

    while(tentativas < limite){
        chute = prompt(`Digite um numero de 1 a 1000: `)
        tentativas++;

        if (chute == numeroSecreto) {
            alert ('Acertou!');
            break;
          } else if (chute > numeroSecreto) {
            alert (`Errou ${chute} é menor que o numero secreto.
            Tentativa: ${tentativas}`)
          } else if (chute < numeroSecreto) {
            alert(`Errou ${chute} e maior que o numero secreto.
            Tentativa: ${tentativas}`)
          } 
    }

    if(tentativas == limite){
        alert('Você perdeu o jogo. O número secreto era ' + numeroSecreto);
    }
}   