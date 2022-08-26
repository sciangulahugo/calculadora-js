class Calculadora {
    sumar(operandoA, operandoB) {
        return operandoA + operandoB;
    }
    restar(operandoA, operandoB) {
        return operandoA - operandoB;
    }
    multiplicar(operandoA, operandoB) {
        return operandoA * operandoB;
    }
    dividir(operandoA, operandoB) {
        if (operandoB == 0) return 'Error';
        return operandoA / operandoB;
    }
}
