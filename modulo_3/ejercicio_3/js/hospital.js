var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var page = location.pathname.split("/").pop()
console.log(page + " loaded correctly")



var w = window.innerWidth;
var h = window.innerHeight;
console.log("Page running at " + w + "x" + h)

const reservationNav = document.getElementById("reservation");
reservationNav.addEventListener("click", (e) => {
    let nombre = prompt("Ingrese un nombre válido");
    correo = null 
    while(typeof correo != null){
        valor = prompt("Ingrese un correo");
        if (valor.value.match(validRegex)){
            correo = valor;
        }

    }
    let correo = prompt("Ingrese un correo");
    let numero = 0
    while(numero == 0){
        try{
        valor = Number(prompt("Ingrese un número"));}
       catch(error){
        console.log("Valor no es un número")
    }
        console.log(typeof valor)
        if (typeof valor == number){
            numero = valor;
        }
    }
    console.log(nombre + " " + correo + " " + numero);
    e.preventDefault();
});
