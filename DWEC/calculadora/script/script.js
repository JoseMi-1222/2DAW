const pantalla = document.getElementById('pantalla');

function agregar(valor) {
  pantalla.value += valor;
}

function borrarTodo() {
  pantalla.value = '';
}

function mostrarResultado() {
pantalla.value = eval(pantalla.value);
 
}

