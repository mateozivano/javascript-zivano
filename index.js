let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    let cantidad = document.getElementById("cantidad").value;
    let interes = document.getElementById("interes").value;
   console.log(cantidad)
   console.log(interes)
    
  let interesTotal =document.getElementById("interes_total").value = (cantidad / 100) * interes;
  document.getElementById("costo_total").value = parseFloat(cantidad) + parseFloat(interesTotal);
  console.log(interesTotal)
 
})