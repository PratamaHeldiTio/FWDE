import DrawerInitiator from '../utils/drawer-initiator';
import HomeRestaurant from './pages/home-restaurant';

class App {
  constructor({ drawer, button, content }) {
    this._drawer = drawer;
    this._button = button;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      drawer: this._drawer,
      button: this._button,
      content: this._content,
    });
  }

  async renderPage() {
    this._content.innerHTML = await HomeRestaurant.render();
    await HomeRestaurant.afterRender();
  }
}

export default App;
