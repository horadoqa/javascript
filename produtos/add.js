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

// Definir o nome do novo produto a ser adicionado
let produtoAdicionar = { id: 8, nome: "Açúcar", preco: 5, quantidade: 5,  descricao: "Açúcar refinado 1kg"};

// Adicionar o novo produto ao array
produtos.push(produtoAdicionar);

// Convertendo o array para JSON
let produtosJSON = JSON.stringify(produtos, null, 2);

// Salvando as alterações de volta no arquivo JSON
fs.writeFileSync('produtos.json', produtosJSON);

// Informando que o produto foi adicionado com sucesso
console.log(`O produto "${produtoAdicionar.nome}" foi adicionado com sucesso ao arquivo produtos.json!`);
