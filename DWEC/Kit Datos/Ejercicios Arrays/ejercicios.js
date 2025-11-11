//1. Crea un array peliculas con 5 títulos. Accede e imprime el título de la segunda película.												
const peliculas = ["Inception", "Interstellar", "Dunkirk", "Tenet", "Memento"];
console.log(peliculas[1]);

//2. Añade un nuevo título al final de peliculas usando push(). Elimina el primer elemento usando shift().
peliculas.push("The Prestige");
peliculas.shift();

//3. Utiliza un bucle for...of o forEach() para imprimir todos los títulos. Luego, verifica si la película "Avatar" está en el array usando includes().
for (const pelicula of peliculas) {
    console.log(pelicula);
}
console.log(peliculas.includes("Avatar"));

//4. Dado un array de números notas = [7, 8.5, 5, 9, 6.5], usa map() para crear un nuevo array con las notas redondeadas al entero superior (Math.ceil). Usa filter() para obtener solo las notas aprobadas (>= 5).
const notas = [7, 8.5, 5, 9, 6.5];
const notasRedondeadas = notas.map(nota => Math.ceil(nota));
const notasAprobadas = notasRedondeadas.filter(nota => nota >= 5);

//5. Usa reduce() para calcular la nota media de las notas.
const notaMedia = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

//6. Dado un array de objetos alumnos = [{nombre: 'Ana', edad: 20}, {nombre: 'Luis', edad: 22}], usa map() para obtener un array solo con los nombres. Usa filter() para obtener solo los alumnos mayores de 21 años.
const alumnos = [{nombre: 'Ana', edad: 20}, {nombre: 'Luis', edad: 22}];
const nombres = alumnos.map(alumno => alumno.nombre);
const mayoresDe21 = alumnos.filter(alumno => alumno.edad > 21);