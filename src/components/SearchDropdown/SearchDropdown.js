import './SearchDropdown.scss';

class SearchDropdown extends HTMLElement {
  constructor() {
    super();
    this.data = ['Belarus', 'Germany', 'France', 'Georgia', 'Turkey', 'India', 'Poland'];
  }

  onSearch = (evt) => {
    const value = evt.target.value.trim().toLocaleLowerCase();
    const filteredData = this.data.filter((item) => item.toLocaleLowerCase().includes(value));
    const listContainer = this.querySelector('.list-container');
    listContainer.innerHTML = `
        <it-search-list list='${JSON.stringify(filtereddata)}'></it-search-list>`;
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
    <div class='container'>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0">
            <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
            <div class='list-container'>
               
            </div>
        </form>
    </div>
        `;
  }
}

customElements.define('it-search-dropdown', SearchDropdown);
