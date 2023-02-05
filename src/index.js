import { Header } from './components/Header/Header';
import './main.scss';

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Header());

console.log('Hello IT-academy student 🚀');
