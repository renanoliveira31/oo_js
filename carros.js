function Veiculo(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
    
    this.descricao = function() {
        return `Veículo ${this.marca} ${this.modelo}, cor ${this.cor}`;
    }
}

function Carro(marca, modelo, cor, custo) {
    Veiculo.call(this, marca, modelo, cor);

    let _custo = custo;
    this.getCusto = function() {
        return _custo;
    }

    this.setCusto = function(valor) {
        if(typeof valor === 'number') {
            _custo = valor;
        }   
    }

    this.aumentoInflacao = function () {
        const novoCusto = this.getCusto() * 1.3;
        _custo = novoCusto;
    }
}

function Bicicleta(marca, modelo, cor, aro, custo) {
    Veiculo.call(this, marca, modelo, cor);
    this.aro = aro;

    let _custo = custo;
    this.getCusto = function() {
        return _custo;
    }

    this.setCusto = function(valor) {
        if(typeof valor === 'number') {
            _custo = valor;
        }   
    }

    this.aumentoInflacao = function () {
        const novoCusto = this.getCusto() * 1.7;
        _custo = novoCusto;
    }

    this.descricao = function() {
        return `Bicicleta ${this.marca} ${this.modelo}, aro ${this.aro}`;
    }
}


function Moto(marca, modelo, cilindradas, custo) {
    Veiculo.call(this, marca, modelo);
    this.cilindradas = cilindradas;

    let _custo = custo;
    this.getCusto = function() {
        return _custo;
    }

    this.setCusto = function(valor) {
        if(typeof valor === 'number') {
            _custo = valor;
        }   
    }

    this.aumentoInflacao = function () {
        const novoCusto = this.getCusto() * 1.05;
        _custo = novoCusto;
    }
    
    this.descricao = function() {
        return `Moto ${this.marca} ${this.modelo}, cilindradas ${this.cilindradas}`;
    }
}

const carro1 = new Carro('Toyota', 'Corolla', 'Prata', 20000);
const moto1 = new Moto('Yamaha', 'MT-07', '700', 10000);
const bicicleta1 = new Bicicleta('Caloi', 'Andes', 'branca', '29', 3500);

carro1.aumentoInflacao();
console.log(carro1.descricao(),carro1.getCusto()); 

moto1.aumentoInflacao();
console.log(moto1.descricao(),moto1.getCusto());

moto1.aumentoInflacao();
console.log(bicicleta1.descricao(),bicicleta1.getCusto()); 