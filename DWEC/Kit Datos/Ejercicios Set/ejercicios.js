//7. Crea un Set llamado tagsUnicos. Añade los tags "DAW", "JavaScript", "HTML" y "DAW" (sí, repítelo). Imprime el Set y su propiedad size para comprobar que "DAW" solo aparece una vez.		
const tagsUnicos = new Set();
tagsUnicos.add("DAW");
tagsUnicos.add("JavaScript");
tagsUnicos.add("HTML");
tagsUnicos.add("DAW");  										
//8. Verifica si el tag "CSS" existe en tagsUnicos usando has(). Elimina el tag "HTML" usando delete().
console.log(tagsUnicos.has("CSS"));
tagsUnicos.delete("HTML");
console.log(tagsUnicos);

//9. Dado un array con valores repetidos: colores = ['rojo', 'azul', 'verde', 'rojo', 'amarillo', 'azul']. Crea un nuevo array sin duplicados a partir de este array usando el constructor new Set() y el operador spread (...).
const colores = ['rojo', 'azul', 'verde', 'rojo', 'amarillo', 'azul'];
const coloresUnicos = [...new Set(colores)];
console.log(coloresUnicos);

//10. Define dos Sets: frontend = new Set(['HTML', 'CSS', 'JS']) y backend = new Set(['JS', 'Node', 'SQL']). Escribe código para encontrar los elementos que están en ambos sets (la intersección).
const frontend = new Set(['HTML', 'CSS', 'JS']);
const backend = new Set(['JS', 'Node', 'SQL']);
const interseccion = [...frontend].filter(item => backend.has(item));
console.log(interseccion);