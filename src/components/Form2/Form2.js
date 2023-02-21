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
    let keys = this.dataForm2;
    for (let i = 0; i < keys.length; i++) {
      const firstLevel = keys[i];
      const kind = firstLevel.kind;
      if (firstLevel.label) {
        const label = document.createElement('div');
        label.classList.add('mb-3');
        label.innerHTML = `<label class="form-label" id="${firstLevel.name}">${firstLevel.label}</label>`;
        document.querySelectorAll('.form')[1].appendChild(label);
        const textAndNumber = `<input type="text" id="${kind}" name="${kind}" class="form-control ${kind}"/>`;
        label.insertAdjacentHTML('beforeend', textAndNumber);
      } else {
        const button = `<button type="submit" class="btn btn-primary">${firstLevel.caption}</button>`;
        document.querySelectorAll('.form')[1].insertAdjacentHTML('beforeend', button);
      }
    }
  }
}

customElements.define('it-form-two', Form2);
