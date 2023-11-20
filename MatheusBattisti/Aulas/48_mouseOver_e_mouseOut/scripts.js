//Event Mouseout e mouseOver
let title = document.querySelector("#titulo");

title.addEventListener("mouseout", function(){
    title.style.background = "Blue";
})

title.addEventListener("mouseover", function(){
    title.style.background = "Red";
})


let subtitle = document.querySelector(".subtitulo");

subtitle.addEventListener("mouseover", function(){
    let secret = document.querySelector(".hide");
    secret.classList.remove("hide");
})

subtitle.addEventListener("mouseout", function(){
    let secret = document.querySelector(".hide");
    secret.classList.add("hide");
})
