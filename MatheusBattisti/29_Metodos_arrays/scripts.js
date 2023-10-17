// lenght
var array = [1 , 2 , 3 , 4 , 5 , 6]
console.log(array.length)

//push Adiciona 
array.push(7)
console.log(array)

//pop Remove
array.pop()
console.log(array)

// unshift adicionar no começo
array.unshift(0)
console.log(array)

//shift Remove no começo
array.shift()
console.log(array)

//acessando o ultimo elemento
console.log(array[array.length - 1])

// isArray
console.log(Array.isArray(5))
console.log(Array.isArray(array));