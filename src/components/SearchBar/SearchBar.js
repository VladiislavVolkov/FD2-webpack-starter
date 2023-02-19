import './SearchBar.scss';

class SearchBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <form action="" method="post" class='form'>
            <label for="post-name">
                Поиск по странам:
                <input id="post-name" type="search" name="name" class='form__input'>
            </label>
        <button type="submit" class='form__button'>Сохранить</button>
        </form>
    `;
  }
}

customElements.define('it-webcomponentsearchbar', SearchBar);
