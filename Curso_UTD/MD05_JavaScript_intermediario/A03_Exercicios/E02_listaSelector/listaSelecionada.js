
document.getElementById("nome").addEventListener('keyup', () => {

    const valor = document.getElementById("nome").value

    const lista = document.getElementById("lista")

    for(let item of lista.children){
        if(item.innerText.include(valor)){
            item.style.fontWweight = "bolder";
        } else{
            item.style.fontWeight = "normal";
        }
        //console.log(item.innerText)
    }
    //console.log(valor)
})