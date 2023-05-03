class tituloDimamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //base do component <h1>Felipe</h1>
    const componentRoot = document.createElement("h1");
    // o conteudo do h1 vai ser oq ele pegar do titulo
    componentRoot.textContent = this.getAttribute('titulo');

    //estilo component
    const style = document.createElement("style");
    style.textContent = `
            h1{
                color: red;
            }
        `;

    //enviar para shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

// sempre ter o - no nome do customElements
customElements.define("titulo-dinamico", tituloDimamico);
