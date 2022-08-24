class Display {
    constructor(displayValorActual, displayValorAnterior) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.valorActual = '';
        this.valorAnterior = '';
        this.operandoA = '';
        this.operandoB = '';
        this.resultado = undefined;
        this.tipoOperacion = undefined;
        this.calculadora = new Calculadora();
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'x',
            dividir: '/',
        };
    }
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
    }
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.operandoA = '';
        this.operandoB = '';
        this.resultado = undefined;
        this.displayValorActual.textContent = '';
        this.displayValorAnterior.textContent = '';
    }
    agregarNumero(numero) {
        if(this.tipoOperacion === undefined) {
            this.operandoA += numero.toString();
            console.log('A');
        } else if(this.tipoOperacion !== undefined) {
            this.operandoB += numero.toString();
            console.log('B');
        }
        if(this.tipoOperacion === undefined) {
            this.imprimirValorActual(this.operandoA);
        } else {
            this.imprimirValorActual(this.operandoB);
        }
    }
    operar(signo) {
        if(signo !== 'igual') {
            this.tipoOperacion = signo;
        } else if(this.operandoA != '' && this.operandoB != '' && this.resultado === undefined) {
            this.calcular(this.operandoA, this.operandoB);
        } else if(this.operandoA != '' && this.operandoB != '' && this.resultado != '') {
            this.operandoA = this.resultado;
            this.calcular(this.resultado, this.operandoB);
        }
        this.imprimirCalculo();
    }
    calcular(operandoA, operandoB) {
        operandoA = parseFloat(operandoA);
        operandoB = parseFloat(operandoB);
        this.resultado = this.calculadora[this.tipoOperacion](operandoA, operandoB);
        console.log(this.resultado);
        this.imprimirValorActual(this.resultado);
    }
    imprimirValorActual(valor) {
        this.displayValorActual.textContent = valor;
    }
    imprimirCalculo() {
        this.displayValorAnterior.textContent = `${this.operandoA} ${this.signos[this.tipoOperacion]} ${this.operandoB || ''}`;
    }

}
