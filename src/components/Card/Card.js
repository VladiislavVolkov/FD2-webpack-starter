import './Card.scss';

class WebComponentCard extends HTMLElement {
  disconnectedCallback() {
    console.log('Удален');
    this.removeEventListener('click', this.onRemove);
  }

  onRemove = (evt) => {
    // this.remove();
    if (evt.target.closest('.card__button')) {
      this.remove();
    }
  };

  connectedCallback() {
    this.render();
    // const btn = this.querySelector('.card__button');
    // btn.addEventListener('click', this.onRemove);
    this.addEventListener('click', this.onRemove);
  }

  render() {
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
