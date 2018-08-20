import Router from './Router';

export default function Link(target) {
  const link = document.createElement('a');
  link.textContent = target.split('').map((char, idx) => { if (idx === 0) { return char.toUpperCase(); } return char.toLowerCase(); }).join('');
  link.href = target.toLowerCase() === 'home' ? '/' : `/${target.toLowerCase()}`;
  link.addEventListener('click', e => {
    e.preventDefault();
    Router.navigate(e.target.getAttribute('href'));
  })
  return link;
}
