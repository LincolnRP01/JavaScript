function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')


   if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
   } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade < 1){
                //Beber
                img.setAttribute('src', 'foto_bebe_m.png')
            } else if(idade <= 10){
                //Criança
                img.setAttribute('src', 'foto_criança_m.png')
            } else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'foto_jovem_m.png')
            } else if(idade > 21 && idade <= 62){
                //adulto
                img.setAttribute('src', 'foto_adulto_m.png')
            } else{
                //Velho
                img.setAttribute('src', 'foto_idoso_m.png')
            }
            
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade < 1){
                //Bebe
                img.setAttribute('src', 'foto_bebe_f.png')
                
            } else if(idade <= 10){
                //Criança
                img.setAttribute('src', 'foto_criança_f.png')
            } else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto_jovem_f.png')
            } else if(idade > 21 && idade <= 62){
                //adulto
                img.setAttribute('src', 'foto_adulto_f.png')
            } else{
                //Velho
                img.setAttribute('src', 'foto_idoso_f.png')
            }

        }

        
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)

   }
   
}