function mostrarMenu() {
    const opciones = ['1', '2', '3', '4'];
    const operaciones = ['sumar', 'restar', 'multiplicar', 'dividir'];
    let opcion = prompt('Elige una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir');
    if (!opciones.includes(opcion)) {
        alert('Opción no válida. Por favor, elige una opción del 1 al 4.');
        return mostrarMenu();
    }
    return operaciones[opcion - 1];
}
const operacion = mostrarMenu();

let resultado;
const num1 = parseFloat(prompt('Introduce el primer número:'));
const num2 = parseFloat(prompt('Introduce el segundo número:'));

switch (operacion) {
    case 'sumar':
        resultado = num1 + num2;
        break;
    case 'restar':
        resultado = num1 - num2;
        break;
    case 'multiplicar':
        resultado = num1 * num2;
        break;
    case 'dividir':
        do{
            alert('Error: No se puede dividir por cero');
            num2 = parseFloat(prompt('Introduce el segundo número (distinto de 0):'));
        }while(num2 == 0)
        resultado = num1 / num2;
        break;
    default:
        resultado = 'Operación no válida';
}

alert('La resultado de los numeros: '+ num1 + ' y ' + num2 + '= ' + resultado);