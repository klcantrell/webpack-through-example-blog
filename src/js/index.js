import Router from './router/Router';
import App from './components/App';
import Home from './components/Home';
import Tasty from './components/Tasty';

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
