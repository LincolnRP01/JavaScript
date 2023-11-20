//event click
var btn = document.querySelector("#btnClick");

btn.addEventListener("click", function(){
    btn.style.color = "red"
})

let title = document.querySelector("#titulo")
let subtitle = document.querySelector(".subtitulo")

title.addEventListener("click", function(){
    let subtitle = document.querySelector(".subtitulo");
    subtitle.style.display = "none";
});

title.addEventListener("dblclick", function(){
    let subtitle = document.querySelector(".subtitulo");
    subtitle.style.display = "block"
    subtitle.style.color = "white"
    subtitle.style.background = "black"

})

