import Router from './router/Router';
import App from './components/App';
import Home from './components/Home';
import Tasty from './components/Tasty';

// instatiate app
const app = App();

// on the root route, the app will render the Home component
Router
  .on(() => {
    app.render(Home);
  })
  .resolve(); // manually have navigo check the route

// navigating to the "tasty" route triggers to app to render the Tasty component
Router
  .on('/tasty', () => {
    app.render(Tasty);
  });
