function organizarEstoque(entrada) {
  const estoque = {};
  const lojas = entrada.split(",");

  for (let loja of lojas) {
    const partes = loja.split(":");
    const codigo = partes[0].trim();
    const quantidade = parseInt(partes[1].trim());

    // TODO: Atualize o estoque com a quantidade recebida
    // Verificamos se a loja já existe no objeto 'estoque'
   console.log(estoque, codigo, quantidade, partes, loja, lojas, resultado)
    if (estoque[codigo]) {
      estoque[codigo] += quantidade; // Se existe, soma a nova quantidade
    } else {
      estoque[codigo] = quantidade; // Se não existe, cria a chave com o valor inicial
    }
  }

  let resultado = "";

  // TODO: Intere sobre o objeto 'estoque' e crie a string de saída
  // Usamos 'for...in' para percorrer chaves de um objeto
  for (let codigo in estoque) {
    resultado += `${codigo}:${estoque[codigo]},`;
  }

  if (resultado.length > 0) {
    // Remove a última vírgula (extra) que o loop adicionou
    resultado = resultado.slice(0, -1);
  }

  return resultado;
}

// Função principal para rodar o código
function main() {
  // Simulação do gets() e print() conforme a plataforma do desafio
  const entrada = gets().trim();
  print(organizarEstoque(entrada));
}

main();