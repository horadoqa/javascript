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

// Definir o nome do produto a ser removido
let produtoRemover = "Leite";

// Remover o produto "Leite"
let index = produtos.findIndex(produto => produto.nome === produtoRemover);
if (index !== -1) {
    produtos.splice(index, 1);
    // Confirmar que o produto foi removido com sucesso
    console.log(`O item "${produtoRemover}" foi removido com sucesso!`);
} else {
    console.log(`O item "${produtoRemover}" não foi encontrado.`);
}

// Salvar as alterações de volta no arquivo JSON
let produtosJSON = JSON.stringify(produtos, null, 2);
fs.writeFileSync('produtos.json', produtosJSON);
