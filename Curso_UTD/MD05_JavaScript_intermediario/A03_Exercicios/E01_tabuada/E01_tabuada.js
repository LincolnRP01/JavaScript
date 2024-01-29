
document.getElementById("botao").addEventListener('click', () => {
    const numero = Number.parseInt(document.getElementById("numero").value)

    const painel = document.getElementById("painel")

    const div = document.createElement("div")

    let cont = 1

    while(cont <= 10){

        const p = document.createElement("p")

        p.innerText = `${numero} X ${contador} = ${numero  * contador}`

        div.appendChild(p)

        contador++
    }

    painel.innerText = ''

    painel.appendChild(div)
})