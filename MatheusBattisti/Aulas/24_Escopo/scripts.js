//Escopo Global
var x = 1;

var y = 3;

console.log(x, y)

function test(){
  //Escopo Local
  var z = 0;

  console.log(x, z);

}

test()

function testando(){
  //Escopo Local
  var z = 5

  console.log(x, z);
}

testando()

if(true){
  var p = 4
}

console.log(p)