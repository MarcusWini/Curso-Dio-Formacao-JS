//Exercicios DIO 
class Carro {
    constructor(marca, modelo, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGasto(distanciaEmKM, precoCombustivel) {
        return distanciaEmKM * this.gastoMedioPorKm * precoCombustivel; }
}
const carro1 = new Carro('Nissan', 'Kicks', 'preto', 1/12);
const carro2 = new Carro('VW','Gol', 'preto', 1/18);

console.log(`O gasto de ${carro1.marca} ${carro1.modelo} foi de R$`,(carro1.calcularGasto(70, 5)).toFixed(2));
console.log(`O gasto de ${carro2.marca} ${carro2.modelo} foi de R$`,(carro2.calcularGasto(70, 5)).toFixed(2));
