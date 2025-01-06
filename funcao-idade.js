// Passamos as variáveis nome, anoNascimento e anoAtual como argumentos para a função calcularIdade.

//Podemos dizer também que a função recebe três parâmetros: nome, anoNascimento e anoAtual

function calcularIdade(nome, anoNascimento, anoAtual) {
    let idade = anoAtual - anoNascimento;
    return "Oi, meu nome é " + nome + " e tenho " + idade + " anos.";
}

// Dados
let nome = "Ricardo";
const anoNascimento = 1971;
let anoAtual = 2026;

// Chamando a função
let saudacao = calcularIdade(nome, anoNascimento, anoAtual);

// O resultado da função é armazenado na variável saudacao, que é então exibida com
console.log(saudacao);
