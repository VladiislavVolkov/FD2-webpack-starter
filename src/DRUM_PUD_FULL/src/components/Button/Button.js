import './Button.scss';

export const Button = (text, className) => {
  return `
    <button class='btn ${className}'>${text}</button>
  `;
};
