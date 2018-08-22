import Router from './Router';
import App from './App';
import Home from './Home';
import Tasty from './Tasty';

const app = App();

Router
  .on(() => {
    app.render(Home);
  })
  .resolve();

Router
  .on('/tasty', () => {
    app.render(Tasty);
  });
