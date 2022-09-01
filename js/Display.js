class Display {
    constructor(displayValorActual, displayValorAnterior) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.operandoA = '';
        this.operandoB = '';
        this.valorActual = '';
        this.valorAnterior = '';
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
        
    }
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.operandoA = '';
        this.operandoB = '';
        this.displayValorActual.textContent = '';
        this.displayValorAnterior.textContent = '';
    }
    agregarNumero(numero) {
        if(numero === '.' && this.operandoA.includes('.')) {
            //si detectamos que tiene un punto, no le dejamos agregar mas elementos.
            return;
        }
        if(this.tipoOperacion === undefined) {
            this.operandoA += numero.toString();
            this.imprimirActual(this.operandoA,'','');
            console.log('A');
        } else if(this.tipoOperacion !== undefined) {
            this.operandoB += numero.toString();
            this.imprimirActual(this.operandoB);
            console.log('B');
        }
    }
    operar(signo) {
        if(signo !== 'igual') {
            //guardamos la operacion a realizar.
            this.tipoOperacion = signo;
            console.log(this.tipoOperacion);
            console.log('ok1'); /*//////////////*/
        } 
        //en caso de arrancar escribiendo la operacion sin cargar el operandoA.
        if(signo !== 'igual' && this.operandoA === '' && this.operandoB === '') {
            this.operandoA = '0'; //todo string, luego al hacer el calculo recien convertimos a float.
            this.imprimirAnterior(this.operandoA, this.signos['restar'], '')
            console.log('ok2'); /*//////////////*/
        } 
        //if(signo !== 'igual' && )
        //en caso de querer realizar una operacion.
        if(signo === 'igual') {
            console.log('operandoA = ' + this.operandoA + ' | operandoB = ' + this.operandoB);
            //si no cargo el operadorB y le doy al boton de igual, entonces al oprandoB toma el valor que se muestra en pantalla.
            if(this.valorActual === this.operandoA) {
                this.operandoB = this.operandoA;
                console.log('ok3'); /*//////////////*/
            }
            
            //cuando empiezo a apretar el boton de igual como loco.
            /*if(this.calculadora[this.tipoOperacion](parseFloat(this.operandoA), parseFloat(this.operandoB)) == this.valorActual) {
                this.operandoA = this.valorActual; //aca posible error
                console.log(this.operandoA + ' error ' + this.operandoB);
                this.imprimirActual(this.calculadora[this.tipoOperacion](parseFloat(this.operandoA), parseFloat(this.operandoB)));
                this.imprimirAnterior(this.operandoA, this.signos[this.tipoOperacion], this.operandoB);
            } else {*/
                //esto estaba fuera del else
                this.imprimirActual(this.calculadora[this.tipoOperacion](parseFloat(this.operandoA), parseFloat(this.operandoB)));
                this.imprimirAnterior(this.operandoA, this.signos[this.tipoOperacion], this.operandoB);
                console.log('ok4'); ////////////////
            //}
            console.log('operandoA = ' + this.operandoA + ' | operandoB = ' + this.operandoB);
        }
        if(signo !== 'igual') {
            //en caso de que de empezar a cargar los valores
            if(this.operandoA !== '' && this.operandoB === '') {
                console.log('ok5'); /*//////////////*/
                this.imprimirAnterior(this.operandoA, this.signos[this.tipoOperacion],'');
            } else if(this.operandoA !== '' && this.operandoB != '') {
                console.log('ok6'); /*//////////////*/
                this.operandoA = this.valorActual;
                this.operandoB = '';
                this.imprimirAnterior(this.operandoA, this.signos[this.tipoOperacion], '');
            }
        }
    }
    imprimirActual(valor) {
        //imprimimos primero los valores del operando A
        this.displayValorActual.textContent = `${valor || ''}`;
        this.valorActual = valor;
    }
    imprimirAnterior(operandoA, operacion, operandoB) {
        this.displayValorAnterior.textContent = `${operandoA || ''} ${operacion || ''} ${operandoB || ''} ${this.operandoA != '' && this.operandoB != '' ? ' = ' : ''}`
    }
}