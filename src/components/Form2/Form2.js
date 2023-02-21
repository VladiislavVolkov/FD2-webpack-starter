import '../Form.scss';
import { FORM_DEF2 } from '../Const';

class Form2 extends HTMLElement {
  constructor() {
    super();
    this.dataForm2 = FORM_DEF2;
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {}

  render() {
    this.innerHTML = `<form action="" method="get" class="form"><div class="name-form">Форма #2</div></form>`;
    for (let key in this.dataForm2) {
      if (this.dataForm2[key].label) {
        const label = document.createElement('div');
        label.classList.add('mb-3');
        label.innerHTML = `<label class="form-label" id="${this.dataForm2[key].name}">${this.dataForm2[key].label}</label>`;
        document.querySelectorAll('.form')[1].appendChild(label);
        if (this.dataForm2[key].kind === 'longtext') {
          const longtext = `<input type="text" id="${this.dataForm2[key].name}" name="${this.dataForm2[key].name}" class="form-control ${this.dataForm2[key].kind}"/>`;
          label.insertAdjacentHTML('beforeend', longtext);
        } else if (this.dataForm2[key].kind === 'number') {
          const number = `<input type="text" id="${this.dataForm2[key].name}" name="${this.dataForm2[key].name}" class="form-control ${this.dataForm2[key].kind}"/>`;
          label.insertAdjacentHTML('beforeend', number);
        }
      } else if (!this.dataForm2[key].label) {
        const button = `<button type="submit" class="btn btn-primary">${this.dataForm2[key].caption}</button>`;
        document.querySelectorAll('.form')[1].insertAdjacentHTML('beforeend', button);
      }
    }
  }
}

customElements.define('it-form-two', Form2);
