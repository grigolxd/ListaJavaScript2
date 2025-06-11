function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}

function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

// Exemplo de uso:
const pares = [["nome", "Ana"], ["idade", 28], ["profissao", "dev"]];
const obj = paresParaObjeto(pares);
console.log("Objeto criado a partir do array de pares:", obj);

const novoArray = objetoParaPares(obj);
console.log("Array de pares criado a partir do objeto:", novoArray);
// Saída esperada:
// Objeto criado a partir do array de pares: { nome: 'Ana', idade: 28, profissao: 'dev' }