// clearTimeout
var x = 0;

var Mytime = setTimeout(function(){
    console.log('O x é 0')
}, 1500)

x = 5;

if(x > 0){
    clearTimeout(Mytime)
    console.log('O x passou de 0')
}

//clearSetInterval
var myInterval = setInterval(function() {
    console.log('Imprindo interval')
}, 1000);

setInterval(function(){
    console.log('Nao precisamos mais repetir');
    clearInterval(myInterval)
}, 2000)