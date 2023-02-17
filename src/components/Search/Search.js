import './Search.scss';

class Search extends HTMLElement {

disconnectedCallback() {
    
}

  connectedCallback() {
    this.innerHTML = `
        <div class='search'>
            <input type='search' class='searchcontrole' placeholder='Search...'>
        </div>
      `;
  }
}

customElements.define('it-search', Search);
