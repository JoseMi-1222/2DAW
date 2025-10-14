// Ejercicio 1: Calcular el área de un círculo y un triángulo
/*let radio = parseFloat(prompt("Dime el radio del círculo: "));
let area = Math.PI * Math.pow(radio, 2);
alert("El área del círculo es: " + area);

let altura = parseFloat(prompt("Dime la altura del triángulo: "));
let base = parseFloat(prompt("Dime la base del triángulo: "));
let areaTriangulo = (base * altura) / 2;
alert("El área del triángulo es: " + areaTriangulo);*/

// Ejercicio 2: Calcular el valor absoluto de un número
/*let numero = parseFloat(prompt("Dime un número: "));
let valorAbsoluto = Math.abs(numero);
alert("El valor absoluto de " + numero + " es: " + valorAbsoluto);*/

// Ejercicio 3: Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente.
/*let numero = parseFloat(prompt("Dime un número: "));
if (numero === 0) {
    alert("Error: No se puede calcular el inverso de 0.");
} else {
    let inverso = 1 / numero;
    alert("El inverso de " + numero + " es: " + inverso);
}*/

// Ejercicio 4: Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas:
//a. Es de día desde las 7:30 hasta las 14:00 horas.
//b. Es tarde desde las 14:01 hasta las horas 20:30.
//c. Es noche desde las 20:31 hasta las horas 7:29.
/*let horas = parseInt(prompt("Dime la hora (0-23): "));
let minutos = parseInt(prompt("Dime los minutos (0-59): "));    
if ((horas === 7 && minutos >= 30) || (horas > 7 && horas < 14) || (horas === 14 && minutos === 0)) {
    alert("Buenos días");
} else if ((horas === 14 && minutos > 0) || (horas > 14 && horas < 20) || (horas === 20 && minutos === 0)) {
    alert("Buenas tardes");
} else {
    alert("Buenas noches");
}   */

// Ejercicio 5
/*let año = parseInt(prompt("Dime un año: "));
let esBisiesto = (año % 400 === 0) || (año % 4 === 0 && año % 100 !== 0);
if (esBisiesto) {
    alert(año + " es bisiesto.");
} else {
    alert(año + " no es bisiesto.");
}*/

// Ejercicio 6
/*let x = parseFloat(prompt("Dime la coordenada X: "));
let y = parseFloat(prompt("Dime la coordenada Y: "));

if (x === 0 && y === 0) {
    alert("El punto está en el origen.");
} else if (x === 0) {
    alert("El punto está sobre el eje Y.");
} else if (y === 0) {
    alert("El punto está sobre el eje X.");
} else if (x > 0 && y > 0) {
    alert("Primer cuadrante.");
} else if (x < 0 && y > 0) {
    alert("Segundo cuadrante.");
} else if (x < 0 && y < 0) {
    alert("Tercer cuadrante.");
} else {
    alert("Cuarto cuadrante.");
}*/

// Ejercicio 7
/*let precio = parseFloat(prompt("Introduce el precio: "));
let pagado = parseFloat(prompt("Introduce la cantidad pagada: "));
let cambio = pagado - precio;

if (cambio < 0) {
    alert("Falta dinero.");
} else {
    alert("Cambio total: " + cambio.toFixed(2) + " euros.");

    let valores = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let texto = "Cambio en billetes y monedas:\n";

    for (let i = 0; i < valores.length; i++) {
        let cantidad = Math.floor(cambio / valores[i]);
        if (cantidad > 0) {
            texto += cantidad + " de " + valores[i].toFixed(2) + "€\n";
            cambio = (cambio % valores[i]).toFixed(2);
        }
    }

    alert(texto);
}*/

// Ejercicio 8
/*let n = parseInt(prompt("¿Cuántos números quieres mostrar?"));
let suma = 0;
let texto = "Número | Cuadrado | Cubo\n";

for (let i = 1; i <= n; i++) {
    texto += i + " | " + (i ** 2) + " | " + (i ** 3) + "\n";
    suma += i;
}

alert(texto + "\nSuma total: " + suma);*/

// Ejercicio 9
/*let cantidad = parseInt(prompt("¿Cuántos números vas a introducir?"));
let suma = 0;
let menor, mayor;

for (let i = 1; i <= cantidad; i++) {
    let num = parseFloat(prompt("Número " + i + ":"));
    if (i === 1) {
        menor = num;
        mayor = num;
    }
    if (num < menor) menor = num;
    if (num > mayor) mayor = num;
    suma += num;
}

let media = suma / cantidad;
alert("Menor: " + menor + "\nMayor: " + mayor + "\nMedia: " + media);*/

// Ejercicio 10: Cambio de moneda
/*
let euros = parseFloat(prompt("Cantidad en euros: "));
let opcion = prompt("Elige moneda:\n1.Dólar\n2.Libra\n3.Yen\n4.Franco suizo\n5.Corona noruega");

switch (opcion) {
    case "1": alert(euros + "€ = " + (euros * 1.1).toFixed(2) + " dólares."); break;
    case "2": alert(euros + "€ = " + (euros * 0.86).toFixed(2) + " libras."); break;
    case "3": alert(euros + "€ = " + (euros * 157.5).toFixed(2) + " yenes."); break;
    case "4": alert(euros + "€ = " + (euros * 0.94).toFixed(2) + " francos suizos."); break;
    case "5": alert(euros + "€ = " + (euros * 11.8).toFixed(2) + " coronas noruegas."); break;
    default: alert("Opción no válida.");
}
*/

