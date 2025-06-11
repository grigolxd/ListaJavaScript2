function ehDataValida(dia, mes, ano) {
  // Verifica se os valores são números inteiros positivos
  if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
    return false;
  }

  // Verifica se o mês está no intervalo válido
  if (mes < 1 || mes > 12) {
    return false;
  }

  // Define o número de dias em cada mês
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Verifica se é ano bissexto e ajusta fevereiro
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  if (bissexto && mes === 2) {
    diasPorMes[1] = 29;
  }

  // Verifica se o dia está dentro do intervalo válido para o mês
  return dia >= 1 && dia <= diasPorMes[mes - 1];
}

// Exemplos de uso:
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false (não bissexto)
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(ehDataValida(31, 12, 2023)); // true
