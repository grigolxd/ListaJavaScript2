function fatorial(n) {
  if (n < 0) {
    throw new Error("Fatorial não definido para números negativos.");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

// Exemplos de uso:
console.log(fatorial(5)); // Saída: 120
console.log(fatorial(0)); // Saída: 1
console.log(fatorial(-3)); // Lança um erro
