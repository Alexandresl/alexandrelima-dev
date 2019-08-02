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

