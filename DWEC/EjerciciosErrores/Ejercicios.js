// 1. Crea un función que utilice error correctamente
function dividir(a, b) {
    if (b == 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

try {
    console.log(dividir(10, 2)); 
    console.log(dividir(10, 0)); 
} catch (error) {
    console.error("Error capturado:", error.message);
}

// 2. Crea un función que utilice warning correctamente
function warn(message){
    console.warn("Advertencia:", message);
}
warn("Este es un mensaje de advertencia");

// 3. Crea un función que utilice info correctamente
function info(message){
    console.info("Información:", message);
}
info("Este es un mensaje informativo");

// 4. Crea una funcion que utilice table correctamente
function mostrarTabla(datos){
    console.table(datos);
}
const personas = [
    { nombre: "Abuelo", edad: 3000 },
    { nombre: "El simpatico", edad: 30 },
    { nombre: "josemi", edad: 21 }
];
mostrarTabla(personas);

// 5. Crea una funcion que utilice group correctamente
console.group("Usuario")
console.log("Nombre: Carlos espabila")
console.log("Edad: 19 dice ")
console.groupEnd()

// 6. Crea una funcion que utilice time correctamente
console.time("Prueba")

for (let index = 0; index < 100000000; index++) {}

console.timeEnd("Prueba")

// 7. Crea una funcion que utilize assert y compruebe si un numero es positivo.
let numero = -3
console.assert(numero > 0, "El numero no es positivo")

// 8. Crea una funcion que utilize count correctamente.
console.count("Click")
console.count("Click")
console.count("Click2")
console.count("Click")
console.countReset("Click")
console.count("Click")

// 9. Crea una funcion que utilize tracer correctamente.
//No se hace

// 10. Crea una funcion que utilize clear correctamente.
function limpiarConsola() {
    console.clear();
}

limpiarConsola();