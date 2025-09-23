//------------------------------------------------------------------------------------------------
//                                  Exercícios de Lógica de Programação
//
// Este é um conjunto de exercícios que aborda conceitos fundamentais de programação, como variáveis,
// estruturas condicionais (if/else), loops (for) e funções. O código é escrito em TypeScript,
// uma linguagem que adiciona tipagem estática ao JavaScript.
//------------------------------------------------------------------------------------------------


/**
 * Exercício 01 – Olá Mundo
 * Objetivo: imprimir uma mensagem no console.
 *
 * `console.log()` é uma função nativa do JavaScript e do TypeScript usada para imprimir mensagens
 * no console do ambiente de execução (como o terminal ou o navegador). É a forma mais simples
 * de verificar a saída de um programa.
 */

console.log("Olá, TypeScript!");


/**
 * Exercício 02 – Variáveis simples
 * Declare nome, idade e cidade e imprima uma frase.
 *
 * Variáveis são usadas para armazenar dados. Em TypeScript, a sintaxe `let nome: string`
 * declara uma variável chamada `nome` e especifica que ela deve conter um valor do tipo `string` (texto).
 * Da mesma forma, `number` é usado para números. A frase é construída usando uma "template string"
 * (delimitada por `) que permite incluir variáveis diretamente com `${nome_da_variavel}`.
 */

let nome: string = "Eduardo";
let idade: number = 38;
let cidade: string = "São Paulo";

console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);


/**
 * Exercício 03 – Par ou Ímpar
 * Dado um número, diga se é par ou ímpar.
 *
 * A lógica para determinar se um número é par ou ímpar utiliza o operador de módulo (`%`).
 * Este operador retorna o resto da divisão. Se o resto da divisão por 2 for 0, o número é par.
 * A estrutura `if/else` executa um bloco de código se a condição for verdadeira e outro se for falsa.
 */

let numero: number = 17; // Altere este valor para testar outros números

if (numero % 2 === 0) {
  // A condição `numero % 2 === 0` verifica se o resto da divisão de `numero` por 2 é estritamente igual a 0.
  console.log(`${numero} é PAR.`);
} else {
  // Se a condição acima for falsa (ou seja, o resto da divisão for 1), este bloco é executado.
  console.log(`${numero} é ÍMPAR.`);
}


/**
 * Exercício 04 – Maioridade
 * Dada uma idade, diga se é maior (>=18) ou menor de idade.
 *
 * Este exercício usa uma estrutura condicional `if/else` simples para comparar a variável `idadePessoa`
 * com um valor fixo (18). O operador `>=` significa "maior ou igual a".
 */

let idadePessoa: number = 16; // Altere este valor para testar diferentes idades

if (idadePessoa >= 18) {
  // Se a idade for 18 ou maior, a condição é verdadeira.
  console.log("Maior de idade.");
} else {
  // Se a idade for menor que 18, a condição é falsa.
  console.log("Menor de idade.");
}


/**
 * Exercício 05 – Média de Notas
 * Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
 *
 * Este cálculo envolve a soma de três variáveis (`n1`, `n2`, `n3`) seguida pela divisão por 3.
 * O método `.toFixed(2)` é usado para formatar o número resultante com exatamente duas casas decimais,
 * o que é comum para exibir valores monetários ou médias.
 */

let n1: number = 7;
let n2: number = 5;
let n3: number = 9;

let media: number = (n1 + n2 + n3) / 3;

// Imprime a média formatada para duas casas decimais.
console.log(`Média: ${media.toFixed(2)}`);

if (media >= 6) {
  // Se a média for 6 ou mais, o aluno é considerado aprovado.
  console.log("Aprovado");
} else {
  // Caso contrário, ele é reprovado.
  console.log("Reprovado");
}


