// 1. Crea un array que almacene cinco animales
let animales = ['perro', 'gato', 'pez', 'tortuga', 'serpiente']

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift('lagarto')
animales.push('jirafa')
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1)
console.log(animales)

// 4. Crea un set que almacene cinco libros
let libreria = new Set()

// 5. Añade dos más. Uno de ellos repetido
libreria.add('Harry Potter')
libreria.add('Percy Jackson')
console.log(libreria)

// 6. Elimina uno concreto a tu elección
libreria.delete('Harry Potter')

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map()
meses.set(1, 'Enero')
meses.set(2, 'Febrero')

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
    console.log(meses.get(5))
} else {
    console.log('El mes número 5 no existe')
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set(6, ['Junio', 'Julio', 'Agosto'])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = ['Elemento1', 'Elemento2', 'Elemento3']
let set = new Set(array)
let map = new Map()
map.set('miSet', set)