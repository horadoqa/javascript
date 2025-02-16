// Converter numero em valor utilizando a API Intl.NumberFormat

const valor = 1000

console.log(valor)

console.log("Valor sem formatação: " + valor)

const formatoMoeda = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

const valorFormatado = formatoMoeda.format(valor);

console.log("Valor com formatação: " + valorFormatado);