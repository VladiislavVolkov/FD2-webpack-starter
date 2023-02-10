import './main.scss';

const pads = document.querySelectorAll('.pad');
const visual = document.querySelector('.visual');

export const KEY_MAP = {
  kick: 'a',
  cymbal: 's',
  snare: 'd',
  openHat: 'f',
  longCrash: 'g',
  hitKat: 'h',
};

export const SOUNDS = [
  '../assets/sounds/kick.wav',
  '../assets/sounds/cymbal.wav',
  '../assets/sounds/snare.wav',
  '../assets/sounds/openhat.wav',
  '../assets/sounds/long-crash.wav',
  '../assets/sounds/hihat.wav',
];

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
      console.log('enter A');
      break;
    case 's':
      playSound(1);
      console.log('enter S');
      break;
    case 'd':
      playSound(2);
      console.log('enter D');
      break;
    case 'f':
      playSound(3);
      console.log('enter F');
      break;
    case 'g':
      playSound(4);
      console.log('enter G');
      break;
    case 'h':
      playSound(5);
      console.log('enter H');
      break;
    default:
      console.error('Error!!!');
      break;
  }
};

window.addEventListener('keypress', onKeyPress);
