//Keydownn
document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
      console.log("Apertou Enter");  
    }
    
})

//keyup
document.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        console.log("Soultou a tecla")
    }
})