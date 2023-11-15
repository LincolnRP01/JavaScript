let listaAnime = [
    "https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    "https://sm.ign.com/ign_br/screenshot/default/6b4c9dcac0bcdf27fe1d21e75769f8861661079175-main_wsd6.jpg",
    "https://a.storyblok.com/f/178900/2000x3000/8863dbd7c8/jujutsu-kaisen-season-2-key-art.png/m/filters:quality(95)format(webp)",
    "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/09/jujutsu_1__j12026w0-scaled.jpg"
];

let listaName = ["Jujutsu Kaisen", "Jujutsu Kaisen Part 2" , "Jujutsu Kaisen 2 Part 1", "Jujutsu Kaisen 2 Part 2"];

let imgs = document.querySelector("#posters")

for (let i = 0; i < listaAnime.length; i++) {
    let imgElement = document.createElement("img");
    imgElement.src = listaAnime[i];
    
    let h3Element = document.createElement("h3");
    h3Element.textContent = listaName[i];

    // Adiciona os elementos ao corpo do documento
    imgs.appendChild(imgElement);
    imgs.appendChild(h3Element);
}
