// Se você estiver trabalhando com Node.js (JavaScript no servidor), 
//pode usar o módulo fs para gravar esse arquivo JSON no disco. 
// Em um ambiente de navegador, você precisaria enviar os dados para um servidor e criar o arquivo lá.

const fs = require('fs');

// Array de produtos com ID e quantidade
// Array de produtos com ID, quantidade e descrição
let produtos = [
  { id: 1, nome: 'Arroz', preco: 9, quantidade: 1, descricao: 'Arroz branco, 5kg.' },
  { id: 2, nome: 'Feijão', preco: 8, quantidade: 2, descricao: 'Feijão carioca, pacote de 1kg.' },
  { id: 3, nome: 'Suco', preco: 15, quantidade: 5, descricao: 'Suco de laranja natural, 1 litro.' },
  { id: 4, nome: 'Leite', preco: 6, quantidade: 5, descricao: 'Leite integral, 1 litro.' },
  { id: 5, nome: 'Refrigerante', preco: 10, quantidade: 3, descricao: 'Refrigerante de cola, 2 litros.' },
  { id: 6, nome: 'Macarrão', preco: 5, quantidade: 10, descricao: 'Macarrão espaguete, 500g.' },
  { id: 7, nome: 'Ovos', preco: 10, quantidade: 1, descricao: 'Ovos caipiras, dúzia.' }
];

// Convertendo o array de produtos para JSON
// O "null, 2" ajuda a formatar o JSON com indentação para ficar legível.
let produtosJSON = JSON.stringify(produtos, null, 2);  

// Salvando no arquivo "produtos.json"
fs.writeFileSync('produtos.json', produtosJSON);

console.log("Arquivo JSON criado com sucesso!");

