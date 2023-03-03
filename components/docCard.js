class DocumentCard extends HTMLElement {

    dtpUrl = "http://www.interreg-danube.eu/uploads/media/approved_project_" + this.getAttribute('link');

    connectedCallback() {
        const docCardTitle = document.createElement('div');
        docCardTitle.classList.add('document_card_title');
        docCardTitle.textContent = this.getAttribute('title');

        const cardConent = document.createElement('div');
        cardConent.classList.add('card_content');
        cardConent.appendChild(docCardTitle);

        const docCard = document.createElement('div');
        docCard.classList.add('document_card');
        docCard.appendChild(cardConent);

        const link = document.createElement('a');
        link.classList.add('card_link');
        link.href = this.dtpUrl;
        link.target = '_blank';
        link.appendChild(docCard);

        this.appendChild(link);
    }
}

window.customElements.define('document-card', DocumentCard);