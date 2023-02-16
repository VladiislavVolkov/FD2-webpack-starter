import './main.scss';
import { KEY_MAP } from './const';
import { KEYS } from './const';

const pads = document.querySelectorAll('.pad');
const visual = document.querySelector('.visual');

const playSounds = (key) => {
  const sound = KEY_MAP[key];
  const audio = new Audio(sound);
  audio.load();
  audio.play();
  const pad = Array.from(pads).find((item) => item.dataset.key === key);
  console.log(pad, key);
};

const onKeyPress = ({ code }) => {
  ///деструктизация объекта события
  if (KEYS[code]) {
    playSounds(code);
  } else {
    console.error('ERROR!');
  }
};

window.addEventListener('keypress', onKeyPress);
