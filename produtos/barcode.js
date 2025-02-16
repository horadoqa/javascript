function buscarProduto() {
    // Obtém o ID do produto digitado pelo usuário
    const produtoId = document.getElementById('produtoId').value;
  
    if (!produtoId) {
      alert("Por favor, insira o ID do produto.");
      return;
    }
  
    // Fazendo uma requisição AJAX para carregar os produtos do arquivo JSON
    fetch('produtos.json')
      .then(response => response.json())
      .then(produtos => {
        // Encontrar o produto pelo ID
        const produto = produtos.find(p => p.id == produtoId);
  
        if (produto) {
          // Chama a função para gerar o código de barras para o produto encontrado
          gerarCodigoDeBarras(produto);
        } else {
          alert("Produto não encontrado.");
        }
      })
      .catch(error => {
        console.error("Erro ao carregar os produtos:", error);
        alert("Erro ao carregar os produtos.");
      });
  }
  
  function gerarCodigoDeBarras(produto) {
    const container = document.getElementById("produtos-container");
  
    // Limpa o container antes de adicionar o novo código de barras
    container.innerHTML = '';
  
    // Criando um novo elemento div para o produto
    const divProduto = document.createElement("div");
    divProduto.classList.add("produto");
  
    // Adicionando o nome e a descrição do produto
    divProduto.innerHTML = `
      <h3>${produto.nome} - ${produto.descricao}</h3>
      <p>Preço: R$ ${produto.preco}, Quantidade: ${produto.quantidade}</p>
    `;
  
    // Criando o elemento SVG para o código de barras
    const svgBarcode = document.createElement("svg");
    JsBarcode(svgBarcode, produto.id.toString(), {
      format: "CODE128", // Usando CODE128 como formato
      lineColor: "#0aa",
      width: 2,
      height: 100,
      displayValue: false // Não mostrar o valor abaixo do código de barras
    });
  
    // Adicionando o código de barras à div
    divProduto.appendChild(svgBarcode);
    container.appendChild(divProduto);
  }
  