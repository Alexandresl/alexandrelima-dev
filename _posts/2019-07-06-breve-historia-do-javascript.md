---
layout: post
title: Breve história do JavaScript
date: 2019-07-06 17:01:00 -3:00
author: Alexandre Lima
summary: Vamos conhecer a origem de uma das linguagens mais utilizadas na atualidade.
categories:
---

# Início no Netscape

```javascript
<script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);

}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
</script>

<div id="txt"><script type="text/javascript">document.write(startTime())
</script>
</div>
```

Em 1993, o Centro Nacional de Aplicações de Supercomputação (NCSA), uma unidade da Universidade de Illinois em Urbana-Champaign, lançou o NCSA Mosaic, o primeiro navegador gráfico popular da Web, que desempenhou um papel importante na expansão do crescimento da nascente World Wide Web além do nicho NeXTSTEP onde a World Wide Web havia se formado três anos antes. Em 1994, uma empresa chamada Mosaic Communications foi fundada em Mountain View, na Califórnia, e empregou muitos dos autores originais do NCSA Mosaic para criar o Mosaic Netscape. No entanto, não compartilhou intencionalmente nenhum código com o NCSA Mosaic. O codinome interno do navegador da empresa era Mozilla, uma junção de "Mosaic and Godzilla" . A primeira versão do navegador da Web, Mosaic Netscape 0.9, foi lançada no final de 1994. Em quatro meses, já havia conquistado três quartos do mercado de navegadores e se tornado o principal navegador da Web nos anos 90. Para evitar problemas de propriedade de marca registrada com o NCSA, o navegador foi posteriormente renomeado para Netscape Navigator no mesmo ano, e a empresa assumiu o nome de Netscape Communications. A Netscape Communications percebeu que a Web precisava se tornar mais dinâmica. Marc Andreessen, o fundador da empresa, acreditava que o HTML precisava de uma "linguagem de cola" que fosse fácil de usar por Web designers e programadores de meio período para montar componentes como imagens e plugins, onde o código poderia ser escrito diretamente na Web.

Em 1995, a Netscape Communications recrutou Brendan Eich com o objetivo de incorporar a linguagem de programação Scheme em seu Netscape Navigator. Antes que ele pudesse começar, a Netscape Communications colaborou com a Sun Microsystems para incluir na linguagem de programação mais estática do Netscape Navigator Sun, Java, a fim de competir com a Microsoft pela adoção de tecnologias e plataformas da Web. A Netscape Communications decidiu então que a linguagem de script que eles queriam criar complementaria o Java e deveria ter uma sintaxe semelhante, o que excluía a adoção de outras linguagens como Perl, Python, TCL ou Scheme. Para defender a ideia do JavaScript contra propostas concorrentes, a empresa precisava de um protótipo. Eich escreveu um em 10 dias, em maio de 1995.

Embora tenha sido desenvolvido sob o nome Mocha, a linguagem foi oficialmente chamada de LiveScript quando foi lançada em versões beta do Netscape Navigator 2.0 em setembro de 1995, mas foi renomeada para JavaScript quando foi lançada no Netscape Navigator 2.0 beta 3 Dezembro. A escolha final do nome causou confusão, dando a impressão de que a linguagem era uma derivação da linguagem de programação Java, e a escolha foi caracterizada como uma manobra de marketing da Netscape para dar ao JavaScript o status da linguagem da moda, o Java.

Há um equívoco comum de que o JavaScript foi influenciado por uma linguagem de script de página da Web desenvolvida pelo Nombas chamada Cmm (não confundir com o C posteriormente - criado em 1997). Brendan Eich, no entanto, nunca tinha ouvido falar de Cmm antes de criar o LiveScript. Os Nombas lançaram seus scripts de página da Web incorporados no Netscape, embora o script de página da Web não fosse um conceito novo, conforme mostrado pelo navegador da Web ViolaWWW. Nombas mais tarde passou a oferecer JavaScript em vez de Cmm em seu produto ScriptEase e fazia parte do grupo TC39 que padronizava o ECMAScript. 

# JavaScript Back-end

Em dezembro de 1995, logo depois de lançar o JavaScript para navegadores, a Netscape introduziu uma implementação da linguagem para scripting server-side com o Netscape Enterprise Server. 

Desde 1996, o servidor da Web do IIS tem suportado a implementação do JavaScript - JScript do lado do servidor - em páginas ASP e .NET. 

Desde meados da década de 2000, foram introduzidas implementações adicionais de JavaScript no lado do servidor, como o Node.js em 2009. 

# Adoção pela Microsoft

As tecnologias de script da Microsoft, incluindo VBScript e JScript, foram lançadas em 1996. JScript, uma implementação de engenharia reversa do JavaScript da Netscape, fazia parte do Internet Explorer 3. O JScript também estava disponível para scripts do servidor no Internet Information Server. O Internet Explorer 3 também incluiu o primeiro suporte da Microsoft para CSS e várias extensões para HTML, mas em cada caso a implementação era visivelmente diferente daquela encontrada no Netscape Navigator na época. Essas diferenças tornaram difícil para os designers e programadores fazerem um único site funcionar bem em ambos os navegadores, levando ao uso dos logotipos "melhor visualizado no Netscape" e "melhor visualizado no Internet Explorer" que caracterizaram esses primeiros anos de guerras de navegadores. O JavaScript começou a adquirir a reputação de ser um dos obstáculos a uma Web de plataforma cruzada e baseada em padrões. Alguns desenvolvedores assumiram a difícil tarefa de tentar fazer com que seus sites funcionassem em ambos os principais navegadores, mas muitos não podiam arcar com o tempo . Com o lançamento do Internet Explorer 4, a Microsoft introduziu o conceito de HTML Dinâmico, mas as diferenças nas implementações de linguagem e nos diferentes e proprietários Modelos de Objeto de Documento permaneceram e foram obstáculos à adoção generalizada de JavaScript na Web.

