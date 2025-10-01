let contador = 0;
let cantidad;

let mensajeError = prompt("Introduce el mensaje personalizado para cuando falles 3 veces:");

do {
    cantidad = parseInt(prompt("¿Cuántos números quieres sumar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Eso no es un número válido");
        contador++;
        if (contador >= 3) {
            alert(mensajeError);
        }
    }
} while ((isNaN(cantidad) || cantidad <= 0));

let suma = 0;

for (let i = 0; i < cantidad; i++) {
    let num;
    do {
        num = parseFloat(prompt(`Dime el número ${i + 1}: `));
        if (isNaN(num)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert(mensajeError);
            }
        }
    } while (isNaN(num));
    suma += num;
}
alert("La suma de los " + cantidad + " números es: " + suma);

/*do {
    let num;
    do {
        num = parseFloat(prompt("Dime un número: "));
        if (isNaN(num)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert("CAPULLO PON UN NUMERO");
            }
        }
    } while (isNaN(num));

    let num2;
    do {
        num2 = parseFloat(prompt("Dime otro número: "));
        if (isNaN(num2)) {
            alert("Eso no es un número");
            contador++;
            if (contador >= 3) {
                alert("CAPULLO PON UN NUMERO");
            }
        }
    } while (isNaN(num2));

    
    alert("La suma de " + num + " y " + num2 + " es: " + (num + num2));
    
} while (contador < 3);//*/



