//------------------------------------------------------------------------------------------------
//                                  Exercícios sobre Loops (while e do...while)
//
// Este conjunto de exercícios em TypeScript foca no uso de loops `while` e `do...while`
// para executar blocos de código repetidamente, controlando o fluxo com base em uma condição.
//------------------------------------------------------------------------------------------------

/**
 * Exercício 01 – Contador simples
 * Objetivo: Conte de 1 a 10 usando while.
 *
 * A variável `i` é o contador do loop. A condição `i <= 10` é verificada antes de cada
 * iteração. A instrução `i++` é crucial para garantir que o loop avance e não se torne
 * infinito.
 */

let i: number = 1;

while (i <= 10) {
  console.log(i);
  i++; // Incrementa o contador para evitar um loop infinito.
}


/**
 * Exercício 02 – Contagem regressiva
 * Objetivo: Conte de 10 até 1 com while e ao final escreva "FIM".
 *
 * O contador `n` é inicializado em 10 e a condição de parada é `n >= 1`.
 * O decremento (`n--`) garante que a contagem regrida a cada passo.
 */

let n: number = 10;

while (n >= 1) {
  console.log(n);
  n--; // Decrementa o contador.
}

console.log("FIM");


/**
 * Exercício 03 – Soma 1..N
 * Objetivo: Some todos os números de 1 até N (N=100).
 *
 * A variável `soma` acumula os valores. A variável `k` é o contador que itera de 1 a `N`.
 * A expressão `soma += k` é um atalho para `soma = soma + k`.
 */

let N: number = 100;
let soma: number = 0;
let k: number = 1;

while (k <= N) {
  soma += k;
  k++;
}

console.log(`Soma de 1 até ${N} = ${soma}`);


/**
 * Exercício 04 – Tabuada com while
 * Objetivo: Mostre a tabuada de um número base (ex.: 7) de 1 a 10.
 *
 * Similar ao exercício do contador, mas com uma operação de multiplicação dentro do loop.
 * `mult` é o contador que vai de 1 a 10.
 */

let base: number = 7;
let mult: number = 1;

while (mult <= 10) {
  console.log(`${base} x ${mult} = ${base * mult}`);
  mult++;
}


/**
 * Exercício 05 – Pares até 50
 * Objetivo: Imprima apenas números pares de 1 a 50.
 *
 * O loop percorre todos os números de 1 a 50. Uma **estrutura condicional `if`** é usada
 * para verificar, a cada iteração, se o número é par (`x % 2 === 0`) antes de imprimi-lo.
 */

let x: number = 1;

while (x <= 50) {
  if (x % 2 === 0) {
    console.log(x);
  }
  x++;
}


/**
 * Exercício 06 – Fatorial
 * Objetivo: Calcule 5! usando while (5*4*3*2*1).
 *
 * A variável `fat` armazena o resultado acumulado. O contador `c` começa com o valor
 * do número e decremente até 2. O loop multiplica `fat` por `c` a cada iteração.
 */

let num: number = 5;
let fat: number = 1;
let c: number = num;

while (c > 1) {
  fat *= c;
  c--;
}

console.log(`${num}! = ${fat}`);


/**
 * Exercício 07 – Fibonacci com while
 * Objetivo: Imprima os 10 primeiros números da sequência.
 *
 * Este loop usa três variáveis (`a`, `b`, `proximo`) para gerar a sequência.
 * A cada iteração, os valores de `a` e `b` são atualizados para os próximos números
 * da sequência. O contador `contador` controla o número de termos impressos.
 */

let a: number = 0;
let b: number = 1;
let termos: number = 10;
let contador: number = 1;

while (contador <= termos) {
  console.log(a);
  let proximo = a + b;
  a = b;
  b = proximo;
  contador++;
}


/**
 * Exercício 08 – Soma de array com while
 * Objetivo: Some os valores de um array.
 *
 * O loop `while` é usado para iterar sobre um array. A condição `idx < valores.length`
 * garante que o loop continue enquanto o índice (`idx`) for menor que o tamanho do array,
 * evitando erros de acesso.
 */

let valores: number[] = [10, 20, 30, 40, 50];
let idx: number = 0;
let total: number = 0;

while (idx < valores.length) {
  total += valores[idx];
  idx++;
}

console.log(`Total = ${total}`);