//Ejercicio 11: Nombre del mes
/*
let mes = parseInt(prompt("Dime un número de mes (1-12):"));
let nombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
               "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
if (mes >= 1 && mes <= 12) {
    alert("El mes es " + nombres[mes - 1]);
} else {
    alert("Mes no válido.");
}
*/

//Ejercicio 12: Nota en letras
/*
let nota = parseFloat(prompt("Introduce tu nota (0 a 10):"));
if (nota < 0 || nota > 10) {
    alert("Nota no válida.");
} else if (nota < 5) {
    alert("SUSPENSO");
} else if (nota < 6) {
    alert("APROBADO");
} else if (nota < 7) {
    alert("BIEN");
} else if (nota < 9) {
    alert("NOTABLE");
} else {
    alert("SOBRESALIENTE");
}
*/

//Ejercicio 13: Número de Tarot
/*
let dia = parseInt(prompt("Día de nacimiento:"));
let mes = parseInt(prompt("Mes de nacimiento:"));
let año = parseInt(prompt("Año de nacimiento:"));

let suma = dia + mes + año;
let tarot = 0;

while (suma > 9) {
    let total = 0;
    while (suma > 0) {
        total += suma % 10;
        suma = Math.floor(suma / 10);
    }
    suma = total;
}
tarot = suma;

alert("Tu número de Tarot es: " + tarot);
*/

//Ejercicio 14: Ingresos medios de hombres y mujeres
/*
let sumaH = 0, sumaM = 0;
let contH = 0, contM = 0;
let sexo;

while (true) {
    sexo = prompt("Introduce el sexo (H/M o * para terminar):").toUpperCase();

    if (sexo === "*") {
        break;
    }

    if (sexo !== "H" && sexo !== "M") {
        alert("Sexo no válido. Usa H o M.");
        continue;
    }

    let sueldo = parseFloat(prompt("Introduce el sueldo (1000 a 2000):"));
    if (sueldo < 1000 || sueldo > 2000) {
        alert("Sueldo no válido. Debe estar entre 1000 y 2000.");
        continue;
    }

    if (sexo === "H") {
        sumaH += sueldo;
        contH++;
    } else {
        sumaM += sueldo;
        contM++;
    }
}

if (contH + contM === 0) {
    alert("No se introdujeron datos.");
} else {
    let mediaH = contH ? (sumaH / contH).toFixed(2) : 0;
    let mediaM = contM ? (sumaM / contM).toFixed(2) : 0;
    alert("Media hombres: " + mediaH + "€\nMedia mujeres: " + mediaM + "€");
}
*/

//Ejercicio 15: Mínimo número de monedas para una cantidad
/*
let cantidad = parseFloat(prompt("Introduce la cantidad de dinero (en euros):"));
let valores = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
let texto = "Número mínimo de monedas:\n";

for (let i = 0; i < valores.length; i++) {
    let num = Math.floor(cantidad / valores[i]);
    if (num > 0) {
        texto += num + " moneda(s) de " + valores[i].toFixed(2) + "€\n";
        cantidad = (cantidad % valores[i]).toFixed(2);
    }
}
alert(texto);
*/

//Ejercicio 16: Conversión de número decimal a binario
/*
let numero = parseInt(prompt("Introduce un número entero positivo:"));
let binario = "";

if (numero < 0 || isNaN(numero)) {
    alert("Número no válido.");
} else if (numero === 0) {
    alert("El número binario es 0.");
} else {
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
    alert("El número en binario es: " + binario);
}
//Ejercicio 17: Comparar dos fechas (cuál es anterior)
/*
let d1 = parseInt(prompt("Día de la primera fecha:"));
let m1 = parseInt(prompt("Mes de la primera fecha:"));
let a1 = parseInt(prompt("Año de la primera fecha:"));
let d2 = parseInt(prompt("Día de la segunda fecha:"));
let m2 = parseInt(prompt("Mes de la segunda fecha:"));
let a2 = parseInt(prompt("Año de la segunda fecha:"));

if (a1 < a2 || (a1 === a2 && m1 < m2) || (a1 === a2 && m1 === m2 && d1 < d2)) {
    alert("La primera fecha es anterior.");
} else if (a1 === a2 && m1 === m2 && d1 === d2) {
    alert("Las fechas son iguales.");
} else {
    alert("La segunda fecha es anterior.");
}
*/

//Ejercicio 18: Convertir segundos a horas, minutos y segundos
/*
let totalSegundos = parseInt(prompt("Introduce un tiempo en segundos:"));
let horas = Math.floor(totalSegundos / 3600);
let minutos = Math.floor((totalSegundos % 3600) / 60);
let segundos = totalSegundos % 60;

alert(totalSegundos + " segundos = " + horas + "h " + minutos + "m " + segundos + "s");
*/

//Ejercicio 19: Juego “¿Dónde está la bolita?”
/*
let posicion = Math.floor(Math.random() * 3) + 1;
let eleccion = parseInt(prompt("¿Dónde está la bolita? (1, 2 o 3)"));

if (eleccion < 1 || eleccion > 3) {
    alert("Opción no válida. Solo 1, 2 o 3.");
} else if (eleccion === posicion) {
    alert("¡Correcto! La bolita estaba en el vaso " + posicion + ".");
} else {
    alert("Fallaste. La bolita estaba en el vaso " + posicion + ".");
}
*/
