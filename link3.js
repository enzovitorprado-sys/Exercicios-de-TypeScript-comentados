"use strict";
//------------------------------------------------------------------------------------------------
//                                  Explicação sobre Operadores Matemáticos e Aritméticos
//                                       Professor: Eduardo Popovici
//
// Este código demonstra o uso dos principais operadores em programação, essenciais para qualquer
// cálculo ou manipulação de valores numéricos.
//------------------------------------------------------------------------------------------------
/*
Operadores matemáticos e aritméticos são utilizados para realizar operações em valores numéricos.
Eles são a base para qualquer cálculo em um programa de computador.

1. Operadores Aritméticos Básicos:
   - Soma (+): Adiciona dois valores. Exemplo: 10 + 5.
   - Subtração (-): Subtrai um valor de outro. Exemplo: 10 - 5.
   - Multiplicação (*): Multiplica dois valores. Exemplo: 10 * 5.
   - Divisão (/): Divide um valor pelo outro. Exemplo: 10 / 5.
   - Módulo (%): Retorna o resto da divisão. Exemplo: 10 % 3 = 1.
   - Exponenciação (**): Eleva um número a uma potência. Exemplo: 2 ** 3 = 8.

2. Operadores de Incremento e Decremento:
   - Incremento (++): Aumenta o valor de uma variável em 1. É um atalho para 'contador = contador + 1'.
   - Decremento (--): Diminui o valor de uma variável em 1. É um atalho para 'contador = contador - 1'.

3. Operadores de Atribuição:
   São atalhos que combinam uma operação matemática com a atribuição de um novo valor à mesma variável.
   - Atribuição Simples (=): Define um valor para a variável. Exemplo: x = 20.
   - Atribuição com soma (+=): Adiciona um valor e armazena. Exemplo: x += 10 é o mesmo que x = x + 10.
   - Atribuição com subtração (-=): Subtrai e armazena. Exemplo: x -= 5 é o mesmo que x = x - 5.
   - Atribuição com multiplicação (*=): Multiplica e armazena. Exemplo: x *= 2 é o mesmo que x = x * 2.
   - Atribuição com divisão (/=): Divide e armazena. Exemplo: x /= 4 é o mesmo que x = x / 4.
   - Atribuição com módulo (%=): Calcula o resto da divisão e armazena. Exemplo: x %= 3 é o mesmo que x = x % 3.

4. Precedência de Operadores:
   A precedência determina a ordem de execução das operações. A ordem padrão é:
   - Multiplicação (`*`), Divisão (`/`) e Módulo (`%`) são executados primeiro.
   - Soma (`+`) e Subtração (`-`) são executados depois.
   Parênteses `()` podem ser usados para forçar uma ordem de execução diferente, priorizando o que está dentro deles.
*/
// Explicação sobre o Operador de Módulo (%)
/*
O operador de módulo (%) é extremamente útil para verificar divisibilidade e criar ciclos.
Ele retorna o que "sobra" de uma divisão.

Exemplos:
   - 10 % 3 retorna 1 (10 dividido por 3 é 3, com resto 1).
   - 8 % 2 retorna 0 (8 é divisível por 2 sem sobras, ou seja, é um número par).
   - 15 % 4 retorna 3 (15 dividido por 4 é 3, com resto 3).

Este operador é a base da lógica para verificar se um número é par ou ímpar.
*/
// Exemplo 1: Demonstração de Operadores Aritméticos Básicos
let a = 10;
let b = 5;
// Soma os valores de 'a' e 'b'.
console.log("Soma:", a + b);
// Subtrai o valor de 'b' de 'a'.
console.log("Subtração:", a - b);
// Multiplica 'a' por 'b'.
console.log("Multiplicação:", a * b);
// Divide 'a' por 'b'.
console.log("Divisão:", a / b);
// Calcula o resto da divisão de 'a' por 'b'.
console.log("Módulo:", a % b);
// Calcula 'a' elevado à potência 'b'.
console.log("Exponenciação:", a ** b);
// Exemplo 2: Demonstração de Operadores de Incremento e Decremento
let contador = 0;
// Incrementa a variável 'contador' em 1.
contador++;
console.log("Incremento:", contador); // Saída: 1
// Decrementa a variável 'contador' em 1.
contador--;
console.log("Decremento:", contador); // Saída: 0
// Exemplo 3: Demonstração de Operadores de Atribuição
let x = 20;
// Adiciona 10 a 'x' (20 + 10).
x += 10;
console.log("Atribuição de Soma:", x); // Saída: 30
// Subtrai 5 de 'x' (30 - 5).
x -= 5;
console.log("Atribuição de Subtração:", x); // Saída: 25
// Multiplica 'x' por 2 (25 * 2).
x *= 2;
console.log("Atribuição de Multiplicação:", x); // Saída: 50
// Divide 'x' por 4 (50 / 4).
x /= 4;
console.log("Atribuição de Divisão:", x); // Saída: 12.5
// Calcula o resto da divisão de 'x' por 3 (12.5 % 3).
x %= 3;
console.log("Atribuição de Módulo:", x); // Saída: 0.5
// Exemplo 4: Demonstração da Precedência de Operadores
// A multiplicação é executada primeiro: 5 * 2 = 10. Depois a soma: 10 + 10 = 20.
let resultado = 10 + 5 * 2;
console.log("Precedência Padrão:", resultado); // Saída: 20
// Os parênteses forçam a soma a ser executada primeiro: (10 + 5) = 15. Depois a multiplicação: 15 * 2 = 30.
resultado = (10 + 5) * 2;
console.log("Uso de Parênteses:", resultado); // Saída: 30
// Exemplo 5: Uso de Operadores Matemáticos em Funções
// A função 'calcularQuadrado' recebe um número e o eleva ao quadrado usando o operador de exponenciação '**'.
function calcularQuadrado(num) {
    return num ** 2;
}
console.log("Quadrado de 4:", calcularQuadrado(4)); // Saída: 16
// Exemplo 6: Mais um exemplo do Operador de Módulo (%)
// A função 'ehParOuImpar' usa o operador de módulo e um operador ternário (condição ? valor_se_verdadeiro : valor_se_falso)
// para retornar se o número é par ou ímpar de forma concisa.
function ehParOuImpar(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log("O número 7 é:", ehParOuImpar(7)); // Saída: Ímpar
console.log("O número 10 é:", ehParOuImpar(10)); // Saída: Par
// Exemplo 7: Mais um exemplo de Função Matemática
// A função 'calcularFatorial' usa recursão para calcular o fatorial de um número.
// Ela chama a si mesma com um valor menor até que a condição base (n === 0 ou n === 1) seja atingida.
function calcularFatorial(n) {
    // Caso base: o fatorial de 0 ou 1 é sempre 1.
    if (n === 0 || n === 1) {
        return 1;
    }
    // Passo recursivo: n * fatorial de (n-1).
    return n * calcularFatorial(n - 1);
}
console.log("Fatorial de 5:", calcularFatorial(5)); // Saída: 120 (5 * 4 * 3 * 2 * 1)
console.log("Fatorial de 7:", calcularFatorial(7)); // Saída: 5040 (7 * 6 * 5 * 4 * 3 * 2 * 1)
