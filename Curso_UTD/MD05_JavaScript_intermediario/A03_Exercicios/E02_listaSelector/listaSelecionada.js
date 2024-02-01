document.getElementById("nome").addEventListener("keyup", () => {
    const valor = document.getElementById("nome").value
    const lista = document.getElementById("lista");

    for (let item of lista.children) {
        if (item.innerText.includes(valor) && valor.length >= 2) {
            item.style.fontWeight = "bolder";
        } else {
            item.style.fontWeight = "normal";
        }
    }
});


/*
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
*/