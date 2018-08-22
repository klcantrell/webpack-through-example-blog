import Router from './Router';

export default function Link({target, customText=undefined}) {
  const shell = document.createElement('div');
  const href = target.toLowerCase() === 'home' ? '/' : `/${target.toLowerCase()}`;
  shell.innerHTML = `
    <a href=${href}>
      ${customText || target.split('').map((char, idx) => { if (idx === 0) { return char.toUpperCase(); } return char.toLowerCase(); }).join('')}
    </a>
  `;
  
  return {
    node: shell.firstElementChild,
    markup: shell.innerHTML,
    bindNav(el) {
      const link = el.querySelector(`[href="${href}"`);
      link.addEventListener('click', e => {
        e.preventDefault();
        Router.navigate(e.target.getAttribute('href'));
      });
      return el;
    },
  };
}
