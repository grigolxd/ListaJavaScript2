const texto = "olá olá mundo mundo";
const palavras = texto.split(" ");
const unicas = [];

for (let i = 0; i < palavras.length; i++) {
  let palavra = palavras[i];
  let repetida = false;

  // Verifica se a palavra já foi encontrada antes
  for (let j = 0; j < unicas.length; j++) {
    if (palavra === unicas[j]) {
      repetida = true;
      break;
    }
  }

  // Se não for repetida, adiciona ao array de únicas
  if (!repetida) {
    unicas.push(palavra);
  }
}

console.log(unicas); // Saída: [ 'olá', 'mundo' ]
