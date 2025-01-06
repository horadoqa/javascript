const fs = require('fs');

// Verifica se o arquivo produtos.json existe
if (!fs.existsSync('produtos.json')) {
    // Se não existir, cria o arquivo com um array vazio
    fs.writeFileSync('produtos.json', JSON.stringify([]));
}

// Lendo o arquivo JSON
let data = fs.readFileSync('produtos.json', 'utf8');

// Convertendo o JSON para objeto JavaScript
let produtos = JSON.parse(data);

// Exibindo os produtos em formato tabular
console.table(produtos)
console.log("Total de ítens na lista: " + produtos.length)

// Calculando o valor total da compra
let total = 0;
for (let i = 0; i < produtos.length; i++) {
    // Multiplicando preço pela quantidade de cada produto
    total += produtos[i].preco * produtos[i].quantidade;
}

// Exibindo o valor total da compra
console.log('Total da compra = ' + total);
