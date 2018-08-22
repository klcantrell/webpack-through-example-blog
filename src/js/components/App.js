export default function App() {
  const appEl = document.getElementById('app');

  return {
    render(component) {
      while(appEl.firstChild) {
        appEl.removeChild(appEl.firstChild);
      }
      appEl.appendChild(component().node);
    }
  }
}
