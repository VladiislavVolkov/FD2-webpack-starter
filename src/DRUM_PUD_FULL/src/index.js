import './main.scss';
import { SOUNDS } from './constants';

const pads = document.querySelectorAll('.pad');
const visual = document.querySelector('.visual');

const playSound = (index) => {
  const sound = SOUNDS[index];
  const audio = new Audio(sound);
  audio.load();
  audio.play();
};

const onKeyPress = ({ key }) => {
  switch (key) {
    case 'a':
      playSound(0);
      break;
    case 's':
      playSound(1);
      break;
    case 'd':
      playSound(2);
      break;
    case 'f':
      playSound(3);
      break;
    case 'g':
      playSound(4);
      break;
    case 'h':
      playSound(5);
      break;

    default:
      console.error('Error!!! Wrong a key');
      break;
  }
};

window.addEventListener('keypress', onKeyPress);
