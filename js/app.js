const displayValorActual = document.getElementById('valor-actual');
const displayValorAnterior = document.getElementById('valor-anterior');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

// displayValorActual.textContent = '2';
// displayValorAnterior.textContent = '1 + 1 = ';

const display = new Display(displayValorActual, displayValorAnterior);
botonesNumero.forEach((boton) => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach((boton) => {
    boton.addEventListener('click', () => {
        display.operar(boton.value);
    });
});
