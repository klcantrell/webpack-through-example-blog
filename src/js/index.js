import Router from './Router';
import App from './App';
import Home from './Home';
import Hurray from './Hurray';

const app = App();

Router
  .on(() => {
    app.render(Home);
  })
  .resolve();

Router
  .on('/hurray', () => {
    app.render(Hurray);
  });
