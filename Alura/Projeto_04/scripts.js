let listaFilmes = [];
let listaTrailer = [];

function adicionarFilme(){
    let filmeFav = document.getElementById("filme").value;
    let filmeTit = document.getElementById("titulo").value;
    let filmeLink = document.getElementById("trailer").value
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML += 
    `<div class="filme"> 
    <a href= ${filmeLink} target="_blank">
    <img src= ${filmeFav}> </a>
    <p class="titulo"> ${filmeTit} </p>
    </div>`

    let filmeTrailer = document.getElementById("trailer").value;
    listaTrailer.push(filmeTrailer);
    listaFilmes.push({
        filme: filmeFav,
        trailer: trailerFav,
        titulo: tituloFilme
    });

    document.getElementById("filme").value = "";
    document.getElementById("trailer").value = "";
    document.getElementById("titulo").value = "";

    carregarFilmes();
}

function carregarFilmes(){
    let elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = "";

    for (let i = 0; i < listaFilmes.length; i++) {
        let filme = listaFilmes[i];
        let filmeHTML =
        `<div class="filme">
        <a href=
        ${filme.trailer}
        target="_blank">
        <img src=
        ${filme.filme}
        </a>
         <p class="titulo">
        ${filme.titulo}
        </p> 
        </div>`

    elementoListaFilmes.innerHTML += filmeHTML;
  }
}





