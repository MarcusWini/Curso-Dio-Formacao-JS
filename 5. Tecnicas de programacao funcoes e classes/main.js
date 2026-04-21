// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
const {gets, print} = require('./funcoes_auxiliares')

function calcularDesconto(valorCompra) {
    const valor = parseFloat(valorCompra); 
    let descontoPercentual;

    // TODO: Verifique o valor da compra e defina o percentual de desconto:
    
    // Se o valor for menor que 50, não há desconto
    if (valor < 50.00) {
     descontoPercentual = 0; 
    // Se o valor for entre 50 e 100, o desconto é de 10%
    } else if (valor >= 50.00 && valor <= 100 ) {    // Se o valor for superior a 100, o desconto é de 20%
       }   else if (valor > 100.00)  descontoPercentual = 20;
    else  {console.log("Valor incorreto!!!");}
    

    return `Valor: R$ ${valor.toFixed(2)} -> Desconto de ${descontoPercentual}%`;
}

function main() {
    const valorCompra = gets().trim(); 
    print(calcularDesconto(valorCompra)); 
}

// Chama a função principal para executar o programa
main();