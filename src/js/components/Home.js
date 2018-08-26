export default function Home() {
  const shell = document.createElement('div');
  // notice the data-navigo attribute in the anchor tag.  this is used by navigo to bind event handlers to the element
  shell.innerHTML = `
    <div>
      <h2>This is the home component!</h2>
      <a href="tasty" data-navigo>Tasty</a>
    </div>
  `;
  // each component from this example has this API returned
  return {
    node: shell.firstElementChild, // node is used by the render function of App to place the element on the page
    markup: shell.innerHTML, // markup is used by other components to compose the HTML into a bigger component
  };
}
