//Ejercicio 1
/*let nombre = "Josemi"
if (nombre == "Josemi") {   
    console.log("Hola Josemi")
}else{
    console.log("No eres Josemi")
}*/

//Ejercicio 2
/*let usuario = "usuario"
let contraseña = "usuario"

let user = "usuario"
let pass = ""

if (user === usuario && pass === contraseña) {
    console.log("Bienvenido " + user)
} else {
    console.log("Usuario o contraseña no válidos")
}*/

//Ejercicio 3
/*let num = -1

if (num<0){
    console.log("Es un numero negativo")

}else if (num==0){
    console.log("El numero es 0")
}else{
    console.log("El numero es positivo")
}*/

//Ejercicio 4
/*let num = 22

if (num<18){
    console.log("Eres menor no puedes votar")

}else{
    console.log("Puedes Votar")
}*/

//Ejercicio 5
/*let edad = 17; 
let tipo = (edad >= 18) ? "adulto" : "menor";

console.log("La persona es " + tipo);*/

//Ejercicio 6
/*let mes = "8"

if (mes == 12 || mes == 1 || mes == 2){
    console.log("Es invierno")
}else if (mes >=3 && mes <=5){
    console.log("Primavera")
}else if (mes >=6 && mes <=8){
    console.log("Verano")
}else if(mes >= 9 && mes <= 11 ){
    console.log("Otoño")
}else{
    console.log("Mes no valido")
}/let mes = "8"

if (mes == 12 || mes == 1 || mes == 2){
    console.log("Es invierno")
}else if (mes >=3 && mes <=5){
    console.log("Primavera")
}else if (mes >=6 && mes <=8){
    console.log("Verano")
}else if(mes >= 9 && mes <= 11 ){
    console.log("Otoño")
}else{
    console.log("Mes no valido")
}*/

//Ejercicio 7
// Pedimos al usuario el número del mes
/*let mes = parseInt(prompt("Introduce el número del mes (1-12):"));

// Número de días del mes usando if-else
if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    console.log("Este mes tiene 31 días");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("Este mes tiene 30 días");
} else if (mes === 2) {
    console.log("Este mes tiene 28 o 29 días (dependiendo si es bisiesto)");
} else {
    console.log("Mes no válido");
}*/


//Ejercicio 8
/*let idioma = "es"; // Puede ser "es", "en", "fr", "de"

switch (idioma) {
    case "es":
        console.log("¡Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
    case "fr":
        console.log("Bonjour!");
        break;
    case "de":
        console.log("Hallo!");
        break;
    default:
        console.log("Idioma no reconocido");
}*/

//Ejercicio 9
/*let mes = "Diciembre"
switch (mes) {
    case "Diciembre":
    case "Enero":
    case "Febrero":
        console.log("Estamos en Invierno");
        break;
    case "Marzo":
    case "Abril":
    case "Mayo":
        console.log("Estamos en Primavera");
        break;
    case "Junio":
    case "Julio":
    case "Agosto":
        console.log("Estamos en Verano");
        break;
    case "Septiembre":
    case "Octubre":
    case "Noviembre":
        console.log("Estamos en Otoño");
        break;
    default:
        console.log("Mes no válido");
        break;
}*/

//Ejercicio 10
/*switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        console.log("Este mes tiene 31 días");
        break;
    case 4: case 6: case 9: case 11:
        console.log("Este mes tiene 30 días");
        break;
    case 2:
        console.log("Este mes tiene 28 o 29 días (dependiendo si es bisiesto)");
        break;
    default:
        console.log("Mes no válido");
}*/