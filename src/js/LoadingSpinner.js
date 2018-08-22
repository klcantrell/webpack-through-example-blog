export default function LoadingSpinner() {
  const shell = document.createElement('div');
  shell.innerHTML = `
    <div class="loading-spinner"></div>
  `;
  return {
    node: shell.firstElementChild,
    markup: shell.innerHTML,
  };
}
