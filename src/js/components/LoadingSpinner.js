export default function LoadingSpinner() {
  const shell = document.createElement('div');
  // the css for our spinner is inlined as "critical css" in our index.html
  shell.innerHTML = `
    <div class="loading-spinner"></div>
  `;
  return {
    node: shell.firstElementChild,
    markup: shell.innerHTML,
  };
}
