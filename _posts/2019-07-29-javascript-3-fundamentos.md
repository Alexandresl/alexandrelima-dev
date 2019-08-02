---
layout: post
title: 'JavaScript #3 - Fundamentos'
summary: Conheça os principais conceitos de programação e da linguagem JavaScript
date: 2019-07-29T03:50:32.304Z
category: JavaScript
tags: 'Javascript, Programação, Introdução'
---
#### Visão geral do algoritmo

O conceito de algoritmo é importante independente da linguagem de programação que se pretenda usar. Além disso, temos a estrutura de dados, que junto com o algoritmo, formam o fundamento para qualquer linguagem.

Neste contexto, o algoritmo seria o verbo, a ação, o processar de um programa. A estrutura de dados é o que vai organizar os dados.

Um algoritmo é uma sequência de passos. Podemos imaginar os passos para se deslocar de casa até o trabalho, por exemplo, ou para se fazer um bolo.

No algoritmo, você também poderá repetir uma sequência de passos até que uma condição seja satisfeita ou mesmo uma quantidade de vezes pré-definidas. Digamos que você tenha uma pilha de documentos para assinar, você pegará um documento e assinará, pegará um segundo documento e realizará a mesma ação, até que não haja mais documentos a ser assinado.

O algoritmo também permite que você tome decisão. Assim, eu tenho um passo _A_ que só será executado caso uma condição seja satisfeita, ou mesmo, poderá ser executado um passo _B_, casso a condição _A_ não tenha sido satisfeita.

É importante notarmos que além de ter uma sequência de passos definidas, para que o algoritmo seja correto e otimizado, é importante que os passos estejam na sequência correta. Por exemplo, se assarmos um bolo e depois misturarmos o fermento, acabaremos por não obter o resultado esperado, assim como em inúmeras outras situações.

Para termos uma visão geral, nos algoritmo, teremos dados de entrada, que servirão para alimentar o nosso algoritmo, que irá processar conforme as instruções contidas e irão produzir fuma saída.

#### Visão geral de estruturas de dados

As estruturas de dados visam organizar e administrar os dados. Por exemplo, se temos uma lista de aprovados em um concurso, a lista seria o que estrutura os meus dados, que neste caso são os de candidatos aprovados.

Além da lista, temos como exemplo a fila, que possui como regra o FIFO (First In First Out), ou seja, o primeiro dado a entrar na fila será o primeiro a sair.

Outra estrutura muito comum é a pilha. Esta segue uma regra de LIFO (Last In First Out), o último dado a entrar será o primeiro a sair.

Como estruturas básicas, temos os tipos. Por exemplo: inteiro, real, letra, booleano. Assim, como você pode criar estruturas personalizadas, como uma para representar um cliente, um carrinho de compras ou um produto. Estas estruturas personalizadas poderão ter outras estruturas internamente.

Outro conceito importante é o de variáveis e constantes. Assim, se quisermos guardar os resultados de um cálculo, iremos criar uma variável. Agora, se quisermos guardar o valor do &pi;, que não irá ser alterado, iremos declará-lo em uma constante.

Iremos utilizar os dados também para realizar operações. Estas poderão ser de atribuição, aritmética, relacional ou lógica. Poderemos realizar operações com estruturas de dados também. Por exemplo, unificando duas listas de dados.

#### Estrutura do curso

Nosso curso será estruturado com uma pasta para cada capítulo e um arquivo _JavaScript_ por aula. Em alguns exemplos mais complexos, poderemos criar vários arquivos e algumas subpastas, mas, em geral, esta será a estrutura.

Assim, vamos criar uma pasta chamada fundamentos, e posteriormente colocar os arquivos desta unidade.

#### Organização básica de um código JavaScript

Uma das primeiras perguntas que eu faço ao aprender uma nova linguagem de programação é, como ela é, da forma mais básica. Assim, depois poderemos nos preocupar com como é estruturada uma aplicação completa, que muitas vezes poderá ter várias respostas, dependendo do programador que é questionado.

O _JavaScript_ é uma linguagem derivada da linguagem **C**. Do ponto de vista de organização básica, ela é organizada em blocos de código, que são agrupamentos de sentenças de código.

Devemos ter claro que uma sentença não é necessariamente uma linha de código. Assim como no português, uma sentença termina com um ponto e não necessariamente está contida em apenas uma linha, a sentença no _JavaScript_ também pode ocupar uma ou mais linhas de código.

Por exemplo. A seguir temos uma sentença de código _JavaScript_:

