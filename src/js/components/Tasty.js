import Link from '../router/Link';
import FancyAnimation from './FancyAnimation';

const link = Link({target: '/', customText: 'Home'});
const fancyAnimation = FancyAnimation();

export default function Tasty() {
  const shell = document.createElement('div');
  shell.innerHTML = `
    <div>
      <h2>Tasty!</h2>
      ${link.markup}
      ${fancyAnimation.markup}
    </div>
  `;
  return {
    node: link.bindNav(shell.firstElementChild),
    markup: shell.innerHTML,
  };
}
