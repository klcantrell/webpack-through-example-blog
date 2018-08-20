import Link from './Link';
import FancyAnimation from './FancyAnimation';

export default function Hurray() {
  const hurray = document.createElement('div');
  hurray.innerHTML = `
    <h2>This is the hurray route!</h2>
  `;
  hurray.appendChild(Link('Home'));
  hurray.appendChild(FancyAnimation());
  return hurray;
}
