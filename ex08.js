function somarVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    if (acumulador[cliente]) {
      acumulador[cliente] += total;
    } else {
      acumulador[cliente] = total;
    }

    return acumulador;
  }, {});
}

// Exemplo de uso:
const vendas = [
  { cliente: "Ana", total: 150 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 100 },
  { cliente: "Maria", total: 300 },
  { cliente: "João", total: 50 }
];

const resumo = somarVendasPorCliente(vendas);
console.log(resumo);
// Saída esperada:
// { Ana: 250, João: 250, Maria: 300 }
