document.addEventListener("DOMContentLoaded",()=>{
let formulario = document.getElementById("inputText");    

let boton = document.getElementById("buttonText")
boton.addEventListener("click",function(e){
    e.preventDefault();
    localStorage.setItem("palabra",formulario.value);
})
})