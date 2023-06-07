function Gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tabu')

    if(num.value.length == 0){
        window.alert('[ERRO] Sem numeros!')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = ` ${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}