let palabra = prompt('Escribe una palabra: ')
let invertida = palabra.split('').reverse().join('')
if (palabra === invertida) {
    alert('Es un palíndromo')
} else {
    alert('No es un palíndromo')
}