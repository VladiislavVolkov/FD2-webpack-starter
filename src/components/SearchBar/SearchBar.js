import './SearchBar.scss';
import '../SearchList/SearchList';

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.dataCountries = [
      'Albania',
      'Bahamas',
      'Armenia',
      'Belarus',
      'Brazil',
      'Czech Republic',
      'Ukraine',
      'Germany',
      'Poland',
      'Finland',
      'Estonia',
      'Denmark',
      'Slovakia',
      'Slovenia',
      'Georgia',
      'France',
    ];
  }

  onSearch = (evt) => {
    const value = evt.target.value.trim().toLowerCase();
    const filtredData = this.dataCountries.filter((item) => item.toLowerCase().includes(value));
    console.log(filtredData);
    const listContainer = this.querySelector('.list-container');
    listContainer.innerHTML = `<it-searchlist list='${JSON.stringify(filtredData)}'></it-searchlist>`;
  };

  disconnectedCallback() {
    this.removeEventListener('input', this.onSearch);
  }

  connectedCallback() {
    this.render();
    this.addEventListener('input', this.onSearch);
  }
  render() {
    this.innerHTML = `
      <div id='root2' >    
        <form action="" method="post" class='form position-relative'>
            <input id="post-name" type="search" name="name" class='form__input'>
            <div class='list-container'>

            </div>
        </form>
      </div>    
    `;
  }
}

customElements.define('it-webcomponentsearchbar', SearchBar);
