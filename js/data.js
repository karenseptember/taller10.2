document.addEventListener("DOMContentLoaded",()=>{
let data = document.getElementById("data");
let palabra= localStorage.getItem("palabra");
data.innerHTML+=palabra;
})