# Padronização

Em novembro de 1996, a Netscape submeteu o JavaScript à ECMA International para criar uma especificação padrão, que outros fornecedores de navegador poderiam implementar com base no trabalho feito na Netscape. Isso levou ao lançamento oficial da especificação de linguagem ECMAScript publicada na primeira edição da norma ECMA-262 em junho de 1997, sendo o JavaScript a mais conhecida das implementações. ActionScript e JScript eram outras implementações bem conhecidas do ECMAScript.

O lançamento do ECMAScript 2 em junho de 1998 deu continuidade ao ciclo de processo de padrões, conforme algumas modificações do padrão internacional ISO / IEC 16262. ECMAScript 3 foi lançado em dezembro de 1999 e é a linha de base moderna para JavaScript. O trabalho original do ECMAScript 4 liderado por Waldemar Horwat (então na Netscape, agora no Google) começou em 2000. A Microsoft inicialmente participou e implementou algumas propostas em sua linguagem JScript .NET.

Com o tempo, ficou claro que a Microsoft não tinha intenção de cooperar ou implementar o JavaScript adequado no Internet Explorer, mesmo que eles não tivessem uma proposta concorrente e tivessem uma implementação parcial (e divergente neste ponto) no lado do servidor .NET. Então, em 2003, o trabalho original do ECMAScript 4 foi desativado.

O próximo grande evento foi em 2005, com dois grandes acontecimentos na história do JavaScript. Primeiro, Brendan Eich e Mozilla juntaram-se novamente à Ecma International como um membro sem fins lucrativos e começaram a trabalhar no ECMAScript para XML (E4X), o padrão ECMA-357, que veio de ex-funcionários da Microsoft na BEA Systems (originalmente adquirida como Crossgain) . Isso levou a trabalhar em conjunto com a Macromedia (posteriormente adquirida pela Adobe Systems), que estava implementando o E4X no ActionScript 3 (o ActionScript 3 era um fork do ECMAScript 4 original).

Assim, juntamente com a Macromedia, o trabalho foi reiniciado no ECMAScript 4 com o objetivo de padronizar o que estava no ActionScript 3. Para isso, a Adobe Systems lançou a ActionScript Virtual Machine 2, codinome Tamarin, como um projeto de código aberto. Mas Tamarin e ActionScript 3 eram muito diferentes do JavaScript da web para convergir, como foi realizado pelas partes em 2007 e 2008.

Infelizmente, ainda havia turbulência entre os vários jogadores; Douglas Crockford - então no Yahoo! - juntou forças com a Microsoft em 2007 para se opor ao ECMAScript 4, o que levou ao esforço do ECMAScript 3.1. O desenvolvimento do ECMAScript 4 nunca foi concluído, mas esse trabalho influenciou versões subsequentes.

Enquanto tudo isso acontecia, as comunidades de código aberto e de desenvolvedores começaram a trabalhar para revolucionar o que poderia ser feito com JavaScript. Esse esforço da comunidade surgiu em 2005, quando Jesse James Garrett lançou um white paper no qual cunhou o termo Ajax e descreveu um conjunto de tecnologias, das quais o JavaScript era o backbone, usado para criar aplicativos da Web onde os dados podem ser carregados em segundo plano, evitando a necessidade de recargas de páginas completas e levando a aplicativos mais dinâmicos. Isso resultou em um período de renascimento do uso do JavaScript liderado pelas bibliotecas de código aberto e pelas comunidades que se formaram em torno delas, com bibliotecas como Prototype, jQuery, Dojo Toolkit, MooTools e outras.

Em julho de 2008, os diferentes partidos de ambos os lados se reuniram em Oslo. Isso levou ao eventual acordo no início de 2009 para renomear o ECMAScript 3.1 para o ECMAScript 5 e impulsionar o idioma usando uma agenda que é conhecida como Harmonia. O ECMAScript 5 foi finalmente lançado em dezembro de 2009.

Em junho de 2011, o ECMAScript 5.1 foi lançado para se alinhar totalmente com a terceira edição do padrão internacional ISO / IEC 16262. O ECMAScript 2015 foi lançado em junho de 2015. O ECMAScript 2016 foi lançado em junho de 2016. A versão atual é o ECMAScript 2017, lançado em junho de 2017.

# Desenvolvimentos posteriores

JavaScript tornou-se uma das linguagens de programação mais populares da web. No entanto, muitos programadores profissionais inicialmente denegriram a linguagem devido ao público-alvo percebido de autores da Web e outros "amadores". O advento do Ajax devolveu o JavaScript aos holofotes e atraiu mais atenção da programação profissional. O resultado foi a proliferação de estruturas e bibliotecas abrangentes, práticas de programação JavaScript aprimoradas e aumento do uso de JavaScript fora dos navegadores da Web, conforme observado pela proliferação de plataformas JavaScript do lado do servidor.

Em janeiro de 2009, o projeto CommonJS foi fundado com o objetivo de especificar uma biblioteca padrão comum principalmente para o desenvolvimento de JavaScript fora do navegador. 

Com o surgimento de aplicativos de página única e sites pesados em JavaScript, ele está sendo cada vez mais usado como um alvo de compilação para compiladores de origem para origem de linguagens dinâmicas e estáticas.