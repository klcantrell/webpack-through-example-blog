export default function Home() {
  const shell = document.createElement('div');
  shell.innerHTML = `
    <div>
      <h2>This is the home component!</h2>
      <a href="tasty" data-navigo>Tasty</a>
    </div>
  `;
  // each component has this base API returned
  return {
    node: shell.firstElementChild, // node is used by the render function of app to place the element on the page
    markup: shell.innerHTML, // markup is used by other components to compose the HTML into a bigger component
  };
}
