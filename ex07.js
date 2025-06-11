function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // faz uma cópia para não alterar o array original
    .sort((a, b) => a.preco - b.preco) // ordena pelo preço (crescente)
    .map(produto => produto.nome); // extrai apenas os nomes
}

// Exemplo de uso:
const produtos = [
  { nome: "Mouse", preco: 80 },
  { nome: "Teclado", preco: 120 },
  { nome: "Monitor", preco: 900 },
  { nome: "Cabo HDMI", preco: 35 }
];

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados); // Saída: ['Cabo HDMI', 'Mouse', 'Teclado', 'Monitor']
