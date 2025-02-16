// Estruturas de repetição

// while: Quando você não sabe exatamente quantas vezes o loop será executado, mas depende de uma condição.

// while (condição) {
//     // Código a ser executado enquanto a condição for verdadeira
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++; // faz o incremento da variável
// }

// let n = 10;
// while (n > 0) {
//   console.log(n);
//   n--; // faz o decremento da variável, é equivalente a n = n - 1
// }

// let x = 10;
// while (x > 0) {
//     console.log("Ao infinito e além")
//     x--; // faz o decremento da variável, é equivalente a n = n - 1
// }

// n--: Decrementa o valor de n após usá-lo.
// let h = 5;
// console.log(h--); // Exibe 5, e depois n se torna 4
// console.log(h);   // Agora n é 4

// --n: Decrementa o valor de n antes de usá-lo.
// let p = 5;
// console.log(--p); // Decrementa primeiro, depois exibe 4
// console.log(p);   // Agora n é 4



// for: Quando você sabe o número exato de iterações.

// for (inicialização; condição; incremento) {
//     // Código a ser executado enquanto a condição for verdadeira
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}