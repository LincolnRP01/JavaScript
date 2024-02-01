
fetch("")
    .then(responde => responde.json())
    .then(dado => console.log(dado))