Vamos criar o arquivo organizacao.js e salva-la na pasta fundamentos

```javascript
    console.log("Sentença de código")
```

Podemos ter também um bloco de código, que são delimitados por chaves, e que poderão conter várias sentenças de código ou mesmo outros blocos de código, conforme exemplo abaixo:

```javascript
{
    {
        console.log("Olá ") // 1ª sentença
        console.log(
            'Mundo!'
        ) // 2ª sentença
    } // bloco de código interno a outro bloco
} // bloco de código
```

No bloco acima, eu tenho duas sentenças de código e dois blocos de códigos.

Assim, podemos, de forma básica, definir que o JavaScript é composto por sentenças de código que podem ou não terminar com ponto e vírgula e por blocos de código que são delimitados por chaves.

#### Executando JavaScript

Vamos conhecer algumas formas de executar o _JavaScript_. Você pode utilizar ferramentas online, o console do browser, o Node.js, ou mesmo os editores de códigos como o Sublime, Atom e o VSCode, possuem terminais internos para execução do código (em conjunto com o node).

Como alternativas online temos: <a href="https://repl.it/languages/nodejs" target="_blank">https://repl.it/languages/nodejs</a> e o <a href="https://jsfiddle.net/" target="_blank">https://jsfiddle.net/</a>.

Para utilizar o console do Chrome, basta digitar _Ctrl + Shift_  i _ou para Mac _Command + '. Também é possível a utilização do plugin_ Code Runner _que irá executar o código com o comando_ Ctrl + Alt + n* no Windows e "Command + Alt + n" no Mac.

Podemos também utilizando o comando _node nomedoarquivo.js_ executar no próprio terminal do sistema operacional.

#### Comentários de código

Os comentários em JavaScript são os mesmos da linguagem *C* e *Java* (apesar de java possuir um a mais). Os comentários são importantes para explicar partes do código ou por que o código executa determinada função. 

Segue abaixo a sintaxe dos comentários em *JavaScript*:

Vamos criar o arquivo comentario.js e salva-la na pasta fundamentos:

```javascript
// Comentários de uma linha
console.log("linha 1")

/*
    Comentário de 
    múltiplas linhas
*/
console.log("linha 2")

/**
 * Outra forma
 * de criar 
 * comentários de
 * múltiplas linhas
 */
console.log("linha 3")
```

Todos os comentários acima são ignorados na hora da execução do programa.

É importante salientar, que os comentários deverão ser adotados de forma consciente. Evitando comentar coisas óbvias do código. Nestes casos, é fundamental que o código seja suficientemente legível no que refere-se a nome de variáveis, nome de funções a termos que criar um comentários para explicar.

Neste serie de posts, contudo, abriremos uma exceção, e para fim didático, utilizaremos bastante comentários. mesmos os óbvios 😉.

#### O básico de var, Let e Const

Neste capítulo iremos falar sobre variáveis e constantes. O mundo da programação pode ser dividido, de forma bem simplista assim: você tem dados que são processados e geram mais dados. Então, temos os algoritmos que são utilizados para realizar o processamento que na maioria das vezes utilizam dados armazenados em variáveis e constantes e os dados que são organizados em estruturas de dados. Cabe à estrutura de dados definir as regras que os dados vão seguir.

Aqui vamos aprender como criar variáveis e constantes em javascript. Nesta aula não iremos nos aprofundar nas diferenças entre *var*, *let* e *const*.

Historicamente, no *JavaScript*, sempre se utilizou a palavra *var* para criar variáveis. Recentemente, com ECMAScript 2015, foram introduzidas as palavras *let* e *const*, que iremos detalhar futuramente.

Vamos criar o arquivo variaveisEConstantes.js e salva-la na pasta fundamentos:

```javascript
/**
 * var - palavra reservada que usamos
 * para a declaração da variável
 * let - outra palavra reservada para
 * declaração de variável
 * a, b - é o nome (identificador)
 * destas variáveis
 * = - é um comando de atribuição
 * assim o 3 está sendo atribuído
 * a variável a.
 */
var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50 - Isso gera erro!

console.log(c)
```

*Obs.: Mesmo não sendo o foco neste momento, é importante já ter em mente, que a escolha do nome é um ponto muito importante para a legibilidade de seu código. Prefira nomear as variáveis com nomes que facilmente identifiquem o conteúdo que é armazenado.*

