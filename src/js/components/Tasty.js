import FancyAnimation from './FancyAnimation';

const fancyAnimation = FancyAnimation();

export default function Tasty() {
  const shell = document.createElement('div');
  shell.innerHTML = `
    <div>
      <h2>Tasty!</h2>
      <a href="/" data-navigo>Home</a>
      ${fancyAnimation.markup}
    </div>
  `;
  return {
    node: shell.firstElementChild,
    markup: shell.innerHTML,
  };
}
