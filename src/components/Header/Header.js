import './Header.scss';
import { Button } from '../Button/Button';

export const Header = () => {
  return `
    <header class="header">
      <div class="logo">
        <img class="logo__img" src='../../assets/images/logo.png' alt="logo"/>
      </div>
      <nav class="header__navigation">
        <a href="#" class="active">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">FAQs</a>
        <a href="#">About</a>
      </nav>
      <input type="text" placeholder="...">
      ${Button('Login', 'btn_one')}
      ${Button('Sing-up', 'btn_two')}
    </header>
  `.trim();
};
