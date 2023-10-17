function Gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('res')

    if(num.value.length == 0){
        window.alert('[Erro] Por favor insira um numero!')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }

        /* Usando While:
        let c = 1

        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
            
        }
        */
    }

}