// Se você estiver trabalhando com Node.js (JavaScript no servidor), 
//pode usar o módulo fs para gravar esse arquivo JSON no disco. 
// Em um ambiente de navegador, você precisaria enviar os dados para um servidor e criar o arquivo lá.

const fs = require('fs');

let produtos = [
    { nome: 'Arroz', preco: 9 },
    { nome: 'Feijão', preco: 8 },
    { nome: 'Suco', preco: 15 },
    { nome: 'Leite', preco: 6 },
    { nome: 'Refrigerante', preco: 10 },
    { nome: 'Macarrão', preco: 5 },
    { nome: 'ovos', preco: 25 }
  ]

// Convertendo o array de produtos para JSON
// O "null, 2" ajuda a formatar o JSON com indentação para ficar legível.
let produtosJSON = JSON.stringify(produtos, null, 2);  

// Salvando no arquivo "produtos.json"
fs.writeFileSync('produtos.json', produtosJSON);

console.log("Arquivo JSON criado com sucesso!");

