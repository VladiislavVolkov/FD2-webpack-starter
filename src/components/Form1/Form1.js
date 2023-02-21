import '../Form.scss';
import { FORM_DEF1 } from '../Const';

class Form1 extends HTMLElement {
  constructor() {
    super();
    this.dataForm1 = FORM_DEF1;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = `<form action="" method="get" class="form"><div class="name-form">Форма #1</div></form>`;
    for (let key in this.dataForm1) {
      if (this.dataForm1[key].label) {
        const label = document.createElement('div');
        label.classList.add('mb-3');
        label.innerHTML = `<label class="form-label" id="${this.dataForm1[key].name}">${this.dataForm1[key].label}</label>`;
        document.querySelectorAll('.form')[0].appendChild(label);
        if (this.dataForm1[key].kind === 'longtext') {
          const longtext = `<input type="text" id="${this.dataForm1[key].name}" name="${this.dataForm1[key].name}" class="form-control ${this.dataForm1[key].kind}"/>`;
          label.insertAdjacentHTML('beforeend', longtext);
        } else if (this.dataForm1[key].kind === 'number') {
          const number = `<input type="text" id="${this.dataForm1[key].name}" name="${this.dataForm1[key].name}" class="form-control ${this.dataForm1[key].kind}"/>`;
          label.insertAdjacentHTML('beforeend', number);
        } else if (this.dataForm1[key].kind === 'shorttext') {
          const shorttext = `<input type="text" id="${this.dataForm1[key].name}" name="${this.dataForm1[key].name}" class="form-control ${this.dataForm1[key].kind}"/>`;
          label.insertAdjacentHTML('beforeend', shorttext);
        } else if (this.dataForm1[key].kind === 'combo') {
          const combo = `<select class="form-select" id="${this.dataForm1[key].name}">`;
          label.insertAdjacentHTML('beforeend', combo);
          for (let i = 0; i < this.dataForm1[key].variants.length; i++) {
            const variants = `<option value="${this.dataForm1[key].variants[i].value}">${this.dataForm1[key].variants[i].text}</option>`;
            document.querySelector('.form-select').insertAdjacentHTML('beforeend', variants);
          }
        } else if (this.dataForm1[key].kind === 'radio') {
          for (let i = 0; i < this.dataForm1[key].variants.length; i++) {
            const radio = document.createElement('div');
            radio.classList.add('form-check');
            radio.innerHTML = `
              <input class="form-check-input" type="radio" 
                name="radioForm" 
                id="${this.dataForm1[key].variants[i].value}">
              <label class="form-check-label" 
                for="${this.dataForm1[key].variants[i].value}">
                ${this.dataForm1[key].variants[i].text}
              </label>`;
            document.getElementById('payment').append(radio);
          }
        } else if (this.dataForm1[key].kind === 'check') {
          const check = `
            <input class="form-check-input" type="checkbox" value="" id="${this.dataForm1[key].name}" />
            <label class="form-check-label" for="${this.dataForm1[key].name}"></label>`;
          label.insertAdjacentHTML('beforeend', check);
        } else if (this.dataForm1[key].kind === 'memo') {
          const memo = `
            <textarea class="form-control" id="${this.dataForm1[key].name}" rows="3"></textarea>`;
          label.insertAdjacentHTML('beforeend', memo);
        }
      } else if (!this.dataForm1[key].label) {
        const button = `<button type="submit" class="btn btn-primary">${this.dataForm1[key].caption}</button>`;
        document.querySelectorAll('.form')[0].insertAdjacentHTML('beforeend', button);
      }
    }
  }
}

customElements.define('it-form-one', Form1);
