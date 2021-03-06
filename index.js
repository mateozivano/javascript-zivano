let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
    let cantidad = document.getElementById("cantidad").value;
    let interes = document.getElementById("interes").value;
   console.log(cantidad)
   console.log(interes)
    
  let interesTotal = document.getElementById("interes_total").value = (cantidad / 100) * interes;
  document.getElementById("costo_total").value = parseFloat(cantidad) + parseFloat(interesTotal);
  console.log(interesTotal)

  //json
    let var1 = {
        "cantidad": document.getElementById("cantidad").value,
        "interes": document.getElementById("interes").value,
        "interesTotal": document.getElementById("interes_total").value,
        "costoTotal": document.getElementById("costo_total").value};
    console.log(var1)
    let strVar1 = JSON.stringify(var1)
    localStorage.setItem("calculo", strVar1);
    
})


//Saludo en html


let saludosGenericos = ["Sea bienvenido a nuestra pagina" ,"Bienvenido a nuestro simulador de créditos", "Easycreditos te saluda" ];

window.onload = function saludar() {
  let saludo = document.getElementById("saludoGenerico");
  saludo.innerHTML =
      saludosGenericos[Math.floor(Math.random() * saludosGenericos.length)];
}

//aplicacion de session storage

const MOON = '🌙';
const SUN = '☀️';
const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const DEFAULT_MODE = DARK_MODE;

const btn = document.querySelector('#theme-switcher');

init();

function init() {
    let storedMode = sessionStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === DARK_MODE) {
        btn.textContent = SUN;
        document.body.classList.add(DARK_MODE);

    } else if (mode === LIGHT_MODE) {
        btn.textContent = MOON;
        document.body.classList.remove(DARK_MODE);
    }
}

btn.addEventListener('click', function () {
    let mode = sessionStorage.getItem('mode');
    if (mode) {
        let newMode = mode == DARK_MODE ? LIGHT_MODE : DARK_MODE;
        setMode(newMode);
        sessionStorage.setItem('mode', newMode);
    }
});

//json
/*
let btn2 = document.getElementById("btn2");
let json = localStorage.getItem("calculo")
console.log(typeof json);
console.log(json)
let nro = (json.interesTotal);
console.log(json.interesTotal);
btn2.addEventListener("click", function() {
    alert("cantidad deseada:", json.cantidad)
    
})
*/

//sweetalert

Swal.fire({
    title: '¡Bienvenido a nuestra pagina!',
    text: "Calcule sus créditos de una manera fiable",
    icon: 'info',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Ok!'
  })