//1	Creación con Duplicados	Crea un Set llamado idsUnicos a partir del array [101, 105, 101, 103, 105]. Imprime el Set resultante y verifica su propiedad size.	
const idsArray = [101, 105, 101, 103, 105];
const idsUnicos = new Set(idsArray);
console.log(idsUnicos);
console.log(idsUnicos.size);												
//2	Adición y Comprobación	Añade el número 107 a idsUnicos. Intenta añadir de nuevo el número 105. ¿Cambió el tamaño? Demuéstralo imprimiendo idsUnicos.size.
idsUnicos.add(107);
idsUnicos.add(105);
console.log(idsUnicos.size);
//3	Existencia	Usa el método has() para comprobar si el ID 103 existe en el Set. Luego, comprueba si existe el ID 999.
console.log(idsUnicos.has(103));
console.log(idsUnicos.has(999));    
//4	Eliminación Condicional	Elimina el ID 107 si existe en el Set. Usa un if junto con has() para asegurarte de que solo lo intentas borrar si está.	
if (idsUnicos.has(107)) {
    idsUnicos.delete(107);
}   
console.log(idsUnicos);												
//5	Conversión a Array	Convierte el idsUnicos a un array arrayIds usando el operador spread (...). Muestra el array.
const arrayIds = [...idsUnicos];
console.log(arrayIds);  
//6	Iteración	Utiliza un bucle for...of para recorrer el Set idsUnicos e imprimir cada ID con un mensaje: "El ID encontrado es: [ID]".	
for (const id of idsUnicos) {
    console.log(`El ID encontrado es: ${id}`);
}
//7	Intersección de Conjuntos	Dados dos Sets: desarrolladores = new Set(['Juan', 'Ana', 'Carlos']) y diseñadores = new Set(['Ana', 'Pedro', 'Laura']). Escribe código para obtener un nuevo Set con los nombres que son comunes (la intersección).
const desarrolladores = new Set(['Juan', 'Ana', 'Carlos']);
const diseñadores = new Set(['Ana', 'Pedro', 'Laura']);
const interseccionNombres = new Set(
    [...desarrolladores].filter(nombre => diseñadores.has(nombre))
);
console.log(interseccionNombres);
    
//8	Diferencia de Conjuntos	Usando los Sets anteriores, escribe código para obtener un nuevo Set con los nombres que son solo desarrolladores (la diferencia: desarrolladores - diseñadores).
const diferenciaNombres = new Set(
    [...desarrolladores].filter(nombre => !diseñadores.has(nombre))
);
console.log(diferenciaNombres);

//9	Uso de Objetos en un Set	Crea un Set llamado puntos. Añade dos objetos de coordenadas iguales, por ejemplo, {x: 10, y: 20} dos veces. ¿Cuántos elementos tiene el Set? (Nota: Explica a tus alumnos el porqué del resultado: los objetos son referencias únicas).
const puntos = new Set();
puntos.add({x: 10, y: 20});
puntos.add({x: 10, y: 20});
console.log(puntos.size); // 2

//10	Normalización de Tags	Crea una función normalizarTags(lista) que reciba un array de tags (['js', 'JS', 'javascript', 'Js']) y devuelva un Set de tags únicos convertidos a minúsculas ({'js', 'javascript'}).
function normalizarTags(lista) {
    return new Set(lista.map(tag => tag.toLowerCase()));
}