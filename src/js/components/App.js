import Router from '../router/Router';

export default function App() {
  const appEl = document.getElementById('app');

  return {
    render(component) {
      // iterate through the children of the root node and delete them all
      while(appEl.firstChild) {
        appEl.removeChild(appEl.firstChild);
      }
      // then, add new node as a child to the root node
      appEl.appendChild(component().node);
      // navigo library requires this to add handlers to dynamically added anchor elements
      Router.updatePageLinks();
    }
  }
}
