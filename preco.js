// ARRAY

// Um array (ou vetor, em alguns contextos) é uma estrutura de dados que armazena uma coleção de elementos do mesmo tipo, 
// organizados de forma sequencial.

// Os elementos dentro de um array são acessados por meio de índices numéricos, 
// com o primeiro índice geralmente sendo 0 (zero) na maioria das linguagens de programação.

// produtos = ["Arroz", "Feijão", "Carne", "Suco", "Leite", "Refrigerante"]

// console.log(produtos[0])

produtos = [
    {nome: "Arroz", preco: 9},
    {nome: "Feijão", preco: 8},
    {nome: "Carne", preco: 90},
    {nome: "Suco", preco: 15},
    {nome: "Leite", preco: 6},
    {nome: "Refrigerante", preco: 10},
    {nome: "Macarrão", preco: 5 }
]

// Removendo o item "Carne" na posição 2
produtos.splice(2, 1);

// Novo produto a ser adicionado
let novoProduto = { nome: "ovos", preco: 25 };

// Adicionando o novo produto ao array
produtos.push(novoProduto);

// Exibindo o array atualizado
console.log(produtos);

// console.log(produtos[5].preco)

// produtos.forEach(function(produto) {
//     console.log(produto.nome + ": " + produto.preco + " reais");
// });

let total = 0;

for (let i = 0; i < produtos.length; i++) {
    total = total + produtos[i].preco;
}

console.log('Total da compra = ' + total);