/**
 * Exercício 09 – Maior valor do array
 * Objetivo: Percorra o array e encontre o maior elemento.
 *
 * A variável `maior` é inicializada com o primeiro elemento do array. O loop percorre
 * os elementos restantes e, a cada passo, compara o elemento atual com o `maior`
 * já encontrado, atualizando-o se necessário.
 */

let nums: number[] = [5, 12, 3, 27, 9, 27, 1];
let iMax: number = 0;
let maior: number = nums[0];

while (iMax < nums.length) {
  if (nums[iMax] > maior) {
    maior = nums[iMax];
  }
  iMax++;
}

console.log(`Maior valor = ${maior}`);


/**
 * Exercício 10 – Busca linear com while
 * Objetivo: Verifique se um valor existe no array; se achar, pare (break).
 *
 * O comando `break` é usado para sair de um loop imediatamente. Neste caso,
 * ele otimiza o código, pois a busca é interrompida assim que o `alvo` é encontrado,
 * sem precisar percorrer o resto do array.
 */

let lista: string[] = ["sql", "ts", "js", "python", "go"];
let alvo: string = "python";
let pos: number = 0;
let encontrado: boolean = false;

while (pos < lista.length) {
  if (lista[pos] === alvo) {
    encontrado = true;
    break; // Interrompe o loop
  }
  pos++;
}

console.log(encontrado ? `Encontrado em lista[${pos}]` : "Não encontrado");


/**
 * Exercício 11 – Inverter string
 * Objetivo: Monte uma nova string com os caracteres na ordem inversa.
 *
 * O loop percorre a string do último caractere (`texto.length - 1`) até o primeiro (índice 0).
 * A variável `invertido` concatena os caracteres na ordem inversa.
 */

let texto: string = "TypeScript";
let invertido: string = "";
let p: number = texto.length - 1;

while (p >= 0) {
  invertido += texto[p];
  p--;
}

console.log(`Original: ${texto}`);
console.log(`Invertido: ${invertido}`);


/**
 * Exercício 12 – Palíndromo
 * Objetivo: Verifique se a palavra é igual quando lida ao contrário.
 *
 * O loop usa dois ponteiros (`esq` e `dir`) que se movem em direção ao centro da palavra.
 * A verificação de palíndromo é feita comparando o caractere da esquerda com o da direita.
 * Se eles forem diferentes, a variável `ehPalindromo` é definida como `false` e o loop é interrompido.
 */

let palavra: string = "radar";
let esq: number = 0;
let dir: number = palavra.length - 1;
let ehPalindromo: boolean = true;

while (esq < dir) {
  if (palavra[esq] !== palavra[dir]) {
    ehPalindromo = false;
    break;
  }
  esq++;
  dir--;
}

console.log(ehPalindromo ? "É palíndromo" : "Não é palíndromo");


/**
 * Exercício 13 – do...while
 * Objetivo: Some números aleatórios de 1 a 10 até ultrapassar 50.
 *
 * O loop `do...while` é executado pelo menos uma vez, mesmo que a condição (`acumulador <= 50`)
 * seja falsa na primeira verificação. A condição só é testada no final da primeira iteração.
 */

let acumulador: number = 0;
let sorteado: number;

do {
  // `Math.random()` gera um número entre 0 (inclusive) e 1 (exclusivo).
  // A expressão `Math.floor(...) + 1` o transforma em um inteiro entre 1 e 10.
  sorteado = Math.floor(Math.random() * 10) + 1;
  acumulador += sorteado;
  console.log(`Sorteado: ${sorteado} | Acumulado: ${acumulador}`);
} while (acumulador <= 50);

console.log("Limite atingido!");


/**
 * Exercício 14 – continue
 * Objetivo: Liste números de 1 a 20, pulando múltiplos de 3.
 *
 * O comando `continue` é usado para pular a iteração atual do loop e ir diretamente para a próxima.
 * Quando o número é um múltiplo de 3, o `if` é ativado, o contador `m` é incrementado
 * (para evitar um loop infinito) e o `continue` é executado, fazendo com que a linha `console.log(m)` seja
 * ignorada para aquele número.
 */

let m: number = 1;

while (m <= 20) {
  if (m % 3 === 0) {
    m++; // Importante: incrementa antes de continuar para não travar o loop.
    continue; // Pula a impressão e vai para a próxima iteração do while.
  }
  console.log(m);
  m++;
}