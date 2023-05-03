# Curso Angular - DIO | 02/05/2023 - Felipão

Aula 1 | Web Components Front-end

html | tags

conjuntos de tags/elementos - componentes
<div>
    <span>
    <h1>
    <p>
    <img>
</div>

Components - criar a propria tag e seu comportamento

css generator.org
https://cssgenerator.org/box-shadow-css-generator.html

duvidas <3
https://pt.stackoverflow.com/

lololsolsalaksdjasnd
asnkdksdfsdfwdfsdf
hjnmdfdsdfwdfsdfwsdfsdfsdfsdfsdfsdf


Doc HTML quando passa pro navegador (Browser) ocorre o processo PARSED - converte o doc html pro browser e reendeniza como D.O.M (document object model)
formato visual "tipo uma arvore genealogica"

shadow DOM - permite criar uma nova "arvore" dentro de uma ramificacao, doc dentro de um doc, vc tem total controle, trabalho encapsulado

para consulta:
https://caniuse.com/


Shadow-root |Shadow DOM
defer - so executa o script apos a conclusao da DOM, apos ela ser criada ele anexa um fantasma nela
ps: usar quando o script ficar no top e nao no final da pagina

Base para criar uma shadow root

class nomeTag extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
    }
}

customElements.define("nome-nome", nomeTag);

Arquitetura Componentes

tags html, css, prop - cada tag é um elements
um conjunto de elementos é um componente

Tudo que vc cria dentro do Shadwo ele funciona somente ali, n tem escopo global
todo o comportamento do componente é isolado do resto do documento

ex: tituloDinamico.js

CODIGO ANTES DA REFATORAÇÃO 

class cardNews extends HTMLElement {
    constructor(){
       //invoca o metodo constructor
        super();

        //criar uma shadow, open outro JS pode influenciar, close nada influencia
        const shadow = this.attachShadow({mode:"open"});
        // print no HTML
        shadow.innerHTML = "<h1> Hello World</h1>"
    }
}

// criou um elemento customizado, que vai se chamar card-news e que usa de molde o CardNews
customElements.define('card-news', cardNews)


Criando uma prop
>transformar um componente dinamico
ex: titulo-dinamico




