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

// Definir o ID do produto a ser removido
let idProdutoRemover = 4;  // Exemplo: removendo o produto com ID 4

// Remover o produto pelo ID
let index = produtos.findIndex(produto => produto.id === idProdutoRemover);
if (index !== -1) {
    produtos.splice(index, 1);
    // Confirmar que o produto foi removido com sucesso
    console.log(`O item com ID ${idProdutoRemover} foi removido com sucesso!`);
} else {
    console.log(`O item com ID ${idProdutoRemover} não foi encontrado.`);
}

// Salvar as alterações de volta no arquivo JSON
let produtosJSON = JSON.stringify(produtos, null, 2);
fs.writeFileSync('produtos.json', produtosJSON);
