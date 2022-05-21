let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let cantidad = document.getElementById("cantidad").value;
    let interes = document.getElementById("interes").value;
   console.log(cantidad)
   console.log(interes)
    
  let interesTotal = document.getElementById("interes_total").value = (cantidad / 100) * interes;
  document.getElementById("costo_total").value = parseFloat(cantidad) + parseFloat(interesTotal);
  console.log(interesTotal)
 
})


//Saludo en html



let saludosGenericos = ["Sea bienvenido a nuestra pagina" ,"Bienvenido a nuestro simulador de créditos", "Easycreditos te saluda" ];



window.onload = function saludar() {
  let saludo = document.getElementById("saludoGenerico");
  saludo.innerHTML =
      saludosGenericos[Math.floor(Math.random() * saludosGenericos.length)];
}




