const entradas = [49.99,75.00,150.00];

let i=0;

function gets() {
    const valor = entradas[i];
    i++;
    
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print}; // exportando um objeto que tem as funcoes get e print