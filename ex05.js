function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId); // Cancela o timer anterior, se existir
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Executa a função com os mesmos argumentos e contexto
    }, delay);
  };
}

// Exemplo de uso:
function enviarBusca() {
  console.log("Função executada após pausa.");
}

const buscaDebounce = debounce(enviarBusca, 1000);

// Simula várias chamadas seguidas:
buscaDebounce();
buscaDebounce();
buscaDebounce();
// Somente a última chamada (depois de 1 segundo sem novas chamadas) executará enviarBusca
// Você pode testar chamando buscaDebounce várias vezes rapidamente
// e verá que "Função executada após pausa." só será exibido uma vez, após 1 segundo.