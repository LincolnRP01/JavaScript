document.getElementById("botao").addEventListener("click",() => {
    const inicio = Number.parseInt(document.getElementById("inicio").value)

    const final = Number.parseInt(document.getElementById("final").value)

    if(inicio <= 0 || inicio > 31 || final <= 0 || final > 31){
        alert(`digite um numero valido`)
    }else {
        marcarCalendario(inicio, final)
    }
})



function marcarCalendario(inicio, final){

    const dias = document.getElementsByTagName("td")

    for(let dia of dias){
        if(dia.innerText !== "" && dia.innerText >= inicio && dia.innerText <= final){
            dia.style.backgroundColor = "yellow"
        }else{
            dia.style.backgroundColor = 'white'
        }
    }
}

/*
document.getElementById("botao").addEventListener(`click`, () => {

    const inicio = Number.parseInt(document.getElementById("inicio").value)
    
    const final = Number.parseInt(document.getElementById("final").value)

    if(inicio <= 0 || inicio > 31 || final <= 0 || final > 31){
        alert(`digite um numero valido`)
    }else {
        marcarCalendario(inicio, final)
    }
})

function marcarCalendario(){
    const dias = document.getElementsByTagName("td")

    for(let dia of dias){
        if(dia.innerText !== "" && dia.innerText >= inicio && dia.innerText <= final){
            dia.style.backgroundColor = 'yellow'
        }else{
            dia.style.backgroundColor = 'white'
        }
            
    }
}
*/