var velocidade = 140, multa = 0

if(velocidade > 80){
    multa = (velocidade - 80) * 5

    console.log(`Voce foi mutado por excesso de velocidade, estando a ${velocidade} e sua muta sera ${multa}`)
}