// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

function calcularDesconto(valorCompra) {
    const valor = parseFloat(valorCompra); 
    let descontoPercentual;

    // TODO: Verifique o valor da compra e defina o percentual de desconto:
   
      // Se o valor for menor que 50, não há desconto

     // Se o valor for entre 50 e 100, o desconto é de 10%
      
    // Se o valor for superior a 100, o desconto é de 20%

    

    return `Desconto de ${descontoPercentual}%`;
}

function main() {
    const valorCompra = gets().trim(); 
    print(calcularDesconto(valorCompra)); 
}

// Chama a função principal para executar o programa
main();