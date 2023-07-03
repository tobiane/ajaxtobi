//de forma js
var div = document.querySelector(".container");
console.log(div);
div2.addEventListener("click", function (){
    alert("hola mouse");
})
console.dir(div);

//de forma jquery
var divj = $(".container");
divj.on("mouseover", function(){
    alert("hola mouse jquery");
})
console.log(divj);