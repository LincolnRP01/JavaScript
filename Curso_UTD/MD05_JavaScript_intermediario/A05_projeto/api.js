
const retornaProduto = async () => {

    const id = document.getElementById("numero").value

    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`)

    const dado = await resposta.json()

    //Pegando elementos HTML
    const imagem = document.getElementById("imagem")

    const titulo = document.getElementById("titulo")

    const preco = document.getElementById("preco")

    const categoria = document.getElementById("categoria")

    const nota = document.getElementById("nota")

    const {image, description, title, price, category,rating} = dado;

    //Modificando DOM com dados da API
    imagem.innerHTML = `<img src='${image}' alt='${description}' />`

    titulo.innerText = title;

    preco.innerText = "preco: "+price;

    categoria.innerText = "categoria: "+category;

    nota.innerText = "nota: "+rating.rate;
}

//retornaProduto()

document.getElementById("carregar").addEventListener("click", retornaProduto)