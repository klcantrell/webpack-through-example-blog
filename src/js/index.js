import Router from './Router';
import App from './App';
import LoadingSpinner from './LoadingSpinner';

const app = App();

Router
  .on(() => {
    app.render(LoadingSpinner);
    import('./Home')
      .then(Home => {
        app.render(Home.default);
      });
  })
  .resolve();

Router
  .on('/tasty', () => {
    app.render(LoadingSpinner);
    import('./Tasty')
      .then(Tasty => {
        app.render(Tasty.default);
      });
  });
