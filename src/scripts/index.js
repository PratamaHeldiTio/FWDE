import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  drawer: document.querySelector('#drawer'),
  button: document.querySelector('#nav-icon'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
