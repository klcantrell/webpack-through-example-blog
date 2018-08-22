import Link from '../router/Link';

const link = Link({target: 'tasty', customText: 'Ooh, please click me!'});

export default function Home() {
  const shell = document.createElement('div');
  shell.innerHTML = `
    <div>
      <h2>This is the home component!</h2>
      ${link.markup}
    </div>
  `;
  return {
    node: link.bindNav(shell.firstElementChild),
    markup: shell.innerHTML,
  };
}
