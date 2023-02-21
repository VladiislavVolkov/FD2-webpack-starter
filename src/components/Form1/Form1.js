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
    let keys = this.dataForm1;
    for (let i = 0; i < keys.length; i++) {
      const firstLevel = keys[i];
      if (firstLevel.label) {
        const label = document.createElement('div');
        label.classList.add('mb-3');
        label.innerHTML = `<label class="form-label" id="${firstLevel.name}">${firstLevel.label}</label>`;
        document.querySelectorAll('.form')[0].appendChild(label);
        const secondLevel = firstLevel.variants;
        switch (firstLevel.kind) {
          case 'longtext':
          case 'shorttext':
          case 'number': {
            const caseTextAndNumber = `
              <input type="text" id="${firstLevel.kind}" name="${firstLevel.kind}" class="form-control ${firstLevel.kind}"/>`;
            label.insertAdjacentHTML('beforeend', caseTextAndNumber);
            break;
          }
          case 'combo': {
            const combo = `<select class="form-select" id="${firstLevel.kind}">`;
            label.insertAdjacentHTML('beforeend', combo);
            for (let i = 0; i < secondLevel.length; i++) {
              const variants = `<option value="${secondLevel[i].value}">${secondLevel[i].text}</option>`;
              document.querySelector('.form-select').insertAdjacentHTML('beforeend', variants);
            }
            break;
          }
          case 'radio':
            for (let i = 0; i < secondLevel.length; i++) {
              const radio = document.createElement('div');
              radio.classList.add('form-check');
              radio.innerHTML = `
                <input class="form-check-input" type="radio" name="radioForm" id="${secondLevel[i].value}">
                <label class="form-check-label" for="${secondLevel[i].value}">${secondLevel[i].text} </label>`;
              document.getElementById('payment').append(radio);
            }
            break;
          case 'check': {
            const check = `
              <input class="form-check-input" type="checkbox" value="" id="${firstLevel.name}" />
              <label class="form-check-label" for="${firstLevel.name}"></label>`;
            label.insertAdjacentHTML('beforeend', check);
            break;
          }
          case 'memo': {
            const memo = `<textarea class="form-control" id="${firstLevel.name}" rows="3"></textarea>`;
            label.insertAdjacentHTML('beforeend', memo);
            break;
          }
        }
      } else {
        const button = `<button type="submit" class="btn btn-primary">${firstLevel.caption}</button>`;
        document.querySelectorAll('.form')[0].insertAdjacentHTML('beforeend', button);
      }
    }
  }
}

customElements.define('it-form-one', Form1);