/**
 * Exercício 06 – Aprovado com faltas
 * Regra: aprovado se nota >= 7 E faltas <= 10. Caso contrário, reprovado.
 *
 * Este exercício demonstra o uso do operador lógico "E" (`&&`). Ambas as condições
 * (`nota >= 7` E `faltas <= 10`) devem ser verdadeiras para que o aluno seja aprovado.
 * Se uma das condições for falsa, o bloco `else` é executado.
 */

let materia: string = "Matemática";
let nota: number = 8; // Experimente alterar a nota (ex: 6) para ver o resultado.
let faltas: number = 12; // Experimente alterar o número de faltas (ex: 8) para ver o resultado.

if (nota >= 7 && faltas <= 10) {
  // Este bloco só será executado se a nota for 7 ou mais E as faltas forem 10 ou menos.
  console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
} else {
  // Este bloco será executado se qualquer uma das condições for falsa.
  console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}


/**
 * Exercício 07 – Tabuada
 * Mostre a tabuada de 1 a 10 de um número.
 *
 * Um loop `for` é usado para repetir uma ação um número fixo de vezes.
 * - `let i = 1`: Inicializa a variável de controle `i` em 1.
 * - `i <= 10`: A condição que o loop verifica a cada iteração; o loop continua enquanto `i` for menor ou igual a 10.
 * - `i++`: Incrementa a variável `i` em 1 a cada iteração.
 * Dentro do loop, a multiplicação é realizada e o resultado é impresso.
 */

let base: number = 7; // Altere este valor para testar a tabuada de outro número.

for (let i = 1; i <= 10; i++) {
  // A cada iteração, este código é executado, com `i` variando de 1 a 10.
  console.log(`${base} x ${i} = ${base * i}`);
}


/**
 * Exercício 08 – Contagem Regressiva
 * Conte de 10 até 1 e ao final exiba "Lançar foguete!".
 *
 * Este é outro exemplo de loop `for`, mas neste caso, ele realiza uma contagem decrescente.
 * - `let i = 10`: A contagem começa em 10.
 * - `i >= 1`: O loop continua enquanto `i` for maior ou igual a 1.
 * - `i--`: A variável `i` é decrementada em 1 a cada iteração.
 */

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Quando o loop termina, a mensagem final é exibida.
console.log("Lançar foguete!");


/**
 * Exercício 09 – Função Soma
 * Crie uma função que recebe dois números e retorna a soma.
 *
 * `function somar(a: number, b: number): number` define a função `somar`.
 * - `(a: number, b: number)`: Especifica que a função aceita dois parâmetros, `a` e `b`, ambos do tipo `number`.
 * - `: number`: Indica que a função irá retornar um valor do tipo `number`.
 * `return a + b;` retorna a soma dos dois parâmetros.
 */

function somar(a: number, b: number): number {
  return a + b;
}

// Chamada da função (exemplo):
let resultadoSoma = somar(12, 30);
console.log(`Soma: ${resultadoSoma}`);


/**
 * Exercício 10 – Calculadora simples
 * Função que recebe dois números e uma operação (+, -, *, /).
 * Retorna o resultado. Trata divisão por zero.
 *
 * Esta função usa múltiplas estruturas `if` para determinar qual operação realizar.
 * A condição `if (b === 0)` é um tratamento de erro crucial para evitar a divisão por zero,
 * que resultaria em um erro de tempo de execução. A função retorna `NaN` (Not a Number) para
 * indicar que o resultado não é um número válido.
 */

function calcular(a: number, b: number, op: string): number {
  // Verifica se a operação é adição.
  if (op === "+") return a + b;
  // Verifica se a operação é subtração.
  if (op === "-") return a - b;
  // Verifica se a operação é multiplicação.
  if (op === "*") return a * b;
  // Verifica se a operação é divisão.
  if (op === "/") {
    // Tratamento de erro: se o divisor `b` for zero, exibe uma mensagem de erro e retorna NaN.
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }

  // Se a operação não corresponder a nenhuma das opções acima, exibe uma mensagem de erro.
  console.log("Operação inválida. Use +, -, * ou /.");
  return NaN;
}

