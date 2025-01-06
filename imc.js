const readline = require('readline');

// Cria a interface de leitura de dados do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o IMC e retorna a classificação
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);  // Calcula o IMC
    let classificacao;

    // Classificação do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso saudável";
    } else {
        classificacao = "Sobrepeso";
    }

    // Retorna o resultado
    return `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}

// Solicitando ao usuário as informações
rl.question('Digite o seu peso (kg): ', (peso) => {
    rl.question('Digite a sua altura (em metros): ', (altura) => {
        // Convertendo as entradas para números
        peso = parseFloat(peso);
        altura = parseFloat(altura);

        // Exibindo a classificação do IMC
        let resultado = calcularIMC(peso, altura);
        console.log(resultado);

        // Fechando a interface readline após a resposta
        rl.close();
    });
});
