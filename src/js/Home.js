import Link from './Link';

export default function Home() {
  const home = document.createElement('div');
  home.innerHTML = `
    <h2>This is the home component!</h2>
  `;
  home.appendChild(Link('hurray'));
  return home;
}
