// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {  
    return a + b;
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function encontrarMayor(numeros) {
    return Math.max(...numeros);
}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto) {
    const vocales = texto.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirAMayusculas(strings) {
    return strings.map(s => s.toUpperCase());
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function encontrarElementosComunes(arr1, arr2) {
    return arr1.filter(elemento => arr2.includes(elemento));
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPares(numeros) {
    return numeros.filter(n => n % 2 === 0).reduce((acc, n) => acc + n, 0);
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(numeros) {
    return numeros.map(n => n ** 2);
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(texto) {
    return texto.split(" ").reverse().join(" ");
}

// 10. Crea una función que calcule el factorial de un número dado
function calcularFactorial(n) {
    if (n === 0) return 1;
    return n * calcularFactorial(n - 1);
}