//1	Declaración e Inicialización	Crea un array meses con los nombres de los 12 meses. Imprime el mes en la posición 5 (recuerda que empiezan en 0).														
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
console.log(meses[5]);
//2	Manipulación Extrema	Añade 'Diciembre Bis' al final de meses y elimina 'Enero' del principio. Muestra el array final.	
meses.push('Diciembre Bis');
meses.shift();
console.log(meses);													
//3	Búsqueda y Posición	Dado un array ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla']. Pide al usuario que introduzca una ciudad y usa indexOf() para indicar su posición. Si no está, informa de ello.		
const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla'];
const ciudadUsuario = prompt("Introduce una ciudad:");
const posicion = ciudades.indexOf(ciudadUsuario);
if (posicion !== -1) {
    console.log(`La ciudad ${ciudadUsuario} está en la posición ${posicion}.`);
} else {
    console.log(`La ciudad ${ciudadUsuario} no está en el array.`);
}												
//4	Transformación con map()	Dado un array productos = [{nombre: 'Portátil', precio: 1200}, {nombre: 'Ratón', precio: 25}, {nombre: 'Monitor', precio: 300}]. Usa map() para crear un nuevo array llamado nombresProductos que contenga solo los nombres.
const productos = [
    {nombre: 'Portátil', precio: 1200},
    {nombre: 'Ratón', precio: 25},
    {nombre: 'Monitor', precio: 300}
];
const nombresProductos = productos.map(producto => producto.nombre);
//5	Filtrado con filter()	Basándote en el array productos anterior, usa filter() para crear un array productosCaros que solo contenga los productos con un precio superior a 100.
const productosCaros = productos.filter(producto => producto.precio > 100);
//6	Composición con reduce()	Usa reduce() para calcular la suma total de los precios de todos los productos en el array productos.
const sumaTotal = productos.reduce((acc, producto) => acc + producto.precio, 0);
//7	Concatenación y Ordenación	Crea dos arrays, frontend = ['HTML', 'CSS'] y backend = ['Node', 'SQL']. Concaténalos usando el operador spread (...) en un array stackCompleto. Añade 'JavaScript' y luego ordena alfabéticamente el array final.
const frontend = ['HTML', 'CSS'];
const backend = ['Node', 'SQL'];
const stackCompleto = [...frontend, ...backend, 'JavaScript'];
stackCompleto.sort();
//8	Matrices 2D y Desestructuración	Crea una matriz (array de arrays) tablero = [['x', 'o', 'x'], ['o', 'x', 'o'], ['x', 'o', 'x']]. Imprime el elemento central ('x'). Desestructura el primer array para obtener solo los dos primeros elementos en variables separadas.
const tablero = [['x', 'o', 'x'], ['o', 'x', 'o'], ['x', 'o', 'x']];
console.log(tablero[1][1]);
const [a, b] = tablero[0];
//9	find() y Objetos Complejos	En el array productos, usa find() para localizar y mostrar el objeto completo del producto con el nombre 'Portátil'.
const productoPortatil = productos.find(producto => producto.nombre === 'Portátil');
console.log(productoPortatil);
//10	Creación de una Función Universal	Escribe una función procesarNotas(listaNotas) que reciba un array de notas (números) y devuelva un objeto con tres propiedades: media (usando reduce), aprobados (usando filter) y notas10 (usando includes para verificar si alguien tiene un 10).
function procesarNotas(listaNotas) {
    const media = listaNotas.reduce((acc, nota) => acc + nota, 0) / listaNotas.length;
    const aprobados = listaNotas.filter(nota => nota >= 5);
    const notas10 = listaNotas.includes(10);
    return { media, aprobados, notas10 };
}
const resultadoNotas = procesarNotas([7, 8.5, 5, 9, 6.5, 10]);
console.log(resultadoNotas);    
