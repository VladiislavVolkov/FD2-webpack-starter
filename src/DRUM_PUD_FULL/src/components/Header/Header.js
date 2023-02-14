import './Header.scss';
import { Button } from '../Button/Button';

export const Header = () => {
  return `
    <header class='header'>
        <nav class="navigation">
            <a class='navigation__link navigation__link--active' href="#">Link #1</a>
            <a class='navigation__link 'href="#">Link #2</a>
            <a class='navigation__link' href="#">Link #3</a>
        </nav>
        ${Button('Click Me!', 'header_btn')}
        ${Button('Sign in!')}
    </header>
  `.trim();
};
