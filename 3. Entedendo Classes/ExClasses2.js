class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    classificaIMC() {
        const imc = this.calcularIMC();
        if (this.calcularIMC() < 18.5) return 'Abaixo do peso';
        else if (imc >= 18.5 && imc < 25) return 'Peso Normal';
        else if (this.calcularIMC() >= 25 && this.calcularIMC() < 30) return 'Acima do Peso';
        else if (this.calcularIMC() >= 30 && this.calcularIMC() < 40) return 'Obeso';
        else if (this.calcularIMC() >= 40) return 'Obesidade Grave';
        else return 'Valor digitado errado';
    }
}

const pessoa1 = new Pessoa('Andrey', 52, 1.72);
const pessoa2 = new Pessoa('Marcus', 68, 1.68);
const pessoa3 = new Pessoa('Layza', 57, 1.63);
const pessoa4 = new Pessoa('Fernando', 130, 1.80);

console.log(pessoa1.calcularIMC());
console.log(pessoa2.calcularIMC());
console.log(pessoa3.calcularIMC());
console.log(pessoa4.calcularIMC());


console.log(pessoa1.classificaIMC());
console.log(pessoa2.classificaIMC());
console.log(pessoa3.classificaIMC());
console.log(pessoa4.classificaIMC());