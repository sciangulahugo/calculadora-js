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
        this.imprimirValorActual(this.valorActual);
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
        if (numero === '.' && this.operandoA.includes('.')) return;
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
        }
        if(signo === 'restar' && this.operandoA == '') {
            this.operandoA = '0';
            this.imprimirCalculo();
            console.log('ok4');
        } else if(this.operandoA != '' && this.operandoB != '' && this.resultado === undefined && signo == 'igual') {
            console.log('ok1');
            this.calcular(this.operandoA, this.operandoB);
        } else if(this.operandoA != '' && this.operandoB != '' && this.resultado != '' && signo == 'igual') {
            console.log('ok2');
            this.operandoA = this.resultado;
            this.calcular(this.resultado, this.operandoB);
        } else if(signo === 'igual' && this.operandoB == '') {
            console.log('ok3');
            this.operandoB = this.operandoA;
            console.log(this.valorActual);
            this.calcular(this.operandoA, this.operandoB);
        } else if(this.operandoA != '' && this.operandoB != '' && this.resultado != '' && signo != 'igual') {
            console.log('ok6')
            this.imprimirCalculo();
            var check = this.operandoA;
            this.valorActual = this.operandoB;
            this.operandoB = '';
            console.log(`${this.operandoA} = A ${this.operandoB} = B ${this.valorActual} = VA`);
            this.calcular(this.operandoA, this.valorActual);
            
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
        this.displayValorAnterior.textContent = `${this.operandoA} ${this.signos[this.tipoOperacion]} ${this.operandoB || ''} ${(this.resultado != undefined && this.operandoA != '' && this.operandoB != '') ? '=' : ''}`;
    }

}
