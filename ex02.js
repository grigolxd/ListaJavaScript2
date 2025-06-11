const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativa;
let tentativas = 0;

// Garante que o script rode no navegador ou em ambiente Node com prompt
const prompt = typeof window !== 'undefined' ? window.prompt : require('readline-sync').question;

console.log("Adivinhe o número entre 1 e 100!");

while (true) {
  tentativa = parseInt(prompt("Digite seu palpite: "), 10);
  tentativas++;

  if (isNaN(tentativa)) {
    console.log("Por favor, digite um número válido.");
    continue;
  }

  if (tentativa < numeroSecreto) {
    console.log("Mais alto!");
  } else if (tentativa > numeroSecreto) {
    console.log("Mais baixo!");
  } else {
    console.log(`Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`);
    break;
  }
}

// Para esse exercicio, é necessario instalar o pacote readline-sync se estiver rodando em Node.js
// npm install readline-sync é o comando para instalar o pacote
// Se estiver rodando no navegador, o prompt já está disponível globalmente. 