Após declararmos uma variável, nós não precisamos utilizar as palavras reservadas *var* ou *let* novamente. Podemos apenas utilizar a variável lendo ou gravando novos valores nela. Apesar disso, no exemplo é redefinido o valor da variável *a* utilizando o *var*. Por mais estranho que possa parecer, não irá gerar um erro. Já no caso do *let*, caso tentássemos redeclará-lo, o interpretador acusaria um erro de sintaxe.

No exemplo, vimos que o *const* também serve para armazenas valores, só que neste caso, nós não podemos alterá-lo. É sempre aconselhável que quando formos declarar valores que não vão ser alterados durante a execução do programa, utilizemos o *const* ao invés do *let*.

#### Tipagem fraca

Quando uma nova linguagem é desenvolvida, uma das decisões fundamentais de quem está desenvolvendo é como ela vai lidar com os tipos dos dados. Isso significa que na construção de um algoritmo, nós trabalhamos com vários tipos: números inteiros, números de ponto flutuante, um caractere, um conjunto de caracteres, entre outros. Algumas linguagens precisam que você defina na hora da delcaração que tipo de dado você irá armazenas em determinada variável, outras, permite que o tipo de dados possa ser alterado durante a execução do programa.

O *JavaScript* é uma linguagem fracamente tipada ou de tipagem dinâmica. Isso significa que não precisamos definir que tipo de dado cada variável irá armazenas no momento de sua declaração. Esta característica, por um lado permite ao programador uma maior liberdade na hora de programar, contudo, pode ser difícil detectar determinados erros por conta desta mesma característica da linguagem.

No exemplo abaixo, vamos ver como funciona a questão da tipagem fraca em *JavaScript*.

Vamos criar o arquivo tipagemFraca.js e salva-la na pasta fundamentos:

```javascript
let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.1516
console.log(qualquer)
console.log(typeof qualquer)

// Evitar nome genérico e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkk
```

Podemos observar com o exemplo que, embora a tipagem do JavaScript seja fraco, isso não significa que ela não possua tipo. Ao utilizarmos o comando *typeof*, temos como retorno o tipo de dado que a variável está armazenando.

Salientamos novamente o cuidado de colocar bons nomes para variáveis, evitando nomes genéricos e siglas.

#### Tipos em JavaScript: Number

Já vimos que o *JavaScript* possui tipagem fraca. Vimos também que para declarar uma variável ou uma constante, utilizamos as palavras reservadas *var*, *let* e *const* e nelas poderemos armazenar muitos tipos de dados.

Nesta aula, nós começaremos a falar de alguns tipos importantes. O primeiro tipo é o *numérico* ou *number*.

Vamos criar o arquivo numeros.js e salva-la na pasta fundamentos:

```javascript
/**
 * Declaramos uma constante
 * com o identificador peso1
 * que irá receber um número
 * de ponto flutuante
 */
const peso1 = 1.0

/**
 * Podemos declara utilizando
 * um objeto do tipo Number
 * que iremos estudar futuramente
 */
const peso2 = Number('2.0')

console.log(peso1, peso2)
/**
 * Number.isInteger() retorna 
 * um boolean true caso o 
 * parâmetro seja inteiro
 */
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

/**
 * toFixed() define o número de casas
 * decimais que será considerado de um
 * número de ponto flutuante
 */
console.log(media.toFixed(2))

/**
 * Em algumas situações poderemos querer
 * converter um number em string. Podemos
 * fazer isso utilizando a função
 * toString()
 */
console.log(media.toString())

/**
 * Caso queiramos converter o valor de
 * média para binário, basta passar o 
 * 2 como parâmetro.
 */
console.log(media.toString(2))

/**
 * Podemos também testar o tipo de dado
 * da variável com o typeof.
 */
console.log(typeof media)

/**
 * Devemos ter presenque que number
 * é um tipo de dado e que Number,
 * com letra maiúscula é uma função,
 * conforme retorno abaixo.
 */
console.log(typeof Number)
```

No exemplo acima, embora as constantes *1.0* e *2.0* tenham o ponto, elas são consideradas um number do tipo inteiro. Isso pode ser verificado utilizando a função *Number.isInteger()*.

Vimos, também, como realizar alguns cálculos simples utilizando estas constantes. Como definirmos o número de casas decimais a ser exibido em um número de ponto flutuante ou mesmo como realizar a conversão de um número em outros sistemas numéricos, como o binário, octal ou hexadecimal.

Por fim, vimos a diferença entre o tipo de dado number, que pode ser tanto um inteiro quanto um número de ponto flutuante e a função *Number*.


