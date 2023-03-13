import './Card.scss';

class WebComponentCard extends HTMLElement {
  onRemove = (evt) => {
    if (evt.target.closest('.card__button')) {
      this.remove();
      console.log(evt.target);
    }
    if (evt.target.closest('.card__header ')) {
      this.remove();
      console.log(evt.target);
    }
    console.log('просто нажали');
  };

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.onRemove);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onRemove);
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
