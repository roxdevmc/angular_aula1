class cardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
       //vai add esses elementos, super (pai), herança classes
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
//construção dos elementos
    build(){
        const componentRoot = document.createElement("div");
        //atribui classe ao component
        componentRoot.setAttribute("class", "card");

        //card Left
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        // card Right
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        
        const newsImage = document.createElement("img");
        newsImage.src= this.getAttribute("photo") || "assets/default.jpg";
        newsImage.alt="Foto da noticia";
        cardRight.appendChild(newsImage);

        //ligacao dos cards com o principal
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        // retorna tudo feito na principal
        return componentRoot;

    }
// estilo do componente
    styles(){
        const style = document.createElement("style");
        style.textContent=`
        
        .card{
            width: 720px;
            display: flex;
            flex-direction: row;
            box-shadow: 6px 7px 5px 0px rgba(0,0,0,0.75);
            -webkit-box-shadow: 6px 7px 5px 0px rgba(103, 103, 103, 0.75);
            -moz-box-shadow: 6px 7px 5px 0px rgba(90, 90, 90, 0.75);
            justify-content: space-between;
            margin: 20px 0;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        /* acessa o h1 que esta no card*/
        .card_left > a {
            margin-top: 10px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p {
                color: gray;
        }
        
        .card_left > span {
            font-weight: 400px;
        }
        
        .card_right > img{
            max-width: 280px;
            max-height: 150px;
        }
        
        `


        return style;
    }
}

customElements.define("card-news", cardNews);
