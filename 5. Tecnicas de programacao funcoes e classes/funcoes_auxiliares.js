//// Lista de entradas simuladas (substitua os valores para testar diferentes cenários)
const entradas = ['LOJA1:10,LOJA2:5,LOJA1:3:10'];
let i=0;

/**
 * Lê a próxima linha do array de entradas.
 */
function gets() {
    const valor = entradas[i];
    i++;
    return String(valor);
}

/**
 * Imprime um valor no console.
 */
function print(texto) {
    console.log(texto);
}

// Exporta as funções para que possam ser usadas em outros arquivos via 'require'
module.exports = {gets, print}; // exportando um objeto que tem as funcoes get e print