//------------------------------------------------------------------------------------------------
//                             Exercícios sobre Funções em TypeScript
//
// Este conjunto de exercícios demonstra a criação e o uso de funções com e sem parâmetros,
// com e sem retorno, cobrindo os conceitos essenciais para a criação de blocos de código reutilizáveis.
//------------------------------------------------------------------------------------------------


/**
 * Exercício 01 – Função de saudação
 * Objetivo: Criar uma função que exibe "Olá, Mundo!".
 *
 * `function saudacao(): void` define uma função chamada `saudacao`.
 * O tipo de retorno `: void` indica que esta função não retorna nenhum valor.
 */

function saudacao(): void {
  // O corpo da função executa a ação de imprimir uma string no console.
  console.log("Olá, Mundo!");
}

// Chamando a função para que seu código interno seja executado.
saudacao();


/**
 * Exercício 02 – Função com parâmetro
 * Objetivo: Criar uma função que receba um nome e exiba "Olá, <nome>".
 *
 * A função `dizerOla(nome: string)` recebe um parâmetro chamado `nome`.
 * A anotação `: string` especifica que o valor passado para `nome` deve ser do tipo texto.
 */

function dizerOla(nome: string): void {
  // Usa uma "template string" (com acentos graves ``) para inserir o valor da variável
  // `nome` diretamente na mensagem.
  console.log(`Olá, ${nome}!`);
}

// Exemplos de chamadas da função com diferentes valores para o parâmetro `nome`.
dizerOla("Eduardo");
dizerOla("Pietro");


/**
 * Exercício 03 – Função com retorno
 * Objetivo: Criar uma função que receba dois números e retorne a soma.
 *
 * A função `somar(a: number, b: number): number` recebe dois parâmetros (`a` e `b`)
 * do tipo `number` e, crucialmente, o `: number` após os parênteses indica que o
 * valor que ela retorna será um número.
 */

function somar(a: number, b: number): number {
  // A palavra-chave `return` é usada para enviar o resultado da operação de volta para
  // onde a função foi chamada.
  return a + b;
}

// A chamada `somar(10, 5)` retorna o valor `15`, que é então inserido na string para impressão.
console.log(`Resultado: ${somar(10, 5)}`);


/**
 * Exercício 04 – Função de subtração
 * Objetivo: Criar uma função que receba dois números e retorne a subtração.
 *
 * Segue a mesma estrutura da função de soma, aplicando o operador de subtração (`-`).
 */

function subtrair(a: number, b: number): number {
  return a - b;
}

console.log(`Resultado: ${subtrair(20, 8)}`);


/**
 * Exercício 05 – Função de multiplicação
 * Objetivo: Criar uma função que receba dois números e retorne a multiplicação.
 *
 * Usa o operador de multiplicação (`*`).
 */

function multiplicar(a: number, b: number): number {
  return a * b;
}

console.log(`Resultado: ${multiplicar(6, 7)}`);


/**
 * Exercício 06 – Função de divisão
 * Objetivo: Criar uma função que receba dois números e retorne a divisão.
 *
 * Esta função inclui um importante tratamento de erro para evitar a divisão por zero,
 * que pode causar um comportamento inesperado ou um erro no programa.
 */

function dividir(a: number, b: number): number {
  // A condição `if (b === 0)` verifica se o divisor é zero.
  if (b === 0) {
    console.log("Erro: divisão por zero");
    // `NaN` (Not a Number) é retornado para indicar um resultado inválido.
    return NaN;
  }
  // Se o divisor não for zero, a divisão é realizada normalmente.
  return a / b;
}

console.log(`Resultado: ${dividir(20, 4)}`);


/**
 * Exercício 07 – Função dobro
 * Objetivo: Criar uma função que receba um número e retorne o dobro dele.
 *
 * Uma função simples que multiplica o valor de entrada por 2.
 */

function dobro(n: number): number {
  return n * 2;
}

console.log(`Dobro de 12 = ${dobro(12)}`);


/**
 * Exercício 08 – Função par ou ímpar
 * Objetivo: Criar uma função que receba um número e diga se é par ou ímpar.
 *
 * Usa o operador de módulo (`%`) para verificar o resto da divisão por 2.
 */

function parOuImpar(n: number): string {
  // Se o resto da divisão por 2 for 0, o número é par.
  if (n % 2 === 0) {
    return "Par";
  } else {
    // Caso contrário, é ímpar.
    return "Ímpar";
  }
}

console.log(`7 é ${parOuImpar(7)}`);


/**
 * Exercício 09 – Função média de notas
 * Objetivo: Criar uma função que receba 3 notas e retorne a média.
 *
 * A soma das notas é feita entre parênteses para garantir que a divisão seja feita no resultado da soma.
 */

function media(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}

// O método `.toFixed(2)` é usado para formatar o número resultante com duas casas decimais.
console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);


/**
 * Exercício 10 – Função aprovação
 * Objetivo: Criar uma função que receba nota e faltas e retorne "Aprovado" ou "Reprovado".
 *
 * Usa o operador lógico `&&` (E) para verificar se ambas as condições são verdadeiras.
 */

function verificarAprovacao(nota: number, faltas: number): string {
  // As duas condições devem ser verdadeiras para que o aluno seja aprovado.
  if (nota >= 7 && faltas <= 10) {
    return "Aprovado";
  } else {
    // Se uma das condições for falsa, o aluno é reprovado.
    return "Reprovado";
  }
}

// Exemplos de uso da função.
console.log(verificarAprovacao(8, 5));
console.log(verificarAprovacao(6, 12));


/**
 * Exercício 11 – Função fatorial
 * Objetivo: Criar uma função que calcule o fatorial de um número.
 * Ex: 5! = 5*4*3*2*1 = 120
 *
 * Usa um loop `for` para multiplicar o número por todos os inteiros positivos menores que ele.
 */

function fatorial(n: number): number {
  let resultado = 1;
  // O loop começa em `n` e decrementa até 2.
  for (let i = n; i > 1; i--) {
    // A cada iteração, `resultado` é multiplicado pelo valor de `i`.
    resultado *= i;
  }
  return resultado;
}

console.log(`Fatorial de 5 = ${fatorial(5)}`);


/**
 * Exercício 12 – Função juros simples
 * Objetivo: Calcular o valor final de um investimento com juros simples.
 *
 * A função implementa a fórmula matemática de juros simples.
 */

function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}

console.log(`VF = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);


/**
 * Exercício 13 – Conversão Celsius → Fahrenheit
 * Objetivo: Converter temperatura de Celsius para Fahrenheit.
 *
 * A função aplica a fórmula de conversão de temperatura.
 */

function celsiusParaFahrenheit(c: number): number {
  return c * 1.8 + 32;
}

console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);


/**
 * Exercício 14 – Função calculadora
 * Objetivo: Criar uma função que recebe dois números e um operador e retorna o resultado.
 *
 * Uma função versátil que usa uma série de `if` para determinar a operação correta.
 * Também inclui um tratamento de erro para divisão por zero e operadores inválidos.
 */

function calculadora(a: number, b: number, op: string): number {
  // Verifica qual operador foi passado e realiza a operação correspondente.
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    // Tratamento de erro para divisão por zero.
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }
  // Se nenhum operador válido for encontrado.
  console.log("Operador inválido!");
  return NaN;
}

// Exemplos de chamadas para testar cada uma das operações.
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));