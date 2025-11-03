/* Ejercicio 4
import { saludar } from './funciones.js';

saludar();

// Ejercicio 5
import { PI } from './constantes.js';

console.log(PI);

// Ejercicio 6
import { Persona } from './Persona.js';

const p1 = new Persona("Ana");
console.log(p1.nombre);

// Ejercicio 8
import Coche, { sumar, EDAD_MINIMA } from './paquete.js';

console.log(sumar(2, 3));
console.log(EDAD_MINIMA);

const miCoche = new Coche("Toyota");
console.log(miCoche.marca);*/

// Ejercicio 10
import { saludar, PI, Persona } from './carpeta/index.js';

saludar();
console.log(PI);
const p2 = new Persona("Luis");
console.log(p2.nombre);




