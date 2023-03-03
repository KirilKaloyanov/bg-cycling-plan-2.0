fetch("templates/cardTemplate.html")
.then((response) => response.text())
.then((html) => card(html));

function card(html) {
const parser = new DOMParser();
const doc = parser.parseFromString(html, "text/html");
const cardTemplate = doc.querySelector("template");

class MyCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    this.shadowRoot.querySelector(".card_title").textContent =
      this.getAttribute("title");
    this.shadowRoot.querySelector(".card_author").textContent =
      this.getAttribute("author");
    this.shadowRoot.querySelector("a.card_link").href =
      this.getAttribute("link");
  }
}

window.customElements.define("my-card", MyCard);
}