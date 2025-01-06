const fs = require('fs');

// Lendo o arquivo JSON
let data = fs.readFileSync('produtos.json', 'utf8');

// Convertendo o JSON para objeto JavaScript
let produtos = JSON.parse(data);

console.table(produtos);  // Agora você pode usar o array de produtos como um objeto JavaScript.