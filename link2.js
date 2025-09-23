"use strict";
// Declara a constante 'camiseta1' com o preço original de 80 reais.
// O tipo 'number' é usado para indicar que a constante armazenará um valor numérico.
const camiseta1 = 80;
// Declara a constante 'desconto1' com o valor do desconto de 15% (representado como 0.15).
// O uso de 'const' garante que esse valor não possa ser alterado no futuro.
const desconto1 = 0.15;
// Calcula o valor do desconto em reais.
// Multiplica o preço da camiseta pelo valor do desconto (80 * 0.15), resultando em 12.
const valorDesconto1 = camiseta1 * desconto1;
// Calcula o preço final da camiseta após a aplicação do desconto.
// Subtrai o valor do desconto do preço original (80 - 12), resultando em 68.
const precoFinal1 = camiseta1 - valorDesconto1;
// Exibe o preço original, o valor do desconto e o preço final no console.
// A função 'console.log' é usada para mostrar os resultados.
// A vírgula (,) entre os argumentos permite exibir texto e valores de variáveis na mesma linha.
console.log("Preço original: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);
