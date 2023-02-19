import './Card.scss';

class WebComponentCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <div class='card'>
              <header class='card__header'>
                  <h1>${this.getAttribute('header-content')}</h1>
              </header>
              <div class='card__body'>
                  <p>${this.getAttribute('body-content')}</p>
              </div>
              <button class='card__button'>Click</button>
          </div>
      `;
  }
}

customElements.define('it-webcomponentcard', WebComponentCard);
