function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const chave = JSON.stringify(args);

    if (cache.has(chave)) {
      return cache.get(chave); // Retorna o resultado armazenado
    }

    const resultado = fn.apply(this, args);
    cache.set(chave, resultado); // Armazena no cache
    return resultado;
  };
}

// Exemplo de uso:
function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const fatorialMemoizado = memoize(fatorial);

console.log(fatorialMemoizado(5)); // Calcula e armazena
console.log(fatorialMemoizado(5)); // Retorna do cache instantaneamente
console.log(fatorialMemoizado(6)); // Calcula e armazena, pois é um novo argumento
console.log(fatorialMemoizado(6)); // Retorna do cache instantaneamente