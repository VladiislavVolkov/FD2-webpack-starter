class WebComponentCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div>
            <header>
                <h1>Title</h1>
            </header>
            <div>
                <p>Content</p>
            </div>
            <button>Click</button>
        </div>
    `;
  }
}

customElements.define('it-WebComponentCard', WebComponentCard);
