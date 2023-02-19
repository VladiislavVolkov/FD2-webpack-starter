class SearchList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['list'];
  }

  render() {
    const data = JSON.parse(this.getAttribute('list'));
    this.innerHTML = `<ul class="list-group position-absolute">
        ${data
          .map((item) => {
            return `<li class="list-group-item">${item}</li>`;
          })
          .join(' ')}
    </ul>
    `;
  }
}

customElements.define('it-searchlist', SearchList);
