//------------------------------------------------------------------------------------------------
//                                  Exercícios sobre Estruturas Condicionais
//
// Este conjunto de exercícios em TypeScript foca no uso de `if`, `else if` e `else` para
// tomar decisões e controlar o fluxo do programa com base em diferentes condições.
//------------------------------------------------------------------------------------------------

/**
 * Exercício 01 – Positivo ou Negativo
 * Objetivo: Verifique se um número é positivo ou negativo.
 *
 * A condição `numero >= 0` verifica se o valor é maior ou igual a zero. Se sim, é positivo.
 * O bloco `else` captura todos os outros casos, ou seja, números negativos.
 */

let numero: number = -5;

if (numero >= 0) {
  console.log(`${numero} é positivo.`);
} else {
  console.log(`${numero} é negativo.`);
}


/**
 * Exercício 02 – Par ou Ímpar
 * Objetivo: Verifique se um número é par ou ímpar.
 *
 * Utiliza o operador de módulo (`%`) para encontrar o resto da divisão. Se o resto da
 * divisão por 2 for exatamente 0, o número é par.
 */

let valor: number = 12;

if (valor % 2 === 0) {
  console.log(`${valor} é par.`);
} else {
  console.log(`${valor} é ímpar.`);
}


/**
 * Exercício 03 – Maioridade
 * Objetivo: Verifique se a pessoa é maior ou menor de idade.
 *
 * Uma verificação simples baseada na idade. A condição `idade >= 18` retorna `true`
 * se a idade for 18 ou mais, definindo o status de "maior de idade".
 */

let idade: number = 17;

if (idade >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}


/**
 * Exercício 04 – Nota de aprovação
 * Objetivo: Verifique se o aluno foi aprovado (nota >= 6).
 *
 * A lógica é a mesma do exercício de maioridade, mas aplicada a uma nota. A condição
 * `nota >= 6` determina a aprovação.
 */

let nota: number = 5;

if (nota >= 6) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno reprovado.");
}


/**
 * Exercício 05 – Classificação etária
 * Objetivo: Criança (<12), Adolescente (12–17), Adulto (18–59), Idoso (60+).
 *
 * Uma cadeia de `if/else if` é usada para verificar as faixas etárias em ordem.
 * O código verifica se a idade é `< 12`. Se não for, ele continua para a próxima
 * condição, e assim por diante, até encontrar uma que seja verdadeira.
 */

let idadePessoa: number = 35;

if (idadePessoa < 12) {
  console.log("Criança");
} else if (idadePessoa < 18) { // Já sabemos que a idade não é < 12, então esta condição significa de 12 a 17.
  console.log("Adolescente");
} else if (idadePessoa < 60) { // Já sabemos que a idade não é < 18, então esta condição significa de 18 a 59.
  console.log("Adulto");
} else { // Se nenhuma das condições acima foi verdadeira, a pessoa tem 60 anos ou mais.
  console.log("Idoso");
}


/**
 * Exercício 06 – Nota e faltas
 * Objetivo: Aprovado se nota >= 7 e faltas <= 10.
 *
 * Usa o operador lógico `&&` (E) para garantir que ambas as condições (`notaFinal >= 7` E `faltas <= 10`)
 * sejam verdadeiras. Se uma delas for falsa, a expressão inteira se torna falsa.
 */

let materia: string = "Matemática";
let notaFinal: number = 8;
let faltas: number = 12;

if (notaFinal >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia}.`);
} else {
  console.log(`Reprovado em ${materia}.`);
}


/**
 * Exercício 07 – Login simples
 * Objetivo: Verifique se usuário e senha estão corretos.
 *
 * Outro exemplo do operador lógico `&&` (E). O login só é bem-sucedido se o `usuario` for exatamente
 * "admin" E a `senha` for exatamente "1234".
 */

let usuario: string = "admin";
let senha: string = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}


/**
 * Exercício 08 – Desconto por idade
 * Objetivo: Idosos (60+) têm desconto.
 *
 * Uma verificação simples `if/else` baseada em um limite de idade.
 */

let idadeCliente: number = 65;

if (idadeCliente >= 60) {
  console.log("Cliente tem direito a desconto.");
} else {
  console.log("Cliente não tem desconto.");
}


/**
 * Exercício 09 – Senha forte
 * Objetivo: Verifique se a senha tem pelo menos 8 caracteres.
 *
 * Usa a propriedade `.length` de strings para obter o número de caracteres. A condição
 * `senhaNova.length >= 8` é o critério de força da senha.
 */

let senhaNova: string = "abc12345";

if (senhaNova.length >= 8) {
  console.log("Senha forte.");
} else {
  console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}


/**
 * Exercício 10 – Maior número
 * Objetivo: Mostre qual número é maior entre dois valores.
 *
 * Uma cadeia `if/else if/else` para lidar com três cenários possíveis: `a` é maior, `b` é maior,
 * ou eles são iguais.
 */

let a: number = 25;
let b: number = 42;

if (a > b) {
  console.log(`${a} é maior que ${b}.`);
} else if (b > a) {
  console.log(`${b} é maior que ${a}.`);
} else {
  console.log("Os números são iguais.");
}


/**
 * Exercício 11 – Dia da semana
 * Objetivo: Mostre se o dia é útil (1–5) ou final de semana (6–7).
 *
 * Usa uma combinação de operadores lógicos `&&` (E) e `||` (OU). A condição `dia === 6 || dia === 7`
 * será verdadeira se `dia` for 6 OU 7.
 */

let dia: number = 6; // 1=Segunda... 7=Domingo

if (dia >= 1 && dia <= 5) {
  console.log("Dia útil.");
} else if (dia === 6 || dia === 7) {
  console.log("Final de semana.");
} else {
  console.log("Número inválido para dia.");
}


/**
 * Exercício 12 – Faixa de notas
 * Objetivo: A (>=90), B (>=80), C (>=70), D (>=60), F (<60).
 *
 * Outra cadeia `if/else if`. A ordem das condições (da maior para a menor) é crucial para
 * que a lógica funcione corretamente.
 */

let notaAluno: number = 82;

if (notaAluno >= 90) {
  console.log("Conceito A");
} else if (notaAluno >= 80) {
  console.log("Conceito B");
} else if (notaAluno >= 70) {
  console.log("Conceito C");
} else if (notaAluno >= 60) {
  console.log("Conceito D");
} else {
  console.log("Conceito F");
}


/**
 * Exercício 13 – Temperatura
 * Objetivo: Frio (<15), Agradável (15–25), Quente (>25).
 *
 * Uma cadeia `if/else if` para classificar a temperatura. A ordem permite que cada
 * condição cubra um novo intervalo sem a necessidade de operadores lógicos adicionais.
 */

let temperatura: number = 28;

if (temperatura < 15) {
  console.log("Está frio.");
} else if (temperatura <= 25) {
  console.log("Clima agradável.");
} else {
  console.log("Está quente.");
}


/**
 * Exercício 14 – Triângulo válido
 * Objetivo: Verifique se 3 lados formam um triângulo.
 * Regra: cada lado < soma dos outros dois.
 *
 * Este exercício demonstra o uso de múltiplas condições conectadas por `&&` (E).
 * As três condições devem ser verdadeiras simultaneamente para que os lados formem um triângulo.
 */

let lado1: number = 5;
let lado2: number = 7;
let lado3: number = 10;

if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
  console.log("Forma um triângulo válido.");
} else {
  console.log("Não forma um triângulo.");
}