// Exemplos de chamadas para testar todas as operações.
console.log(`10 + 5 = ${calcular(10, 5, "+")}`);
console.log(`10 - 5 = ${calcular(10, 5, "-")}`);
console.log(`10 * 5 = ${calcular(10, 5, "*")}`);
console.log(`10 / 5 = ${calcular(10, 5, "/")}`);


/**
 * Exercício 11 – Juros Simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 * Taxa em decimal (5% = 0.05).
 *
 * Esta função implementa a fórmula dos juros simples. Ela recebe o capital inicial,
 * a taxa de juros (já em formato decimal) e o tempo. A fórmula é aplicada diretamente.
 */

function jurosSimples(capital: number, taxa: number, tempo: number): number {
  // Retorna o cálculo do valor final (VF) de juros simples.
  return capital + (capital * taxa * tempo);
}

// Exemplo de uso da função.
let capital = 1000;
let taxa = 0.05; // 5% ao mês.
let tempo = 12; // 12 meses.

let vfSimples = jurosSimples(capital, taxa, tempo);
console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`);


/**
 * Exercício 12 – Juros Compostos
 * Valor Final = Capital * (1 + Taxa) ^ Tempo
 * Taxa em decimal (ex.: 5% = 0.05).
 *
 * Esta função implementa a fórmula dos juros compostos. Ela utiliza o método
 * `Math.pow(base, expoente)` para calcular a potência (o "^").
 */

function jurosCompostos(capital: number, taxa: number, tempo: number): number {
  // Retorna o cálculo do valor final (VF) de juros compostos.
  return capital * Math.pow(1 + taxa, tempo);
}

// Exemplo de uso da função.
let capitalC = 1000;
let taxaC = 0.05; // 5% ao mês.
let tempoC = 12; // 12 meses.

let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);


/**
 * Exercício 13 – Conversor de Temperatura
 * F = C * 1.8 + 32
 *
 * Esta função converte uma temperatura de Celsius para Fahrenheit. A fórmula
 * é aplicada diretamente. O resultado é exibido com `.toFixed(1)` para formatar
 * com uma casa decimal.
 */

function celsiusParaFahrenheit(celsius: number): number {
  // Retorna o resultado da conversão de temperatura.
  return celsius * 1.8 + 32;
}

// Exemplo de uso da função.
let c = 25;
let f = celsiusParaFahrenheit(c);
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);


/**
 * Exercício 14 – Sistema de Notas
 * Retornar: A (>=90), B (>=80), C (>=70), D (>=60), F (<60)
 *
 * Esta função usa uma cadeia de `if/else if` para verificar uma série de condições
 * em ordem. A primeira condição que for verdadeira é executada e as demais são ignoradas.
 * Por exemplo, se a nota for 95, a primeira condição `nota >= 90` é verdadeira, e a função
 * retorna "A" imediatamente, sem verificar as outras condições.
 */

function conceito(nota: number): string {
  // Se a nota for 90 ou mais, retorna "A".
  if (nota >= 90) return "A";
  // Se não for, verifica se a nota é 80 ou mais, e assim por diante.
  else if (nota >= 80) return "B";
  else if (nota >= 70) return "C";
  else if (nota >= 60) return "D";
  // Se nenhuma das condições acima for verdadeira, retorna "F".
  else return "F";
}

// Exemplos de chamadas para testar cada faixa de notas.
console.log(`Nota 95 -> Conceito ${conceito(95)}`);
console.log(`Nota 82 -> Conceito ${conceito(82)}`);
console.log(`Nota 73 -> Conceito ${conceito(73)}`);
console.log(`Nota 61 -> Conceito ${conceito(61)}`);
console.log(`Nota 42 -> Conceito ${conceito(42)}`);