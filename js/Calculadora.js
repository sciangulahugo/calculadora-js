class Calculadora {
    sumar(operandoA, operandoB) {
        if(operandoA == operandoB * -1 || operandoA * -1 == operandoB) {
            return '0';
        }
        return operandoA + operandoB;
    }
    restar(operandoA, operandoB) {
        if(operandoA == operandoB) {
            return '0';
        }
        return operandoA - operandoB;
    }
    multiplicar(operandoA, operandoB) {
        if(operandoA == 0 || operandoB == 0) {
            return '0';
        }
        return operandoA * operandoB;
    }
    dividir(operandoA, operandoB) {
        if (operandoB == 0) return 'Error';
        return operandoA / operandoB;
    }
}
