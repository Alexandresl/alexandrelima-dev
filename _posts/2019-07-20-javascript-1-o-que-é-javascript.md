---
layout: post
title: 'JavaScript #1 - O que é JavaScript?'
date: 2019-07-20T18:27:31.914Z
category: Javascript
tags: 'Javascript, Programação, Introdução'
---

Bem-vindo(a)!

Este será o primeiro de uma série de posts onde pretendo abordar uma grande quantidade de assuntos a respeito do JavaScript. Desde o contexto histórico em que a linguagem nasceu; passando pela sintaxe e conceitos básicos da linguagem, até chegarmos nas últimas features e frameworks da linguagem. o intuito é fornecer um material para você aprender e muito mais importante, gostar de JavaScript.

O JavaScript é hoje uma das linguagens mais populares do mundo. Possui uma grande quantidade de ferramentas. Está presente em todos os navegadores, em televisores, no backend com o Node.js, permite a criação de widgets e apps para os mais variados devices. Em contrapartida, muitos desenvolvedores a odeiam.

Pode ser que você mesmo já tenha tido alguma experiência traumática com a linguagem. Isso é comum, principalmente para desenvolvedores que veem de outras linguagens.

E isso não é necessariamente culpa do _JavaScript_, e sim, da forma como as pessoas chegam à linguagem. Entender a parte conceitual e o _runtime_, ou seja, onde está sendo executado o meu programa, é fundamental para que tenhamos sucesso nessa tarefa. 

Para complicar ainda mais, os navegadores, onde o _JavaScript_ é mais amplamente utilizado, possuíam um enorme problema de compatibilidade. Toda a interatividade que a linguagem permite é realizada através da manipulação da DOM (Document Object Model), uma _api_ presentes nos browsers, que permite a renderização do conteúdo das páginas web. Até algum tempo atrás, existiam muitos problemas de compatibilidade entre os navegadores. Assim, você desenvolvia uma aplicação, testava no Internet Explorer e no Chrome, por exemplo, frequente mente podia funcionar o código em um e em outro não. Isso que gerava muita frustração para desenvolvedores, que acabavam por atribuir a dificuldade da resolução destes problemas a própria linguagem. 

A boa notícia é que, embora ainda existam algumas diferenças para a implementação, principalmente dos recursos mais recentes da linguagem, isso já é facilmente contornado e a maior parte do _core_ do JavaScript já é implementada da mesma forma pela maioria dos navegadores.

Além disso, o JavaScript é a linguagem da Web e a web, hoje, está presente em quase tudo. Assim, todos os holofotes estão focados para a linguagem. O que permite que tenhamos soluções para quase todos os problemas que venhamos a ter, muitas ferramentas que possibilitam a resolução muitos tipos de problemas, seja para uma animação no browser até uma aplicação que utiliza inteligência artificial.

#### O início

O javaScript foi inspirada em uma linguagem chamada HyperTalk, criada por _Dan Winkler_ em 1987 e utilizada nos computadores da Apple em uma plataforma chamada de HyperCard. 
A plataforma do HyperCard incluía um software e uma plataforma de desenvolvimento. Possuía um banco de dados de arquivo simples. Já a linguagem HyperTalk, inclusa na plataforma, com uma sintaxe simples, permitia que fosse manipulado dados e a interface do usuário. Tudo isso orientado a eventos. Esse conjunto de ferramentas possibilitavam que programadores iniciantes pudessem utilizar a ferramenta em um conjunto enorme projetos diferentes.

<img src="/assets/danwinkler.jpg" title="Dan Winkler - Criador do HyperTalk" alt="Dan Winkler" width="180">

A Netscape, ao conhecer a tecnologia, teve a ideia de embargar em seu navegador uma linguagem semelhante. para isso, contratou um programador chamado Brendan Eich, que era bastante conhecido pelo seu trabalho em compiladores para uma outra linguagem chamada _Scheme_. 

O problema é que, quando eles chamaram o Brendan, eles não conheciam realmente esta linguagem _Scheme_ e quando vieram a conhecer, descobriam que era o oposto ao que eles queriam, pois possuia uma sintaxe muito mais complexa.

Foi então abandonada a ideia de utilizar o _Scheme_ (como o Brandan chegou a sugerir) no projeto e então criada uma nova linguagem que ainda possuía algumas características do _Scheme_, mas utilizava várias características de outras linguagens também, como o _Java_, o _Self_ e o _Perl_.

<img src="/assets/brendaneich.jpg" title="Brendan Eich - Criador do JavaScript" alt="Brendan Eich" width="180">

O primeiro nome desta linguagem criada foi *Mocha* por sugestão de Mark Andreessen, fundador da Netscape. Porém, quando foi oficialmente lançada em versões beta do Netscape Navigator 2.0, em setembro de 1995, foi chamada de LiveScript.

Neste momento, começa um período que ficou conhecido como "Guerra dos browsers", que vai de 1995 até 1999. E é o momento que a Microsoft entra no mercado dos browsers, com o Internet Explorer. O navegador foi disponibilizado gratuitamente para todos os usuários do sistema operacional Windows. o que quebrou a hegemonia da Netscape.

Assim, como estratégia de marketing, a Netscape juntou forças com a Sun Microsystems. Na época, a linguagem de programação Java estava no auge, após seu lançamento em 1992, porém esta linguagem não se adequava aos propósitos da Netscape. Assim, possivelmente, para ganhar um pouco da atenção que Java estava tendo naquele momento, o LiveScript passou a ser chamado de JavaScript.

A Microsoft porém, não ficou muito tempo para trás. Logo lançou uma versão do Internet Explorer com uma linguagem chamada JScript. Que era essencialmente o JavaScript da Netscape, mas que por motivos de propriedade intelectual a microsoft não poderia utilizar.

Foi então em 1997 que a Netscape procura a ECMA Internacional a fim de padronizar a linguagem JavaScript, nascendo assim o ECMAScript.
